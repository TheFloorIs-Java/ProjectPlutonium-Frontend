import { user } from "./user";

export interface publishedGame {
    game_id : number;
    game_title : string;
    game_data: string;
    user : user;
    number_of_plays: number;
}