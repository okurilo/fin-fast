import React, { Component } from 'react';
import Cost from '../model/Cost';

export default class Operation extends Component {
  addNewCost = () => {
    // const {state} = this.props;
    const costs = [...this.props.costs];
    // costs.unshift( new Cost(new Date().getTime()) );
    costs.push( new Cost(new Date().getTime()) );
    this.props.writeToState({field: "costs", value: costs});
  }
  deleteCost = (event) => {
    const id = +event.target.id;
    // const {state} = this.props;
    let costs = [...this.props.costs];
    costs = costs.filter((cost) => {
      return cost.id !== id;
    });
    this.props.writeToState({field: "costs", value: costs});
  }
  handleChangeCostText = (event) => {
    const id = +event.target.id;
    const value = event.target.value;
    let costs = [...this.props.costs];
    costs.forEach((el) => {
      if (el.id === id) {
        el.text = value;
      }
    });
    this.props.writeToState({field: "costs", value: costs});
  }
  handleChangeCostValue = (event) => {
    // event.preventDefault();
    const id = +event.target.id;
    const value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    let costs = [...this.props.costs];
    costs.forEach((el) => {
      if (el.id === id) {
        el.value = value;
      }
    });
    this.props.writeToState({field: "costs", value: costs});
  }
  render() {
    const {
        costs
    } = this.props;
    return (
        <div className="card text-white bg-info mt-2">
            <div className="card-body">
                <h5 className="card-title">Обязательные расходы</h5>
                {costs.map((cost)=>{
                    return (
                        <div key={cost.id} className="input-group mb-2">
                          <input
                           {...cost}
                           type="text"
                           className="form-control"
                           onChange={this.handleChangeCostValue}
                           value={cost.value}
                           placeholder="Сумма" aria-label="Сумма" aria-describedby="button-addon4"/>
                          <input
                           {...cost}
                           type="text"
                           className="form-control"
                           onChange={this.handleChangeCostText}
                           value={cost.text}
                           placeholder="Введите текст категории" aria-label="Введите текст категории" aria-describedby="button-addon4"/>
                          <div className="input-group-append" id="button-addon4">
                            {/* <button className="btn btn-outline-light" type="button">Edit</button> */}
                            <button
                             {...cost}
                             onClick={this.deleteCost}
                             className="border-left btn btn-dark"
                             type="button">x</button>
                          </div>
                        </div>
                    );
                  })}
                <div className="d-flex mt-2 justify-content-center">
                  <button type="button" className="mr-2 text-right btn btn-light" onClick={ this.addNewCost } >Добавить</button>
                </div>
            </div>
        </div>
    );
  }
}
