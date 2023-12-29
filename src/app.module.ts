import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017', {
    // // autoCreate: true,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
    dbName: 'user',
    // autoCreate: true,
  }
  ), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
