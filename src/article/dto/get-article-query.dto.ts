import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';

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
  @IsNumber()
  @IsPositive()
  @ApiPropertyOptional()
  limit: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiPropertyOptional()
  offset: number;
}
