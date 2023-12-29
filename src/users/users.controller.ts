import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.all();
  }

  @EventPattern('user_created')
  async create(user: any){
   await this.usersService.create({
      id: user.id,
      name: user.name,
      image: user.image,
      likes: user.like,
    });
  }

  @EventPattern('user_updated')
  async update(user: any){
    await this.usersService.update(user.id,
      {id: user.id,
      name: user.name,
      image: user.image,
      likes: user.like,}
    );
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(id);
  // }
}
