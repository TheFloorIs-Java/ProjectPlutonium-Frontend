import { publishedGame } from "./publishedGame";
import { user } from "./user";

export interface scoremodel {
user : user;
score_id : number;
publishedGame : publishedGame;
date : Date;
score :number;    
}