import Cost from "./Cost";
import DailyCost from "./DailyCost";

export default class AppInitialState {
    constructor( ) {
        this.isLoaded = true;
        this.income = 0;
        this.startDay = new Date();
        this.days = 0;
        this.percentStorage = 10;
        this.costs = [ new Cost(new Date().getTime()) ];
        this.dailyCosts = [ new DailyCost(new Date().getTime(), new Date()) ];
        this.total = {
            storage: 0,
            balance: 0,
            budget: 0
        };
    }
}