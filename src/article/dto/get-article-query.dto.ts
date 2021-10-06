import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class GetArticleQueryDto {
  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  tag: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  author: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  limit: number;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  offset: number;

  @IsOptional()
  @ApiPropertyOptional({ enum: TaskStatus })
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;
}
