import Cost from "./Cost";

export default class AppInitialState {
    constructor( ) {
        this.income = "";
        this.days = "";
        this.percentStorage = 10;
        this.costs = [ new Cost(new Date().getTime()) ];
        this.total = {
            storage: 0,
            balance: 0,
            budget: 0
        };
    }
}