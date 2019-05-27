import React, { Component } from 'react';
import MandatoryCost from '../model/MandatoryCosts';
import '../css/Operation.css';

export default class Operation extends Component {

  addNewCost = () => {
    // const {state} = this.props;
    const mandatoryCosts = [...this.props.mandatoryCosts];
    // mandatoryCosts.unshift( new MandatoryCost(new Date().getTime()) );
    mandatoryCosts.push( new MandatoryCost(new Date().getTime()) );
    this.props.writeToState({field: "mandatoryCosts", value: mandatoryCosts});
  }

  handleChangeCostChecked = (event) => {
    const id = +event.target.id;
    const checked = event.target.checked;
    let mandatoryCosts = [...this.props.mandatoryCosts];
    mandatoryCosts.forEach((el) => {
      if (el.id === id) {
        el.checked = checked;
      }
    });
    this.props.writeToState({field: "mandatoryCosts", value: mandatoryCosts});
  }

  deleteCost = (event) => {
    const id = +event.target.id;
    // const {state} = this.props;
    let mandatoryCosts = [...this.props.mandatoryCosts];
    mandatoryCosts = mandatoryCosts.filter((cost) => {
      return cost.id !== id;
    });
    this.props.writeToState({field: "mandatoryCosts", value: mandatoryCosts});
  }

  handleChangeCostText = (event) => {
    const id = +event.target.id;
    const value = event.target.value;
    let mandatoryCosts = [...this.props.mandatoryCosts];
    mandatoryCosts.forEach((el) => {
      if (el.id === id) {
        el.text = value;
      }
    });
    this.props.writeToState({field: "mandatoryCosts", value: mandatoryCosts});
  }

  handleChangeCostValue = (event) => {
    // event.preventDefault();
    const id = +event.target.id;
    const value = parseInt( event.target.value, 10 ) || '';
    // event.target.value = +event.target.value;
    let mandatoryCosts = [...this.props.mandatoryCosts];
    mandatoryCosts.forEach((el) => {
      if (el.id === id) {
        el.value = value;
      }
    });
    this.props.writeToState({field: "mandatoryCosts", value: mandatoryCosts});
  }

  render() {
    const {
        mandatoryCosts
    } = this.props;
    return (
        <div className="card text-white bg-primary mt-2">
            <div className="card-body">
                <h5 className="card-title">Обязательные расходы</h5>
                {mandatoryCosts.map((cost)=>{
                    return (
                        <div key={cost.id} className="input-group m-0 mb-2">
                          <div className={ cost.checked ? "checked" : "d-none" }>
                          </div>
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <input
                               id={cost.id}
                               style={{ width: "1.5rem", height: "1.2rem"}}
                               defaultChecked={cost.checked}
                               onClick={this.handleChangeCostChecked}
                               type="checkbox"
                               aria-label="Checkbox for following text input" />
                            </div>
                          </div>
                          <input
                           id={cost.id}
                           type="text"
                           className="form-control"
                           onChange={this.handleChangeCostValue}
                           value={cost.value}
                           placeholder="Сумма" aria-label="Сумма" aria-describedby="button-addon4"/>
                          <input
                           id={cost.id}
                           type="text"
                           className="form-control"
                           onChange={this.handleChangeCostText}
                           value={cost.text}
                           placeholder="Введите текст категории" aria-label="Введите текст категории" aria-describedby="button-addon4"/>
                          <div className="input-group-append" id="button-addon4">
                            {/* <button className="btn btn-outline-light" type="button">Edit</button> */}
                            <button
                             id={cost.id}
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
