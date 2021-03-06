import React, { Component } from 'react';
import '../css/Daily.css';
import Day from './day/Day';

const iconStyle = {
    width: "0.8rem",
    cursor: "pointer"
};
export default class Daily extends Component {
    constructor(props) {
      super(props);

      this.state = {
         showDetail: false
      };
    }
    handleSwitchDetailShow = () => {
        this.setState({ showDetail: !this.state.showDetail });
    }
    handleChangeCostValue = (costId, spending) => {
        const dailyCosts = [...this.props.dailyCosts];
        // const { id, name } = event.currentTarget;
        // let value;
        // switch (name) {
        //     case "spended":
        //         value = parseInt( event.target.value, 10 ) || '';
        //         value = value || 0;
        //         break;
        //     case "comment":
        //     default:
        //         value = event.target.value;
        //         break;
        // }
        const callback = (el, index) => {
            return +el.id === +costId;
        };
        let costIndex = dailyCosts.findIndex(callback);
        dailyCosts[costIndex].spending = spending;
        dailyCosts[costIndex].spended = spending.reduce((sum, el)=>{ 
            return el.isloss ? sum + el.value : sum - el.value;
        }, 0);
        // console.log(costId, spending)
        this.props.writeToState({field: "dailyCosts", value: dailyCosts});
    }
    render() {
        const showDetail = this.state.showDetail ? 'show' : '';
        const btnVis = "fa " + (this.state.showDetail ? "fa-arrow-up" : "fa-arrow-down");
        const { dailyCosts } = this.props;
        return (
            <div>
                <div className="d-flex mt-2 justify-content-center">
                    <button
                     type="button"
                     className=" w-100 text-center btn btn-primary"
                     onClick={this.handleSwitchDetailShow} >
                        <div className="d-flex align-items-center justify-content-center">
                            <i style={iconStyle} className={"mr-4 " + btnVis}/>
                            <span>Детализация расходов по дням</span>
                            <i style={iconStyle} className={"ml-4 " + btnVis}/>
                        </div>
                    </button>
                </div>
                <div className={"daily text-white bg-primary collapse" + showDetail} >
                    {dailyCosts.map((cost)=>{
                        return (
                            <Day
                             key={cost.id}
                             cost={cost}
                             changeCostValue={this.handleChangeCostValue} />
                        );
                      })}
                </div>
            </div>
        );
    }
}
