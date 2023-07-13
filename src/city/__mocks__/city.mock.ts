import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  updateAt: new Date(),
  id: 123213,
  name: 'stateNameMock',
  stateId: stateMock.id,
};
