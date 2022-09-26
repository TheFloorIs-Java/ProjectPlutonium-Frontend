


export interface user {

    id : number;
    username : String;
    password : String;
    permissionLevel : number;
    salt : String;
    sessionId : String;
    sessionExpiration : Date;

}