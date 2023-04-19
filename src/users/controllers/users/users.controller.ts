import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { CreateUserProfileDto } from 'src/users/dtos/createUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userService.createUserPost(id, createUserPostDto);
  }
}
