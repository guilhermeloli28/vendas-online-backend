import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '12323',
  cityId: cityMock.id,
  complement: 'testemock',
  createdAt: new Date(),
  id: 1,
  numberAddress: 2,
  updateAt: new Date(),
  userId: userEntityMock.id,
};
