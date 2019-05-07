import React, { Component } from 'react';
import MandatoryCost from '../model/MandatoryCost';

export default class Operation extends Component {

  addNewCost = () => {
    // const {state} = this.props;
    const mandatoryCost = [...this.props.mandatoryCost];
    // mandatoryCost.unshift( new MandatoryCost(new Date().getTime()) );
    mandatoryCost.push( new MandatoryCost(new Date().getTime()) );
    this.props.writeToState({field: "mandatoryCost", value: mandatoryCost});
  }

  deleteCost = (event) => {
    const id = +event.target.id;
    // const {state} = this.props;
    let mandatoryCost = [...this.props.mandatoryCost];
    mandatoryCost = mandatoryCost.filter((cost) => {
      return cost.id !== id;
    });
    this.props.writeToState({field: "mandatoryCost", value: mandatoryCost});
  }

  handleChangeCostText = (event) => {
    const id = +event.target.id;
    const value = event.target.value;
    let mandatoryCost = [...this.props.mandatoryCost];
    mandatoryCost.forEach((el) => {
      if (el.id === id) {
        el.text = value;
      }
    });
    this.props.writeToState({field: "mandatoryCost", value: mandatoryCost});
  }

  handleChangeCostValue = (event) => {
    // event.preventDefault();
    const id = +event.target.id;
    const value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    let mandatoryCost = [...this.props.mandatoryCost];
    mandatoryCost.forEach((el) => {
      if (el.id === id) {
        el.value = value;
      }
    });
    this.props.writeToState({field: "mandatoryCost", value: mandatoryCost});
  }

  render() {
    const {
        mandatoryCost
    } = this.props;
    return (
        <div className="card text-white bg-primary mt-2">
            <div className="card-body">
                <h5 className="card-title">Обязательные расходы</h5>
                {mandatoryCost.map((cost)=>{
                    return (
                        <div key={cost.id} className="input-group m-0 mb-2">
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
