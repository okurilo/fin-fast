import React, { Component } from 'react';

export default class Income extends Component {
  handleChangeIncome = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    value = value || 0;
    this.props.writeToState({field: "income", value: value});
  }
  handleChangeDays = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    value = value || 0;
    this.props.writeToState({field: "days", value: value});
  }
  percentStorageSelect = (event) => {
    let value = parseInt( event.target.value, 10 );
    // event.target.value = +event.target.value;
    // value = value || 0;
    this.props.writeToState({field: "percentStorage", value: value});
  }
  render() {
    const {
      income,
      days,
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
            <div className="col-md m-2" >
              <label className="text-light" htmlFor="days">Количество дней:</label>
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
              </div>
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
