import React, { Component } from 'react';

export default class Operation extends Component {
  render() {
    const {costs, addCost, deleteCost} = this.props;
    return (
        <div className="card text-white bg-info mt-3">
            <div className="card-body">
                <h5 className="card-title">Обязательные расходы</h5>
                {costs.map((cost)=>{
                    return (
                        <div key={cost.id} className="input-group mb-2">
                          <input
                           type="text"
                           className="w-50 form-control"
                           placeholder="Категория" aria-label="Категория" aria-describedby="button-addon4"/>
                          <input
                           type="text"
                           className="form-control"
                           placeholder="Сумма" aria-label="Сумма" aria-describedby="button-addon4"/>
                          <div className="input-group-append" id="button-addon4">
                            {/* <button className="btn btn-outline-light" type="button">Edit</button> */}
                            <button {...cost}
                             onClick={deleteCost}
                             className="border-left btn btn-dark"
                             type="button">x</button>
                          </div>
                        </div>
                    );
                })}
                <div className="d-flex mt-2 justify-content-end">
                    <button type="button" className="text-right btn btn-light" onClick={ addCost } >Добавить</button>
                </div>
            </div>
        </div>
    );
  }
}
