import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';

import Budget from './components/Budget';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <h3 className="text-light" >Расчёт бюджета</h3>
        </header>
          <Budget/>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
