import { user } from "./user";

export interface publishedGame {
    id : number;
    title : string;
    gameType: string;
    gameData: string;
    user : user;
    numberOfPlays: number;
}