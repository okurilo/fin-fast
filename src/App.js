import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Income from './components/Income';
import Operation from './components/Operation';
import Total from './components/Total';
import Cost from './model/Cost';
import AppInitialState from './model/AppInitialState';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: "",
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
    console.log(cachedHits);
    if (cachedHits) {
      this.setState( JSON.parse(cachedHits) );
      return;
    }
  }
  handleClearStateStorage = () => {
    this.setState( new AppInitialState(), function () {
      this._updateTotal();
    });
  }
  handleChangeIncome = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    value = value || 0;
    this.setState({income: value }, function () {
      this._updateTotal();
    });
  }
  handleChangeDays = (event) => {
    let value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    value = value || 0;
    this.setState({days: value }, function () {
      this._updateTotal();
    });
  }
  percentStorageSelect = (event) => {
    let value = parseInt( event.target.value, 10 );
    // event.target.value = +event.target.value;
    // value = value || 0;
    this.setState({percentStorage: value }, function () {
      this._updateTotal();
    });

  }
  addCost = () => {
    const costs = [...this.state.costs];
    costs.unshift( new Cost(new Date().getTime()) );
    this.setState( {costs: costs} , function () {
      this._updateTotal();
    });
  }
  deleteCost = (event) => {
    const id = +event.target.id;
    let costs = [...this.state.costs];
    costs = costs.filter((cost) => {
      return cost.id !== id;
    });
    this.setState({costs: costs}, function () {
      this._updateTotal();
    });
  }
  handleChangeCostText = (event) => {
    const id = +event.target.id;
    const value = event.target.value;
    let costs = [...this.state.costs];
    costs.forEach((el) => {
      if (el.id === id) {
        el.text = value;
      }
    });
    this.setState({costs: costs}, function () {
      this._updateTotal();
    });
  }
  handleChangeCostValue = (event) => {
    // event.preventDefault();
    const id = +event.target.id;
    const value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    let costs = [...this.state.costs];
    costs.forEach((el) => {
      if (el.id === id) {
        el.value = value;
      }
    });
    this.setState({costs: costs}, function () {
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
  _writeToLocal = (data) => {
    localStorage.setItem("finData", JSON.stringify(data));
  }
  render() {
    return (
      <div className="App">
        <header>
          <h3 className="text-light" >Расчёт бюджета</h3>
        </header>
        <section className="m-2 text-left">
          <Income
           income={this.state.income}
           days={this.state.days}
           percentStorage={this.state.percentStorage}
           percentStorageSelect={this.percentStorageSelect}
           handleChangeIncome={this.handleChangeIncome}
           handleChangeDays={this.handleChangeDays} />
          <Operation
           costs={this.state.costs}
           addCost={this.addCost}
           deleteCost={this.deleteCost}
           changeText={this.handleChangeCostText}
           changeValue={this.handleChangeCostValue} ></Operation>
          <Total
           storage={this.state.total.storage}
           balance={this.state.total.balance}
           budget={this.state.total.budget}
           days={this.state.days}
           percentStorage={this.state.percentStorage} ></Total>
        </section>
        <footer>
          <button
           className="btn btn-outline-danger"
           onClick={this.handleClearStateStorage} >Очистить</button>
        </footer>
      </div>
    );
  }
}

export default App;
