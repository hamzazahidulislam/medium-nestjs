import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

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
}
