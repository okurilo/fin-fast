import React, { Component } from 'react';

import Income from './Income';
import Operation from './Operation';
import Daily from './Daily';
import Total from './Total';

import AppInitialState from '../model/AppInitialState';
import BudgetController from "../controllers/BudgetController";

class Budget extends Component {

  constructor(props) {
    super(props);

    this.state = new AppInitialState();
    /* !New */
    this.BudgetController = new BudgetController(this.getProps, this.setState.bind(this), this.getState);
  }

  getProps = () => {
    return this.props;
  }

  getState = () => {
    return this.state;
  }

  componentDidMount = () => {
    const cachedData = localStorage.getItem("finData");
    const loadIndFunc = (time) => {
      this.setState({isLoaded: false});
      setTimeout(() => {
        this.setState({isLoaded: true});
      }, time);
    };
    if (cachedData) {
      this.BudgetController._initCashedData(cachedData);
      loadIndFunc(1200);
    } else {
      loadIndFunc(3000);
    }
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
             writeToState={this.BudgetController._writeToState} />
          }
          {
            isLoaded &&
            <Operation
             mandatoryCosts={this.state.mandatoryCosts}
             writeToState={this.BudgetController._writeToState} ></Operation>
          }
          {
            isLoaded &&
            <Daily
             dailyCosts={this.state.dailyCosts}
             writeToState={this.BudgetController._writeToState} ></Daily>
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
               onClick={this.BudgetController.handleClearStateStorage} >Очистить</button>
            </div>
          }
        </section>
    );
  }
}

export default Budget;
