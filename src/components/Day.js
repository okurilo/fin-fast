import React, { Component } from 'react';
import {transformDate} from "../utils/Date";

export default class Day extends Component {
    constructor(props) {
      super(props);

      this.state = {
        editMode: false
      };
    }

    switchEditMode = () => {
        const { editMode } = this.state;
        this.setState({editMode: !editMode});
    }

    // // Income
    // handleChangeIncome = (event) => {
    //     let value = parseInt( event.target.value, 10 ) || '';
    //     value = value || 0;
    //     this.props.writeToState({field: "income", value: value});
    // }
    // handleChange = (e) => {
    //     const { id, value } = e.currentTarget;
    //     this.setState({ [id]: value });
    // }

    render() {
        const {editMode} = this.state;
        const {cost, changeCostValue} = this.props;
        return (
            <div className={"card bg-secondary mb-1 " + (editMode ? "border border-warning" : "")}>
                <div className="card-body row">
                    <div className="col-12 col-lg-6">
                        <h5 className="card-title">{cost.date ? transformDate(cost.date) : ""}</h5>
                        <div>
                            { editMode
                                ? <input
                                   type="text"
                                   name="spended"
                                   className="form-control-sm w-100"
                                   id={cost.id}
                                   placeholder="Сумма трат за день"
                                   onChange={changeCostValue}
                                   value={cost.spended}/>
                                : <span className="card-text">Траты: {cost.spended} руб.</span> }
                        </div>
                        <div>
                            { editMode
                                ? <textarea
                                   type="text"
                                   name="comment"
                                   className="form-control mt-2"
                                   id={cost.id}
                                   placeholder="Введите коментарий"
                                   onChange={changeCostValue}
                                   value={cost.comment}/>
                                : <span className="card-text">{cost.comment}</span> }
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex flex-column justify-content-end align-items-end">
                        <div>
                            <h6 className="card-title">Дневной бюджет: {cost.available} руб.</h6>
                            <h6 className="card-title">Экономия: {cost.saved} руб.</h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-1 d-flex align-items-center justify-content-end">
                    {/* <button className="btn btn-primary" onClick={this.switchEditMode} ><i className="fa fa-pencil" /></button> */}
                    { editMode
                        ? <button className="btn btn-secondary border border-success w-100" onClick={this.switchEditMode} ><i className="fa fa-check" /></button>
                        : <button className="btn btn-secondary border border-success w-100" onClick={this.switchEditMode} ><i className="fa fa-pencil" /></button> }
                </div>
                </div>
            </div>
        );
    }
}
