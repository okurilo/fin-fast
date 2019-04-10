import React, { Component } from 'react';

// const Total = (props) => {
export default class Total extends Component {
  _addZero = function (value) {
    value = value.toString() || "";
    if (value.length === 1) {
        value = "0" + value;
    }
    return value;
  }
  transformDate = (startDay, days) => {
    console.log("Transform Date");
    let date = new Date(startDay);
    date.setDate(date.getDate() + days);
    const currDate = this._addZero(date.getDate());
    const currMonth = this._addZero(date.getMonth() + 1); //Months are zero based
    const currYear = date.getFullYear().toString();
    return (`(до ${currDate}.${currMonth}.${currYear})`);
  };
  render() {
    const {storage, balance, budget, startDay, days, percentStorage} = this.props;
    return (
        <div className="mt-2 card-group text-center">
          <div className="card border-secondary">
            <h4 className="pb-3 mt-3" >{storage} RUB</h4>
            <div className="pt-0 card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Накопления ({percentStorage}%)</h5>
              <p className="card-text">Сумма, которую необходимо отложить в Н/З.</p>
            </div>
          </div>
          <div className="card border-secondary">
            <h4 className="pb-3 mt-3" >{balance} RUB</h4>
            <div className="pt-0 card-body d-flex flex-column justify-content-between">
              <h5 className="card-title ">Остаток {startDay ? this.transformDate(startDay, days) : ""}</h5>
              <p className="card-text">Сумма на расходы, которую можно потратить за {days} дней.</p>
            </div>
          </div>
          <div className="card border-secondary">
            <h4 className="pb-3 mt-3" >{budget} RUB</h4>
            <div className="pt-0 card-body d-flex flex-column justify-content-between">
              <h5 className="card-title ">в день</h5>
              <p className="card-text">Ежедневный бюджет  {startDay ? this.transformDate(startDay, days) : ""}.</p>
            </div>
          </div>
        </div>
      )};
  };

// export default Total;
