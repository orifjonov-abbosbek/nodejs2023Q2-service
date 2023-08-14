import { Module } from '@nestjs/common';
import { UserController } from './userController';
import { UserService } from './userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/userEntity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
