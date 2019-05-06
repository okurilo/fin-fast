import React, { Component } from 'react';

export default class Day extends Component {
    constructor(props) {
      super(props);

      this.state = {
        edit: false
      };
    }

    render() {
        const {edit} = this.state;
        return (
            <div class="card bg-secondary">
                <div className="delete">
                    <button class="btn btn-primary"><i className="fa fa-pencil" /></button>
                </div>
                <div class="card-body row">
                    <div className="first col-12 col-lg-6">
                        <h5 class="card-title">30.04.2019</h5>
                        <p class="card-text">Траты: 2000 руб.</p>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="second col-12 col-lg-6 d-flex flex-column justify-content-end">
                        <div>
                            <h6 class="card-title">Дневной бюджет: 3000 руб.</h6>
                            <h6 class="card-title">Экономия: 3000 руб.</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
