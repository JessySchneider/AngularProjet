import { User } from "./user.model";

export class Post{
    id: number;
    title: string;
    body: string;
    idUser: User;

    constructor(id: number, title: string, body: string, idUser: User){
        this.id = id;
        this.title = title;
        this.body = body;
        this.idUser = idUser;
    }
}