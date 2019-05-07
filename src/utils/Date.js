const _addZero = function(value) {
    value = value.toString() || "";
    if (value.length === 1) {
        value = "0" + value;
    }
    return value;
};
export const transformDate = (date) => {
    date = new Date(date);
    const currDate = _addZero(date.getDate());
    const currMonth = _addZero(date.getMonth() + 1); //Months are zero based
    const currYear = date.getFullYear().toString();
    return (`${currDate}.${currMonth}.${currYear}`);
};
export const calcDaysDifference = (startDay, endDay) => {
    const timeDifference = Math.abs(endDay.getTime() - startDay.getTime());
    const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return days;
};

/*  transformDate = (date) => {
        date = new Date(date);
        const currDate = this._addZero(date.getDate());
        const currMonth = this._addZero(date.getMonth() + 1); //Months are zero based
        const currYear = date.getFullYear().toString();
        return (`${currDate}.${currMonth}.${currYear}`);
    }; */

/*   transformDate = (endDay, days) => {
    // console.log("Transform Date");
    let date = new Date(endDay);
    // date.setDate(date.getDate() + days);
    const currDate = this._addZero(date.getDate());
    const currMonth = this._addZero(date.getMonth() + 1); //Months are zero based
    const currYear = date.getFullYear().toString();
    return (`(до ${currDate}.${currMonth}.${currYear})`);
  }; */