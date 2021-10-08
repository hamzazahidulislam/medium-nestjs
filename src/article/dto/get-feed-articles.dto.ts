import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class getFeedArticleQueryDto {
  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  limit: number;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  offset: number;
}
