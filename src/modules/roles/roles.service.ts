import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DataSource, Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { manageError } from 'src/common/helpers/ErrorHandler.helper';
import { ApiResponse } from 'src/common/responses/ApiResponse';
import { NotFoundCustomException } from 'src/common/exceptions/NotFoundCustomException';
import { ConflictCustomException } from 'src/common/exceptions/ConflictCustomException';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly dataSource: DataSource,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    try {
      const role = await this.roleRepository.create(createRoleDto);

      await this.roleRepository.save(role)

      return ApiResponse.Create(role);

    } catch (error) {
      const entityMetadata = this.dataSource.getMetadata(Role);
      manageError(error, entityMetadata);
    }
  }

  async findAll() {
    const users = await this.roleRepository.find({
      relations: ['users'],
    });

    return ApiResponse.OK(users);
  }

  async findOne(id: number) {
    try {
      const role = await this.roleRepository.findOne({
        where: { id: id},
        relations: ['users'],
      })

      if (!role) {
        throw new NotFoundCustomException('Role no existe');
      }

      return ApiResponse.OK(role);
    } catch (error) {
      manageError(error);
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      const role = await this.findOne(id);

      const updateRole = await this.roleRepository.update(id, updateRoleDto);

      return ApiResponse.OK(updateRole);
      
    } catch (error) {
      const entityMetadata = this.dataSource.getMetadata(Role);
      manageError(error, entityMetadata);
    }
  }

  async remove(id: number) {
    try {
      const role = await this.findOne(id);

      if (role.data.users.length > 0) throw new ConflictCustomException('No se puede eliminar el rol porque está siendo utilizado por usuarios.');

      this.roleRepository.softDelete(id);

      return ApiResponse.OK();
    } catch (error) {
      manageError(error);
    }
  }
}
