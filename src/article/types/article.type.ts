import { ArticleEntity } from '../entites/article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
