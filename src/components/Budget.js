import React, { Component } from 'react';

import Income from './Income';
import Operation from './Operation';
import Daily from './Daily';
import Total from './Total';
// import MandatoryCosts from '../model/MandatoryCosts';
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
      parsed.dailyCosts = parsed.dailyCosts.map((el) => {
        el.date = new Date(el.date);
        return el;
      });
      this.setState( parsed );
      loadIndFunc(1200);
    } else {
      loadIndFunc(3000);
    }
  }
  // Write to state and storage functions
  _writeToState = (data) => {
    this.setState({[data.field]: data.value}, function () {
      this._updateTotal();
    });
  }

  _writeToLocal = (data) => {
    localStorage.setItem("finData", JSON.stringify(data));
  }

  handleClearStateStorage = () => {
    this.setState( new AppInitialState(), function () {
      this._updateTotal();
    });
  }

  _updateTotal = () => {
    // TODO: Add switcher for fields and update only used branches
    const _countRequiredCost = (mandatoryCosts) => {
      let result = mandatoryCosts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
      );
      return result;
    };

    let income = this.state.income;
    let days = this.state.days;
    let mandatoryCosts = [...this.state.mandatoryCosts];
    let dailyCosts = [...this.state.dailyCosts];
    const dailyCostsSpended = dailyCosts.reduce((sum, el) => {
      return sum + el.spended;
    }, 0);
    const percentStorage = this.state.percentStorage / 100;
    let total = this.state.total;
    let requiredCosts = _countRequiredCost(mandatoryCosts);

    // Calc Total info
    total.storage = parseInt(income * percentStorage, 10) || 0;
    total.balance = parseInt(income - total.storage, 10) - requiredCosts || 0;
    total.balanceLeft = parseInt(income - total.storage, 10) - requiredCosts - dailyCostsSpended || 0;
    total.budget = parseInt(total.balance / days, 10) || 0;

    // Calc Daily info
    dailyCosts = this._reCalcDailyCosts(dailyCosts, total.budget);

    this.setState({total, dailyCosts}, function () {
      this._writeToLocal(this.state);
    }.bind(this));
  }

  _reCalcDailyCosts = (dailyCosts, budget) => {
    let newDailyCosts = dailyCosts.reduce(
      function (accumulator, currentValue, index) {
        currentValue.budget = budget;
        if (index === 0) {
          currentValue.available = budget - currentValue.spended;
          currentValue.saved = currentValue.available;//currentValue.available - currentValue.spended;
        } else {
          // currentValue.available = dailyCosts[index - 1].available - currentValue.spended;
          currentValue.available = budget - currentValue.spended; //+ dailyCosts[index - 1].saved;
          currentValue.saved = currentValue.available + dailyCosts[index - 1].saved;// - currentValue.spended;
        }
          accumulator.push(currentValue);
          return accumulator;
        }, []
    );
    // console.log(newDailyCosts);
    return newDailyCosts;
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
             dailyCosts={this.state.dailyCosts}
             percentStorage={this.state.percentStorage}
             writeToState={this._writeToState} />
          }
          {
            isLoaded &&
            <Operation
             mandatoryCosts={this.state.mandatoryCosts}
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
             balanceLeft={this.state.total.balanceLeft}
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
