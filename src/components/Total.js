import React/* , { Component }  */from 'react';

const Total = (props) => {
  const {storage, balance, budget, days, percentStorage} = props;
  return (
      <div className="mt-2 card-group text-center">
        <div className="card border-secondary">
          <h4 className="pb-3 mt-3" >{storage} RUB</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Накопления ({percentStorage}%)</h5>
            <p className="card-text">Сумма, которую необходимо отложить в Н/З.</p>
          </div>
        </div>
        <div className="card border-secondary">
          <h4 className="pb-3 mt-3" >{balance} RUB</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">Остаток</h5>
            <p className="card-text">Сумма на расходы, которую можно потратить за {days} дней.</p>
          </div>
        </div>
        <div className="card border-secondary">
          <h4 className="pb-3 mt-3" >{budget} RUB</h4>
          <div className="pt-0 card-body d-flex flex-column justify-content-between">
            <h5 className="card-title ">в день</h5>
            <p className="card-text">Ежедневный бюджет.</p>
          </div>
        </div>
      </div>
    );
  };

export default Total;
