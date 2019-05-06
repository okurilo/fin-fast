import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import DailyCost from "../model/DailyCost";

export default class Income extends Component {
  constructor(props) {
    super(props);

    this.startDatePick = React.createRef();
    this.endDatePick = React.createRef();
  }

  handleChangeIncome = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    value = value || 0;
    this.props.writeToState({field: "income", value: value});
  }
  handleChangeDays = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    value = value || 0;
    this.props.writeToState({field: "days", value: value});
  }
  percentStorageSelect = (event) => {
    let value = parseInt( event.target.value, 10 );
    this.props.writeToState({field: "percentStorage", value: value});
  }
  handleStartDaySelect = (value) => {
    value = value || null;
    const endDay = this.props.endDay;
    if (value.getTime() > endDay.getTime()) {
      return;
    }
    const days = this._updateDays(value, endDay);
    this._updateDailyCosts(value, endDay, days);
    this.props.writeToState({field: "days", value: days});
    this.props.writeToState({field: "startDay", value: value});
  }
  handleEndDaySelect = (value) => {
    value = value || null;
    const startDay = this.props.startDay;
    if (startDay.getTime() > value.getTime()) {
      return;
    }
    const days = this._calcDays(startDay, value);
    this._updateDailyCosts(startDay, value, days);
    this.props.writeToState({field: "days", value: days});
    this.props.writeToState({field: "endDay", value: value});
  }
  _calcDays = (startDay, endDay) => {
    const timeDifference = Math.abs(endDay.getTime() - startDay.getTime());
    const days =  Math.ceil(timeDifference / (1000 * 3600 * 24));
    return days;
  }
  _updateDailyCosts = (startDay, endDay, days) => {
    const dailyCosts = this.props.dailyCosts;
    const newDailyCosts = [];
    for (let index = 1; index <= days; index++) {
      let date = new Date();
      date.setDate(startDay.getDate() + index);
      newDailyCosts.push( new DailyCost(date.getTime(), date) );
    }
    this.props.writeToState({field: "dailyCosts", value: newDailyCosts});
  }
  handleClickCalendarIcon = (event) => {
    const dateType = event.currentTarget.attributes.datetype.value;
    if (dateType === "SD") {
      this.startDatePick.current.onInputClick();
    } else { //ED
      this.endDatePick.current.onInputClick();
    }
  }
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
                 onChange={this.handleChangeIncome}
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
                 ref={this.startDatePick}
                 selected={startDay}
                 onChange={this.handleStartDaySelect}
                 dateFormat="d MMMM yyyy"
                 placeholderText="Выберите дату начала"
                 locale={ru} />
                <div className="input-group-append">
                  <span style={{width: "4rem", cursor: "pointer"}} datetype="SD" className="input-group-text justify-content-center" onClick={this.handleClickCalendarIcon}>
                    <i className="fa fa-calendar" alt="Календарь" />
                  </span>
                </div>
              </div>
            </div>
            <div className="calendar col-md m-2" >
              <label className="text-light" htmlFor="days">Дата окончания:</label>
              <div className="input-group">
                <DatePicker
                 ref={this.endDatePick}
                 selected={endDay}
                 onChange={this.handleEndDaySelect}
                 dateFormat="d MMMM yyyy"
                 placeholderText="Выберите дату окончания"
                 locale={ru} />
                <div className="input-group-append">
                  <span style={{width: "4rem", cursor: "pointer"}} datetype="ED" className="input-group-text justify-content-center" onClick={this.handleClickCalendarIcon}>
                    <i className="fa fa-calendar" alt="Календарь" />
                  </span>
                </div>
              </div>
              {/* <label className="text-light" htmlFor="days">Количество дней:</label>
              <div className="input-group">
                <input
                 type="text"
                 className="form-control"
                 id="days"
                 placeholder="Внесите количество дней"
                 onChange={this.handleChangeDays}
                 value={days}/>
                <div className="input-group-append">
                  <span style={{width: "4rem"}} className="input-group-text justify-content-center">Дней</span>
                </div>
              </div> */}
            </div>
            <div className="col-md m-2" >
              <label className="text-light" htmlFor="percent">Процент накоплений:</label>
              <div className="input-group">
                <select
                 className="form-control custom-select"
                 id="percent"
                 value={percentStorage}
                 onChange={this.percentStorageSelect} >
                  <option value="0">0</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
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
