import { TagEntity } from '@app/tag/entites/tag.entity';
import { TagController } from '@app/tag/tag.controller';
import { TagService } from '@app/tag/tag.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
