import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12321',
  createdAt: new Date(),
  email: 'gui@gmail.com',
  id: 123,
  name: 'user123',
  password: '$2b$10$FwXH3yifDWNHDaZw59zxvuRyAGteLoDlAhTECM4OZ8H6duVejoqAG',
  phone: '1231321',
  typeUser: UserType.User,
  updateAt: new Date(),
};
