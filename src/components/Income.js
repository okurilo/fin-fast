import React, { Component } from 'react';

export default class Income extends Component {
  render() {
    return (
        <div className="d-flex flex-wrap">
            <div className="m-2" >
              <label className="text-light" htmlFor="income">Доход:</label>
              <div className="input-group">
                <input
                 type="text"
                 className="form-control"
                 id="income"
                 placeholder="Введите сумму дохода"
                 onChange={this.props.handleChangeIncome}
                 value={this.props.income}/>
                <div className="input-group-append">
                  <span className="input-group-text">RUB</span>
                </div>
              </div>
            </div>
            <div className="m-2" >
              <label className="text-light" htmlFor="days">Количество дней:</label>
              <div className="input-group">
                <input
                 type="text"
                 className="form-control"
                 id="days"
                 placeholder="Внесите количество дней"
                 onChange={this.props.handleChangeDays}
                 value={this.props.days}/>
                <div className="input-group-append">
                  <span className="input-group-text">Дней</span>
                </div>
              </div>
            </div>
            <div className="m-2" >
              <label className="text-light" htmlFor="days">Процент накоплений:</label>
              <div className="input-group">
                <select
                 className="custom-select"
                 id="inputGroupSelect01"
                 value={this.props.percentStorage}
                 onChange={this.props.percentStorageSelect} >
                  <option value="0">0</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
