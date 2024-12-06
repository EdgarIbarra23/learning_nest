import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JoiValidationPipe } from 'src/common/pipes/JoiValidation.pipe';
import { userValidation } from './joiValidation';
import { JwtAuthenticatedGuard } from 'src/common/guards/JwtAuthenticated.guard';
import { RolesPermissionGuard } from 'src/common/guards/RolesPermission.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new JoiValidationPipe(userValidation))
  @Post('save')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  
  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @UsePipes(new JoiValidationPipe(userValidation))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  
  @Roles(['admin'])
  @UseGuards(JwtAuthenticatedGuard, RolesPermissionGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
