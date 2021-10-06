import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetArticleQueryDto {
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  tag: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  limit: number;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  offset: number;
}
