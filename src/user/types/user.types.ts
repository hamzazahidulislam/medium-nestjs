/* eslint-disable prettier/prettier */
import { UserEntity } from '@app/user/entites/user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;
