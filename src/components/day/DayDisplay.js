import React, { Component } from 'react';
import {transformDate} from "../../utils/Date";

export default class DayDisplay extends Component {
    isToday = (date) => {
        const today = new Date();
        console.log(date, today);
        return date.getDate() == today.getDate() &&
          date.getMonth() == today.getMonth() &&
          date.getFullYear() == today.getFullYear();
    }

    render() {
        const {cost, switchEditMode} = this.props;
        const dayTime = cost.date.getTime();
        const todayDate = new Date();
        const todayTime = todayDate.getTime();
        const bToday = this.isToday(cost.date);
        return (
            <div className="card-body row">
                <div className="col-12 col-lg-4">
                    <h5 className="card-title">
                        {cost.date
                            ? transformDate(cost.date) + (bToday ? " (Сегодня)" : "")
                            : ""}
                    </h5>
                    <div>
                       <span className="card-text">Траты: {cost.spended} руб.</span>
                    </div>
                    <div>
                        <span className="card-text">{cost.comment}</span>
                    </div>
                </div>
                <div className="col-12 col-lg-4"></div>
                <div className="col-12 col-lg-3 d-flex flex-column justify-content-end align-items-end">
                    <div className="d-flex flex-column flex-grow-1 w-100">
                        <h6 className="card-title">Дневной бюджет: {cost.budget} руб.</h6>
                        <h6 className="card-title">Остаток на сегодня: {cost.available} руб.</h6>
                        { (dayTime < todayTime) &&
                            <span>
                                <h6 className="card-title mb-0">Сэкономлено: {cost.saved} руб.</h6>
                                <h6 className="card-title font-weight-normal"><i>(С учётом остатка за предыдущий день)</i></h6>
                            </span>
                        }
                    </div>
                </div>
                <div className="col-12 col-lg-1 d-flex align-items-center justify-content-end">
                    <button className="btn btn-secondary border border-success w-100" onClick={switchEditMode} >
                        <i className="fa fa-pencil" />
                    </button>
                </div>
            </div>
        );
    }
}
