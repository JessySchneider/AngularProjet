import { Post } from "./post.model";

export class Comment{
    id: number;
    body: string;
    postId: Post;

    constructor(id: number, body: string, postId: Post){
        this.id = id;
        this.body = body;
        this.postId = postId;
    }
}
