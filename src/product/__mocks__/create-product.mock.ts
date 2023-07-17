import { categoryMock } from 'src/category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'testss',
  name: 'mock product',
  price: 30,
};
