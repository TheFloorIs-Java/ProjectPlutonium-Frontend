import {actionbutton} from './actionbutton';

export interface scene {

    description : String;
    map : String;
    actions : Array<actionbutton>;

    score? : number; //how much score this page adds

    hpAdjust?: number; //how much damage this page causes
    deathIndex?: number; //page you go to when hp reaches 0

    addItem?: String; //what item this page adds
    removeItem?: String; //what item this page removes

}