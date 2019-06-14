import React, { Component } from 'react';
import DaySpending from "../../model/DaySpending";
import {transformDate} from "../../utils/Date";

export default class Edit extends Component {
    addNewSpend = () => {
        const {cost} = this.props;
        let spending = [...cost.spending];
        // mandatoryCosts.unshift( new MandatoryCost(new Date().getTime()) );
        spending.push( new DaySpending(new Date().getTime()) );
        this.props.changeCostValue(cost.id, spending);
    }

    deleteSpend = (event) => {
        const id = +event.target.id;
        // const {state} = this.props;
        const {cost} = this.props;
        let spending = [...cost.spending];
        spending = spending.filter((spend) => {
          return spend.id !== id;
        });
        this.props.changeCostValue(cost.id, spending);
    }
    handleChangeSpendValue = (event) => {
        // event.preventDefault();
        const {cost} = this.props;
        const spending = [...cost.spending];

        const { id, name } = event.currentTarget;
        const callback = (el, index) => {
            return +el.id === +id;
        };
        let spendIndex = spending.findIndex(callback);

        let value;
        switch (name) {
            case "value":
                value = parseInt(event.target.value, 10) || '';
                value = value || 0;
                break;
            case "isloss":
                // value = this.state.isLoss;
                value = !spending[spendIndex].isloss;
                break;
            case "comment":
            default:
                value = event.target.value;
                break;
        }
        spending[spendIndex][name] = value;

        this.props.changeCostValue(cost.id, spending);
    }

    render() {
        const {cost, switchEditMode, changeCostValue} = this.props;
        const dayTime = cost.date.getTime();
        const todayDate = new Date();
        const todayTime = todayDate.getTime();
        // console.log(this.props.dayKey);
        return (
            <div className="card-body row">
                <div className="col-12 col-lg-4">
                    <h5 className="card-title">{cost.date ? transformDate(cost.date) : ""}</h5>
                    <div>
                       <span className="card-text">Траты: {(cost.spended < 0) ? "0" : cost.spended } руб.</span>
                    </div>
                    <div>
                        <span className="card-text">{cost.comment}</span>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h6 className="card-title mb-3">Внесите доходы/расходы</h6>
                    { cost.spending.map((spend) => {
                        return (
                            <div key={spend.id}>
                                <div  className="input-group-sm d-flex m-0 mb-2">
                                    <div className="input-group-prepend">
                                        <button id={spend.id} name="isloss" className="btn btn-warning" onClick={this.handleChangeSpendValue} >
                                            { spend.isloss
                                                ? <i className="fa fa-minus" alt="В минус" />
                                                : <i className="fa fa-plus" alt="В плюс" />
                                            }
                                        </button>
                                    </div>
                                    <input
                                      id={spend.id}
                                     type="text"
                                     name="value"
                                     className="form-control"
                                     onChange={this.handleChangeSpendValue}
                                     value={spend.value}
                                     placeholder="Сумма" aria-label="Сумма" aria-describedby="button-addon4"/>
                                    <input
                                      id={spend.id}
                                     type="text"
                                     name="text"
                                     className="form-control"
                                     onChange={this.handleChangeSpendValue}
                                     value={spend.text}
                                     placeholder="Введите текст категории" aria-label="Введите текст категории" aria-describedby="button-addon4"/>
                                    <div className="input-group-append" id="button-addon4">
                                      {/* <button className="btn btn-outline-light" type="button">Edit</button> */}
                                      <button
                                       id={spend.id}
                                       onClick={this.deleteSpend}
                                       className="border-left btn btn-dark"
                                       type="button">x</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }) }

                    <div className="d-flex mt-2 justify-content-end mb-2">
                      <button type="button" className="text-right btn-sm btn-dark border border-light" onClick={ this.addNewSpend } >Добавить</button>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column justify-content-end align-items-end">
                    <div className="d-flex flex-column flex-grow-1 w-100">
                        <h6 className="card-title">Дневной бюджет: {cost.budget} руб.</h6>
                        <h6 className="card-title">Остаток на сегодня: {cost.available} руб.</h6>
                        { (todayTime < dayTime) &&
                            <span>
                                <h6 className="card-title mb-0">Сэкономлено: {cost.saved} руб.</h6>
                                <h6 className="card-title font-weight-normal"><i>(С учётом остатка за предыдущий день)</i></h6>
                            </span>
                        }
                    </div>
                </div>
                <div className="col-12 col-lg-1 d-flex align-items-center justify-content-end">
                    <button className="btn btn-secondary border border-success w-100" onClick={switchEditMode} ><i className="fa fa-check" /></button>
                </div>
            </div>
        );
    }
}
