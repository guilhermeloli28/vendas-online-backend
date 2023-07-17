import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  categoryId: categoryMock.id,
  createdAt: new Date(),
  id: 1231,
  image: 'http://image.com',
  name: 'name product mock',
  price: 35.3,
  updateAt: new Date(),
};
