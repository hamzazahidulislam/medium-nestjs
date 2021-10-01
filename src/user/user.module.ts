import { UserController } from '@app/user/user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entites/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
