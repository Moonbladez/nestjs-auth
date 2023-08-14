import { SetMetadata } from '@nestjs/common';

export const AUTH_TYPE_KEY = 'autType';

export const Auth = (...authTypes: string[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
