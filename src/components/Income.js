import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
// import DailyCost from "../model/DailyCost";
// import { calcDaysDifference } from "../utils/Date";
import IncomeController from "../controllers/IncomeController";

export default class Income extends Component {

  constructor(props) {
    super(props);

    this.startDatePick = React.createRef();
    this.endDatePick = React.createRef();
    /* !New */
    this.IncomeController = new IncomeController(this.getProps, this.startDatePick, this.endDatePick);
  }
  getProps = () => {
    return this.props;
  }
  // // Income
  // handleChangeIncome = (event) => {
  //   let value = parseInt( event.target.value, 10 ) || '';
  //   value = value || 0;
  //   this.props.writeToState({field: "income", value: value});
  // }
  // // Select input
  // percentStorageSelect = (event) => {
  //   let value = parseInt( event.target.value, 10 );
  //   this.props.writeToState({field: "percentStorage", value: value});
  // }
  // // Calendar
  // handleStartDaySelect = (value) => {
  //   value = value || null;
  //   const endDay = this.props.endDay;
  //   value.setHours(0,0,0,0);
  //   endDay.setHours(0,0,0,0);
  //   if (value.getTime() > endDay.getTime()) {
  //     return;
  //   }
  //   const days = calcDaysDifference(value, endDay) + 1; //If start & end dates same => +1 (not 0)
  //   this.props.writeToState({field: "days", value: days});
  //   this.props.writeToState({field: "startDay", value: value});

  //   // Update detail daily cost block
  //   this._updateDailyCosts(value, endDay, days);
  // }
  // handleEndDaySelect = (value) => {
  //   value = value || null;
  //   const startDay = this.props.startDay;
  //   value.setHours(0,0,0,0);
  //   startDay.setHours(0,0,0,0);
  //   if (startDay.getTime() > value.getTime()) {
  //     return;
  //   }
  //   const days = calcDaysDifference(startDay, value) + 1; //If start & end dates same =>  +1 (not 0)
  //   this.props.writeToState({field: "days", value: days});
  //   this.props.writeToState({field: "endDay", value: value});

  //   // Update detail daily cost block
  //   this._updateDailyCosts(startDay, value, days);
  // }

  // _updateDailyCosts = (startDay, endDay, days) => {
  //   // const dailyCosts = this.props.dailyCosts;
  //   const newDailyCosts = [];
  //   for (let index = 0; index < days; index++) {
  //     let date = new Date();
  //     date.setDate(startDay.getDate() + index);
  //     const cost = new DailyCost(date.getTime()/*id*/, date);
  //     newDailyCosts.push( cost );
  //   }
  //   this.props.writeToState({field: "dailyCosts", value: newDailyCosts});
  // }

  // handleClickCalendarIcon = (event) => {
  //   const name = event.currentTarget.attributes.name.value;
  //   if (name === "SD") {
  //     this.startDatePick.current.onInputClick();
  //   } else { //ED
  //     this.endDatePick.current.onInputClick();
  //   }
  // }

  render() {
    const {
      income,
      startDay,
      endDay,
      percentStorage
    } = this.props;
    return (
        <div className="row">
            <div className="col-md m-2" >
              <label className="text-light" htmlFor="income">Доход:</label>
              <div className="input-group">
                <input
                 type="text"
                 className="form-control"
                 id="income"
                 placeholder="Введите сумму дохода"
                 onChange={this.IncomeController.handleChangeIncome}
                 value={income}/>
                <div className="input-group-append">
                  <span style={{width: "4rem"}} className="input-group-text justify-content-center">RUB</span>
                </div>
              </div>
            </div>
            <div className="calendar col-md m-2" >
              <label className="text-light" htmlFor="days">Дата начала:</label>
              <div className="input-group">
                <DatePicker
                 ref={this.IncomeController.startDatePick}
                 selected={startDay}
                 onChange={this.IncomeController.handleStartDaySelect}
                 dateFormat="d MMMM yyyy"
                 placeholderText="Выберите дату начала"
                 locale={ru} />
                <div className="input-group-append">
                  <span style={{width: "4rem", cursor: "pointer"}} name="SD" className="input-group-text justify-content-center" onClick={this.IncomeController.handleClickCalendarIcon}>
                    <i className="fa fa-calendar" alt="Календарь" />
                  </span>
                </div>
              </div>
            </div>
            <div className="calendar col-md m-2" >
              <label className="text-light" htmlFor="days">Дата окончания:</label>
              <div className="input-group">
                <DatePicker
                 ref={this.IncomeController.endDatePick}
                 selected={endDay}
                 onChange={this.IncomeController.handleEndDaySelect}
                 dateFormat="d MMMM yyyy"
                 placeholderText="Выберите дату окончания"
                 locale={ru} />
                <div className="input-group-append">
                  <span style={{width: "4rem", cursor: "pointer"}} name="ED" className="input-group-text justify-content-center" onClick={this.IncomeController.handleClickCalendarIcon}>
                    <i className="fa fa-calendar" alt="Календарь" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md m-2" >
              <label className="text-light" htmlFor="percent">Процент накоплений:</label>
              <div className="input-group">
                <select
                 className="form-control custom-select"
                 id="percent"
                 value={percentStorage}
                 onChange={this.IncomeController.percentStorageSelect} >
                  <option value="0">0</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
                <div className="input-group-append">
                  <span style={{width: "4rem"}} className="input-group-text justify-content-center">%</span>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
