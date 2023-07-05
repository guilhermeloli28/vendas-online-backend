import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.email = userEntity.email;
    this.name = userEntity.name;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }

  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
}
