import { publishedGame } from "./publishedGame";
import { user } from "./user";


export interface score {

    user : user;
    score_id: number;
    publishedGame: publishedGame;
    date_submitted: Date;
    score: number;
}