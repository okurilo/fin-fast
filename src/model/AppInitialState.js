import Cost from "./Cost";
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
        this.days = 1;
        this.percentStorage = 10;
        this.costs = [ new Cost(today.getTime()) ];
        this.dailyCosts = [ new DailyCost(today.getTime(), today) ];
        this.total = {
            storage: 0,
            balance: 0,
            budget: 0
        };
    }
}