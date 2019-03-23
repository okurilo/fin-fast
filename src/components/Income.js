import React, { Component } from 'react';

export default class Income extends Component {
  render() {
    return (
        <div className="d-flex">
            <div>
              <label htmlFor="income">Доход</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">RUB</span>
                </div>
                <input
                 type="number"
                 className="form-control"
                 id="income"
                 onChange={this.props.handleChangeIncome}
                 value={this.props.income}/>
              </div>
            </div>
            <div className="ml-3" >
              <label htmlFor="days">Количество дней</label>
              <div className="input-group">
                <input
                 type="number"
                 className="form-control"
                 id="days"
                 onChange={this.props.handleChangeDays}
                 value={this.props.days}/>
                <div className="input-group-append">
                  <span className="input-group-text">Дней</span>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
