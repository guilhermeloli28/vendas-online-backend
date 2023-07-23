import { CartEntity } from '../../cart/entities/cart.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const cartMock: CartEntity = {
  active: true,
  createdAt: new Date(),
  id: 123,
  updateAt: new Date(),
  userId: userEntityMock.id,
};
