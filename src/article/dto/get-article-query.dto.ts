import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class GetArticleQueryDto {
  [x: string]: any;
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
export enum UserRole {
  Client = 'Client',
  Owner = 'Owner',
  Delivery = 'Delivery',
}
