import { user } from "./user";

export interface session {

    id : number;
    session_id : string;
    session_expiry : Date;
    user : user;

}