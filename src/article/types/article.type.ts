import { ArticleEntity } from '@app/article/entites/article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
