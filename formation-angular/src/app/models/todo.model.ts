import { User } from "./user.model";

export class Todo{
    id: number;  
    title: string;   
    completed: boolean;
    idUser?: User;

    constructor(id: number, title: string, completed: boolean){
        this.id = id;
        this.title = title;
        this.completed = completed;
        // this.idUser = idUser;
    }

}