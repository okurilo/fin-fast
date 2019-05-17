import React, { Component } from 'react';
import {transformDate} from "../../utils/Date";

export default class DayDisplay extends Component {
    render() {
        const {cost, changeCostValue, switchEditMode} = this.props;
        const dayTime = cost.date.getTime();
        const todayDate = new Date();
        const todayTime = todayDate.getTime();
        return (
            <div className="card-body row">
                <div className="col-12 col-lg-4">
                    <h5 className="card-title">{cost.date ? transformDate(cost.date) : ""}</h5>
                    <div>
                        <input
                           type="text"
                           name="spended"
                           className="form-control-sm w-100"
                           id={cost.id}
                           placeholder="Сумма трат за день"
                           onChange={changeCostValue}
                           value={cost.spended}/>
                    </div>
                    <div>
                        <textarea
                           type="text"
                           name="comment"
                           className="form-control mt-2"
                           id={cost.id}
                           placeholder="Введите коментарий"
                           onChange={changeCostValue}
                           value={cost.comment}/>
                    </div>
                </div>
                <div className="col-12 col-lg-4"></div>
                <div className="col-12 col-lg-3 d-flex flex-column justify-content-end align-items-end">
                    <div className="">
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
