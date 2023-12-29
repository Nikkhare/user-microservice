import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}


  async all(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // @EventPattern('hello')
  // async hello(data: string){
  //   console.log(data);
  // }

  async create(data): Promise<User>{
    return new this.userModel(data).save();
  }

  async update(id: string, data): Promise<any> {
    return await this.userModel.findOneAndUpdate({id}, data); 
  }
}
