import Cost from "./Cost";

export default class AppInitialState {
    constructor( ) {
        this.income = 0;
        this.startDay = new Date();
        this.days = 0;
        this.percentStorage = 10;
        this.costs = [ new Cost(new Date().getTime()) ];
        this.total = {
            storage: 0,
            balance: 0,
            budget: 0
        };
    }
}