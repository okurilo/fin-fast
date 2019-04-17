import React, { Component } from 'react';

import Income from './Income';
import Operation from './Operation';
import Total from './Total';
import Cost from '../model/Cost';
import AppInitialState from '../model/AppInitialState';

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      income: "",
      startDay: null,
      days: "",
      percentStorage: 10,
      costs: [ new Cost(new Date().getTime()) ],
      total: {
        storage: 0,
        balance: 0,
        budget: 0
      }
    };
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
      this.setState( parsed );
      loadIndFunc(2000);
    } else {
      loadIndFunc(3000);
    }
  }
  handleClearStateStorage = () => {
    this.setState( new AppInitialState(), function () {
      this._updateTotal();
    });
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
          {/* {
            !isLoaded &&
            <h3 style={{color: "#4e6e73", textAlign: "Center", margin: "20px", height: "77vh", "line-height": "77vh"}} >
              Загрузка...
            </h3>
          } */}
          {
            !isLoaded &&
            <div>
              <div
               class="d-flex flex-column justify-content-center align-items-center text-white"
               style={{height: "60vh"}}>
                {/* <div class="cm-spinner"></div> */}
                <div class="loader-wrapper" id="loader-1">
                    <div id="loader"></div>
                    <h3 className="font-weight-lighter" style={{textAlign: "Center"/* , margin: "20px" */}} >
                      Загрузка
                    </h3>
                </div>
                {/* <div>
                  <div class="spinner-grow" style={{width: "1rem", height: "1rem"}} role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow" style={{width: "1rem", height: "1rem"}} role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow" style={{width: "1rem", height: "1rem"}} role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>*/}
              </div>
            </div>
          }
          {
            isLoaded &&
            <Income
             income={this.state.income}
             startDay={this.state.startDay}
             days={this.state.days}
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
            <Total
             storage={this.state.total.storage}
             balance={this.state.total.balance}
             budget={this.state.total.budget}
             startDay={this.state.startDay}
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
