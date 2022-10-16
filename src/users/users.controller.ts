import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('username')
  async getUserByUsername(@Param() param){
     return await this.usersService.getUserByUsername(param.username);
  }

  @Post('/register')
  async registerUser(@Body() createUserDto:CreateUserDto){
    return await this.usersService.registerUser(createUserDto);
  }
}
