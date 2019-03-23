import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Income from './components/Income';
import Operation from './components/Operation';
import Total from './components/Total';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: 0,
      days: 0,
      costs: [{id: 1}]
    };
  }
  handleChangeIncome = (event) => {
    const value = parseInt( event.target.value, 10 );
    this.setState({income: value });
  }
  handleChangeDays = (event) => {
    const value = parseInt( event.target.value, 10 );
    this.setState({days: value });
  }
  addCost = () => {
    const costs = [...this.state.costs];
    costs.unshift({id: new Date().getTime()});
    this.setState({costs: costs});
  }
  deleteCost = (event) => {
    const id = +event.target.id;
    let costs = [...this.state.costs];
    costs = costs.filter((cost) => {
      return cost.id !== id;
    });
    this.setState({costs: costs});
  }
  render() {
    return (
      <div className="App">
        <header>
          <h3 className="" >Рассчёт доходности</h3>
        </header>
        <section className="m-3 text-left">
          <Income
           income={this.state.income}
           days={this.state.days}
           handleChangeIncome={this.handleChangeIncome}
           handleChangeDays={this.handleChangeDays} />
          <Operation costs={this.state.costs} addCost={this.addCost} deleteCost={this.deleteCost} ></Operation>
          <Total></Total>
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;
