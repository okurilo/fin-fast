import React, { Component } from 'react';

import Income from './Income';
import Operation from './Operation';
import Daily from './Daily';
import Total from './Total';
// import Cost from '../model/Cost';
import AppInitialState from '../model/AppInitialState';

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = new AppInitialState();
  }
  componentDidMount = () => {
    const cachedHits = localStorage.getItem("finData");
    const loadIndFunc = (time) => {
      this.setState({isLoaded: false});
      setTimeout(() => {
        this.setState({isLoaded: true});
      }, time);
    };
    // console.log(cachedHits);
    if (cachedHits) {
      let parsed = JSON.parse(cachedHits);
      parsed.startDay = parsed.startDay ? new Date(parsed.startDay) : null;
      parsed.endDay = parsed.endDay ? new Date(parsed.endDay) : null;
      this.setState( parsed );
      // loadIndFunc(2000);
    } else {
      loadIndFunc(3000);
    }
  }
  handleClearStateStorage = () => {
    this.setState( new AppInitialState(), function () {
      this._updateTotal();
    });
  }
  _updateDaily = () => {
    let dailyCosts = this.state.dailyCosts;
    this.setState({dailyCosts}, function () {
      this._writeToLocal(this.state);
    }.bind(this));
  }
  _updateTotal = () => {
    let income = this.state.income;
    let days = this.state.days;
    let costs = [...this.state.costs];
    const percentStorage = this.state.percentStorage / 100;
    let total = this.state.total;
    let requiredCosts = this._countRequiredCost(costs);

    total.storage = parseInt(income * percentStorage, 10) || 0;
    total.balance = parseInt(income - total.storage, 10) - requiredCosts || 0;
    total.budget = parseInt(total.balance / days, 10) || 0;

    this.setState({total}, function () {
      this._writeToLocal(this.state);
    }.bind(this));
  }
  _countRequiredCost = (costs) => {
    let result = costs.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
    return result;
  }
  _writeToState = (data) => {
    this.setState({[data.field]: data.value}, function () {
      this._updateTotal();
    });
  }
  _writeToLocal = (data) => {
    localStorage.setItem("finData", JSON.stringify(data));
  }
  render() {
    const {isLoaded} = this.state;
    return (
        <section className="m-2 text-left">
          {
            !isLoaded &&
            <div>
              <div
               className="d-flex flex-column justify-content-center align-items-center text-white"
               style={{height: "85vh"}}>
                {/* <div className="cm-spinner"></div> */}
                <div className="loader-wrapper" id="loader-1">
                    <h3 className="font-weight-lighter" style={{textAlign: "Center"/* , margin: "20px" */}} >
                      Загрузка
                    </h3>
                    <div id="loader"></div>
                </div>
              </div>
            </div>
          }
          {
            isLoaded &&
            <Income
             income={this.state.income}
             startDay={this.state.startDay}
             endDay={this.state.endDay}
             percentStorage={this.state.percentStorage}
             writeToState={this._writeToState} />
          }
          {
            isLoaded &&
            <Operation
             costs={this.state.costs}
             writeToState={this._writeToState} ></Operation>
          }
          {
            isLoaded &&
            <Daily
             dailyCosts={this.state.dailyCosts}
             writeToState={this._writeToState} ></Daily>
          }
          {
            isLoaded &&
            <Total
             storage={this.state.total.storage}
             balance={this.state.total.balance}
             budget={this.state.total.budget}
             startDay={this.state.startDay}
             endDay={this.state.endDay}
             days={this.state.days}
             percentStorage={this.state.percentStorage} ></Total>
          }
          {
            isLoaded &&
            <div className="m-2 d-flex justify-content-center" >
              <button
               className="btn btn-outline-danger"
               onClick={this.handleClearStateStorage} >Очистить</button>
            </div>
          }
        </section>
    );
  }
}

export default Budget;