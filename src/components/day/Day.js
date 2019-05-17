import React, { Component } from 'react';
import '../../css/Day.css';
// import { transformDate } from "../../utils/Date";
import DayDisplay from "./DayDisplay";
import DayEdit from "./DayEdit";

export default class Day extends Component {
    constructor(props) {
      super(props);

      this.state = {
        editMode: false
      };
    }

    switchEditMode = () => {
        const { editMode } = this.state;
        this.setState({editMode: !editMode});
    }

    // // Income
    // handleChangeIncome = (event) => {
    //     let value = parseInt( event.target.value, 10 ) || '';
    //     value = value || 0;
    //     this.props.writeToState({field: "income", value: value});
    // }
    // handleChange = (e) => {
    //     const { id, value } = e.currentTarget;
    //     this.setState({ [id]: value });
    // }

    render() {
        const {editMode} = this.state;
        const {cost, changeCostValue} = this.props;
        return (
            <div className={"day card bg-secondary mb-1 " + (editMode ? "day-selected" : "")}>
                { editMode
                    ? <DayEdit cost={cost} switchEditMode={this.switchEditMode} changeCostValue={changeCostValue} />
                    : <DayDisplay cost={cost} switchEditMode={this.switchEditMode} /> }
            </div>
        );
    }
}
