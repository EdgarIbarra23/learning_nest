import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ApiResponse } from '../../common/responses/ApiResponse';
import { NotFoundCustomException } from 'src/common/exceptions/NotFoundCustomException';
import { manageError } from '../../common/helpers/ErrorHandler.helper';
import * as bcrypt from 'bcrypt';
import { RolesService } from '../roles/roles.service';
import { EmailService } from 'src/features/email/email.service';
import { NotificationService } from 'src/features/notification/notification.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private roleService: RolesService,
    private emailService: EmailService,
    private notificationService: NotificationService,
    private readonly dataSource: DataSource,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const role = await this.roleService.findOne(createUserDto.role);

      const user = this.userRepository.create({
        ...createUserDto,
        role: { id: role.data.id, name: role.data.name },
      });

      await this.userRepository.save(user);

      return ApiResponse.Create(user);
    } catch (error) {
      const entityMetadata = this.dataSource.getMetadata(User);
      manageError(error, entityMetadata);
    }
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations: ['role'],
    });

    const sanitizedUsers = users.map(this.sanitizeUser);

    const subject = 'Bienvenido a Developer Quest';
    const template = 'helloWorld/hello-world';
    const context = { name: 'Edgar Ibarra', message: 'Gracias por registrarte en nuestra plataforma.' };

    await this.emailService.sendMail('edgarfernandoibarra@gmail.com', subject, template, context);

    return ApiResponse.OK(sanitizedUsers);
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: id },
        relations: ['role'],
      });

      if (!user) {
        throw new NotFoundCustomException('Usuario no Existe');
      }

      await this.notificationService.trigger(user);

      return ApiResponse.OK(this.sanitizeUser(user))
    } catch (error) {
      manageError(error);
    }
  }

  async findName(name: string) {
    const user = await this.userRepository.findOne({
      where: { name: name },
      relations: ['role'],
    });

    return ApiResponse.OK(user)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      const role = await this.roleService.findOne(updateUserDto.role);

      if (updateUserDto.password) {
        const saltRounds = 10;
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, saltRounds);
      }

      const userUpdate = await this.userRepository.update(id, {
        ...updateUserDto,
        role: { id: role.data.id, name: role.data.name },
      });

      return ApiResponse.OK(userUpdate);
    } catch (error) {
      manageError(error);
    }
  }


  async remove(id: number) {
    try {
      const user = await this.findOne(id);
      this.userRepository.softDelete(id);

      return ApiResponse.OK();
    } catch (error) {
      manageError(error);
    }
  }

  private sanitizeUser(user: User) {
    const { createdAt, updatedAt, deletedAt, ...rest } = user;
    return rest;
  }

}
