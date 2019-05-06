export default class DailyCost {
    constructor( id, date ) {
        this.id = id;
        this.date = date;
        this.spended = 0;
        this.comment = "";
        this.available = 0;
        this.saved = 0;
    }
}