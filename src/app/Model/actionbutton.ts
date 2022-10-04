
export interface actionbutton {

actionLabel : String;
index : number;

chance? : number; //1-100 odds this option suceeds
failIndex?: number; //where this option leads on failure

requiredItem?: String; //what item is required for this option to be visible

}