/* eslint-disable prettier/prettier */
import { UserEntity } from '../entites/user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;
