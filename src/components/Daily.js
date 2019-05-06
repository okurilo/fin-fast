import React, { Component } from 'react';
import '../css/Daily.css';
import Day from './Day';

const iconStyle = {
    width: "0.8rem",
    cursor: "pointer"
};
export default class Daily extends Component {
    constructor(props) {
      super(props);

      this.state = {
         showDetail: true
      };
    }
    hadnleSwitchDetailShow = () => {
        this.setState({ showDetail: !this.state.showDetail });
    }
    render() {
        const showDetail = this.state.showDetail ? 'show' : '';
        const { dailyCosts, writeToState } = this.props;
        return (
            <div>
                <div className="d-flex mt-2 justify-content-center">
                    <button type="button" className=" w-100 text-center btn btn-primary" onClick={this.hadnleSwitchDetailShow} >
                        <i style={iconStyle} className={"mr-4 fa " + (this.state.showDetail ? "fa-arrow-up" : "fa-arrow-down")} alt="Открыть" />
                        Детализация расходов по дням
                        <i style={iconStyle} className={"ml-4 fa " + (this.state.showDetail ? "fa-arrow-up" : "fa-arrow-down")} alt="Открыть" />
                    </button>
                </div>
                <div className={"daily text-white bg-primary collapse" + showDetail} >
                    <h5>Ежедневные расходы</h5>

                    {dailyCosts.map((cost)=>{
                        return (
                            <Day
                             cost={cost}
                             writeToState={writeToState} />
                        );
                      })}
                </div>
            </div>
        );
    }
}
