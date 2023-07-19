import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: '123',
  newPassword: '123',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: '1231',
  newPassword: '32131',
};
