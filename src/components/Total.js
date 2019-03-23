import React, { Component } from 'react'

export default class Total extends Component {
  render() {
    return (
      <div className="card-group text-center">
        <div className="card">
          <h4 className="mt-3" >12121212</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Накопления (процент)</h5>
            <p class="card-text">Сумма, которую необходимо отложить в Н/З.</p>
          </div>
        </div>
        <div className="card">
          <h4 className="mt-3" >121212</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">Остаток</h5>
            <p class="card-text">Сумма на расходы, которую можно потратить за {} дней.</p>
          </div>
        </div>
        <div className="card">
          <h4 className="mt-3" >5555555</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">Бюджет</h5>
            <p class="card-text">Ежедневный бюджет, разбитый на указанное количество дней.</p>
          </div>
        </div>
      </div>
    )
  }
}
