import {Post} from './post.model';

export class Comment {
  id: number;
  body: string;
  post: Post;
}
