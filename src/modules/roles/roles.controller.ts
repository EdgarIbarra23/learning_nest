import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JoiValidationPipe } from 'src/common/pipes/JoiValidation.pipe';
import { roleValidation } from './joiValidation';
import { JwtAuthenticatedGuard } from 'src/common/guards/JwtAuthenticated.guard';
import { RolesPermissionGuard } from 'src/common/guards/RolesPermission.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @UsePipes(new JoiValidationPipe(roleValidation))
  @Post('save')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @UsePipes(new JoiValidationPipe(roleValidation))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
