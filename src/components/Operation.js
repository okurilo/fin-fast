import React, { Component } from 'react';

export default class Operation extends Component {
  render() {
    const {
        costs,
        addCost,
        deleteCost,
        changeText,
        changeValue
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
                           className="w-25 form-control"
                           onChange={changeText}
                           value={cost.text}
                           placeholder="Введите текст категории" aria-label="Введите текст категории" aria-describedby="button-addon4"/>
                          <input
                           {...cost}
                           type="text"
                           className="form-control"
                           onChange={changeValue}
                           value={cost.value}
                           placeholder="Сумма" aria-label="Сумма" aria-describedby="button-addon4"/>
                          <div className="input-group-append" id="button-addon4">
                            {/* <button className="btn btn-outline-light" type="button">Edit</button> */}
                            <button
                             {...cost}
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
