import React, { Component } from 'react'

export default class Total extends Component {
  render() {
    const {storage, balance, budget} = this.props;
    return (
      <div className="mt-2 card-group text-center">
        <div className="card">
          <h4 className="pb-3 mt-3" >{storage}</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Накопления (процент)</h5>
            <p className="card-text">Сумма, которую необходимо отложить в Н/З.</p>
          </div>
        </div>
        <div className="card">
          <h4 className="pb-3 mt-3" >{balance}</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">Остаток</h5>
            <p className="card-text">Сумма на расходы, которую можно потратить за {} дней.</p>
          </div>
        </div>
        <div className="card">
          <h4 className="pb-3 mt-3" >{budget}</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">Бюджет</h5>
            <p className="card-text">Ежедневный бюджет, разбитый на указанное количество дней.</p>
          </div>
        </div>
      </div>
    )
  }
}
