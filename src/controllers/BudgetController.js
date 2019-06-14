
// import Income from '../components/Income';
// import Operation from '../components/Operation';
// import Daily from '../components/Daily';
// import Total from '../components/Total';
import AppInitialState from '../model/AppInitialState';

export default class BudgetController {
    constructor(getProps, setState, getState) {
        this.getProps = getProps;
        this.setState = setState;
        this.getState = getState;

        this._writeToState = this._writeToState.bind(this);
        this._writeToLocal = this._writeToLocal.bind(this);
        this.handleClearStateStorage = this.handleClearStateStorage.bind(this);
        this._updateTotal = this._updateTotal.bind(this);
        this._reCalcDailyCosts = this._reCalcDailyCosts.bind(this);
    }

    _initCashedData = (cachedData) => {
        let parsed = JSON.parse(cachedData);
        parsed.startDay = parsed.startDay ? new Date(parsed.startDay) : null;
        parsed.endDay = parsed.endDay ? new Date(parsed.endDay) : null;
        parsed.dailyCosts = parsed.dailyCosts.map((el) => {
          el.date = new Date(el.date);
          return el;
        });

        const checkFieldArray = (field) => {
          return (!Array.isArray(field) || field === undefined) ? [] : field;
        };
        const fieldValids = (parsed) => {
          parsed.mandatoryCosts = checkFieldArray(parsed.mandatoryCosts);
          parsed.dailyCosts = checkFieldArray(parsed.dailyCosts);
          parsed.dailyCosts.forEach((el) => {
            el.spending = checkFieldArray(el.spending);
          });
          return parsed;
        };
        parsed = fieldValids(parsed);

        this.setState( parsed );
    }
    // Write to state and storage functions
    _writeToState = (data) => {
      this.setState({[data.field]: data.value}, function () {
        this._updateTotal();
      }.bind(this));
    }
  
    _writeToLocal = (data) => {
      localStorage.setItem("finData", JSON.stringify(data));
    }
  
    handleClearStateStorage = () => {
      this.setState( new AppInitialState(), function () {
        this._updateTotal();
      });
    }
  
    _updateTotal = () => {
      // TODO: Add switcher for fields and update only used branches
      const _countRequiredCost = (mandatoryCosts) => {
        let result = mandatoryCosts.reduce(
          (accumulator, currentValue) => accumulator + currentValue.value,
          0
        );
        return result;
      };
  
      let income = this.getState().income;
      let days = this.getState().days;
      let mandatoryCosts = [...this.getState().mandatoryCosts];
      let dailyCosts = [...this.getState().dailyCosts];
      const dailyCostsSpended = dailyCosts.reduce((sum, el) => {
        return sum + el.spended;
      }, 0);
      const percentStorage = this.getState().percentStorage / 100;
      let total = this.getState().total;
      let requiredCosts = _countRequiredCost(mandatoryCosts);
  
      // Calc Total info
      total.storage = parseInt(income * percentStorage, 10) || 0;
      total.balance = parseInt(income - total.storage, 10) - requiredCosts || 0;
      total.balanceLeft = parseInt(income - total.storage, 10) - requiredCosts - dailyCostsSpended || 0;
      total.budget = parseInt(total.balance / days, 10) || 0;
  
      // Calc Daily info
      dailyCosts = this._reCalcDailyCosts(dailyCosts, total.budget);
  
      this.setState({total, dailyCosts}, function () {
        this._writeToLocal(this.getState());
      }.bind(this));
    }
  
    _reCalcDailyCosts = (dailyCosts, budget) => {
      let newDailyCosts = dailyCosts.reduce(
        function (accumulator, currentValue, index) {
          currentValue.budget = budget;
          if (index === 0) {
            currentValue.available = budget - currentValue.spended;
            currentValue.saved = currentValue.available;//currentValue.available - currentValue.spended;
          } else {
            // currentValue.available = dailyCosts[index - 1].available - currentValue.spended;
            currentValue.available = budget - currentValue.spended; //+ dailyCosts[index - 1].saved;
            currentValue.saved = currentValue.available + dailyCosts[index - 1].saved;// - currentValue.spended;
          }
            accumulator.push(currentValue);
            return accumulator;
          }, []
      );
      // console.log(newDailyCosts);
      return newDailyCosts;
    }
}