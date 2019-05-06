import React, { Component } from 'react';

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

    render() {
        const {editMode} = this.state;
        const {cost} = this.props;
        return (
            <div className="card bg-secondary">
                <div className="card-body row">
                    <div className="col-12 col-lg-6">
                        <h5 className="card-title">30.04.2019</h5>
                        <div>
                            { editMode
                                ? <input
                                   type="text"
                                   className="form-control-sm w-100"
                                   id="spended"
                                   placeholder="Сумма трат за день"
                                   onChange={this.handleChangeDays}
                                   value={cost.spended}/>
                                : <span className="card-text">Траты: {cost.spended} руб.</span> }
                        </div>
                        <div>
                            { editMode
                                ? <textarea
                                   type="text"
                                   className="form-control mt-2"
                                   id="spended"
                                   placeholder="Введите коментарий"
                                   onChange={this.handleChangeDays}
                                   value={cost.comment}/>
                                : <p className="card-text">{cost.comment}</p> }
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex flex-column justify-content-end align-items-end">
                        <div>
                            <h6 className="card-title">Дневной бюджет: {cost.available} руб.</h6>
                            <h6 className="card-title">Экономия: {cost.saved} руб.</h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-1 d-flex align-items-center justify-content-end">
                    {/* <button className="btn btn-primary" onClick={this.switchEditMode} ><i className="fa fa-pencil" /></button> */}
                    { editMode
                                ? <button className="btn btn-danger w-100" onClick={this.switchEditMode} ><i className="fa fa-floppy-o" /></button>
                                : <button className="btn btn-secondary border border-success w-100" onClick={this.switchEditMode} ><i className="fa fa-pencil" /></button> }
                </div>
                </div>
            </div>
        );
    }
}
