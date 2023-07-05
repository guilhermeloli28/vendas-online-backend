import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHash = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );

    const user = await this.userRepository.save({
      ...createUserDto,
      password: passwordHash,
      typeUser: 1,
    });

    return user;
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User: ${userId} Not Found!`);
    }

    return user;
  }
}
