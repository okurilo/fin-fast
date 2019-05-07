import MandatoryCost from "./MandatoryCosts";
import DailyCost from "./DailyCost";

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
export default class AppInitialState {
    constructor( ) {
        this.isLoaded = true;
        this.income = 0;
        this.startDay = today;
        this.endDay = tomorrow;
        this.days = 2;
        this.percentStorage = 10;
        this.mandatoryCosts = [ new MandatoryCost(today.getTime()) ];
        this.dailyCosts = [ new DailyCost(today.getTime(), today), new DailyCost(tomorrow.getTime(), tomorrow) ];
        this.total = {
            storage: 0,
            balance: 0,
            budget: 0
        };
    }
}