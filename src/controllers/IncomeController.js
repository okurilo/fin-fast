import DailyCost from "../model/DailyCost";
import { calcDaysDifference } from "../utils/Date";

export default class IncomeController {
    constructor(getProps, startDatePick, endDatePick) {
        this.getProps = getProps;
        // this.writeToStateFunc = writeToState;
        this.startDatePick = startDatePick;
        this.endDatePick = endDatePick;
    }
    // Income
  handleChangeIncome = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    value = value || 0;
    this.getProps().writeToState({field: "income", value: value});
  }
  // Select input
  percentStorageSelect = (event) => {
    let value = parseInt( event.target.value, 10 );
    this.getProps().writeToState({field: "percentStorage", value: value});
  }
  // Calendar
  handleStartDaySelect = (value) => {
    value = value || null;
    const endDay = this.getProps().endDay;
    value.setHours(0,0,0,0);
    endDay.setHours(0,0,0,0);
    const startDayTime = value.getTime();
    const endDayTime = endDay.getTime();
    if (startDayTime > endDayTime) {
      return;
    }
    const days = calcDaysDifference(value, endDay) + 1; //If start & end dates same => +1 (not 0)
    this.getProps().writeToState({field: "days", value: days});
    this.getProps().writeToState({field: "startDay", value: value});

    // Update detail daily cost block
    this._updateDailyCosts(value, endDay, days);
  }
  handleEndDaySelect = (value) => {
    value = value || null;
    const startDay = this.getProps().startDay;
    console.log(this.getProps(), startDay);
    value.setHours(0,0,0,0);
    startDay.setHours(0,0,0,0);
    const startDayTime = startDay.getTime();
    const endDayTime = value.getTime();
    if (startDayTime > endDayTime) {
      return;
    }
    const days = calcDaysDifference(startDay, value) + 1; //If start & end dates same =>  +1 (not 0)
    this.getProps().writeToState({field: "days", value: days});
    this.getProps().writeToState({field: "endDay", value: value});

    // Update detail daily cost block
    this._updateDailyCosts(startDay, value, days);
  }

  _updateDailyCosts = (startDay, endDay, days) => {
    // const dailyCosts = this.getProps().dailyCosts;
    const newDailyCosts = [];
    const day = startDay.getDate();
    const month = startDay.getMonth();
    const year = startDay.getFullYear();
    for (let index = 0; index < days; index++) {
      let date = new Date(year, month, day + index);
      // date.setDate(startDay.getDate() + index);
      const dateTime = date.getTime();
      const cost = new DailyCost(dateTime/*id*/, date);
      newDailyCosts.push( cost );
    }
    this.getProps().writeToState({field: "dailyCosts", value: newDailyCosts});
  }
    handleClickCalendarIcon = (event) => {
        console.log("this: ", this);
        const name = event.currentTarget.attributes.name.value;
        if (name === "SD") {
            this.startDatePick.current.onInputClick();
        } else { //ED
            this.endDatePick.current.onInputClick();
        }
    }
}