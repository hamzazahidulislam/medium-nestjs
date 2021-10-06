import { User } from '@app/user/decorators/user.decorator';
import { UserEntity } from '@app/user/entites/user.entity';
import { AuthGuard } from '@app/user/guards/auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiQuery,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleBody, CreateArticleDto } from './dto/createArticle.dto';
import { GetArticleQueryDto } from './dto/get-article-query.dto';
import { ArticleResponseInterface } from './types/articleResponse.interface';
import { ArticlesResponseInterface } from './types/articlesResponse.interface';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your All Article' })
  @ApiQuery({})
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  async findAll(
    @User('id') currentUserId: number,
    @Query(new ValidationPipe()) query: GetArticleQueryDto,
  ): Promise<ArticlesResponseInterface> {
    return await this.articleService.findAll(currentUserId, query);
  }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your Article created' })
  @ApiBody({ type: CreateArticleBody })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async create(
    @User() currentUser: UserEntity,
    @Body('article') createArticleDto: CreateArticleDto,
  ): Promise<ArticleResponseInterface> {
    const article = await this.articleService.createArticle(
      currentUser,
      createArticleDto,
    );
    return this.articleService.buildArticleResponse(article);
  }

  @Get(':slug')
  @ApiOkResponse({ description: 'Your Article' })
  async getSingleArticle(
    @Param('slug') slug: string,
  ): Promise<ArticleResponseInterface> {
    const article = await this.articleService.findBySlug(slug);
    return this.articleService.buildArticleResponse(article);
  }

  @Delete(':slug')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your Article Deleted' })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  async deleteArticle(
    @User('id') currentUserId: number,
    @Param('slug') slug: string,
  ) {
    return await this.articleService.deleteArticle(slug, currentUserId);
  }

  @Put(':slug')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your Article Updated' })
  @ApiBody({ type: CreateArticleBody })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async updateArticle(
    @User('id') currentUserId: number,
    @Param('slug') slug: string,
    @Body('article') updateArticleDto: CreateArticleDto,
  ) {
    const article = await this.articleService.updateArticle(
      slug,
      updateArticleDto,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }

  @Post(':slug/favorite')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your Article Favorited' })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  async addArticleToFavorites(
    @User('id') currentUserId: number,
    @Param('slug') slug: string,
  ): Promise<ArticleResponseInterface> {
    const article = await this.articleService.addArticleToFavorites(
      slug,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }

  @Delete(':slug/favorite')
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'Your Favorite Article Deleted' })
  @ApiUnauthorizedResponse({
    description: 'Your Token is not valid',
    status: 401,
  })
  @UseGuards(AuthGuard)
  async deleteArticleFromFavorites(
    @User('id') currentUserId: number,
    @Param('slug') slug: string,
  ): Promise<ArticleResponseInterface> {
    const article = await this.articleService.deleteArticleFromFavorites(
      slug,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }
}
