import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser';
import { UpdateUserdDto } from './dto/updateUser';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/userEntity';
import { NotFoundException } from '../libs/exeptions';
import { User, UserUpdateConfig } from './userTypes';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async get() {
    return await this.userRepository.find();
  }

  async getOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(id);
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const { login, password } = createUserDto;

    const user: User = {
      id: uuidv4(),
      login,
      version: 1,
      password,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await this.userRepository.save(user);
    return await this.userRepository.findOne({ where: { id: user.id } });
  }

  async update(id: string, updateUserdDto: UpdateUserdDto) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(id);

    const { oldPassword, newPassword } = updateUserdDto;

    if (oldPassword !== user.password)
      throw new ForbiddenException('oldPassword is wrong');

    const config: UserUpdateConfig = {
      password: newPassword,
      version: user.version + 1,
      updatedAt: Date.now(),
    };

    Object.assign(user, config);

    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(id);

    await this.userRepository.remove(user);
    return user;
  }
}
