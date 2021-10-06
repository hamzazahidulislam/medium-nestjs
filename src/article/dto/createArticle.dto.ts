import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly body: string;

  @ApiProperty()
  readonly tagList?: string[];
}

export class CreateArticleBody {
  @ApiProperty()
  article: CreateArticleDto;
}
