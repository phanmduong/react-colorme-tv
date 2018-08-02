import React from "react";
import {Card} from "antd";
import LineChart from "../../../components/Charts/LineChart";
//import PropTypes from 'prop-types';

let date_array = [
    "05-07-2018",
    "06-07-2018",
    "07-07-2018",
    "08-07-2018",
    "09-07-2018",
    "10-07-2018",
    "11-07-2018",
    "12-07-2018",
    "13-07-2018",
    "14-07-2018",
];

let registers_by_date = [
    50,
    35,
    33,
    16,
    56,
    55,
    54,
    56,
    27,
    42,
];

let paid_by_date = [
    20,
    19,
    24,
    5,
    33,
    44,
    28,
    42,
    17,
    25,
];

class CardRegistersRate extends React.Component {
    componentDidMount() {
        registers_by_date.forEach((value, index) => {
            if (index > 0) {
                registers_by_date[index] += registers_by_date[index - 1];
                paid_by_date[index] += paid_by_date[index - 1];
            }
        });
    }

    render() {
        // const registers = {name: "Đăng kí"};
        // date_array.map((date, index) => {
        //     registers[date] = registers_by_date[index];
        // });
        // const registers_paid = {name: "Đã nộp tiền"};
        // let date_array1 = date_array.map((date, index) => {
        //     registers_paid[date] = paid_by_date[index];
        //     return date;
        // });
        //
        // const data = [registers];
        // console.log(data);
        // console.log(date_array1);
        // const ds = new DataSet();
        // const dv = ds.createView().source(data);
        // dv.transform({
        //     type: 'fold',
        //     fields: date_array1,
        //     key: 'date',
        //     value: 'number register',
        // });



        return (
            <Card title="Tỉ lệ truyển sinh" extra="Tổng số học viên đã đóng tiền"
                  className="card-common card-no-padding-vertical">
                <LineChart fields={date_array} data={[registers_by_date, paid_by_date]}
                           titles={["Đăng kí", "Đã nộp tiền"]}/>
            </Card>
        );
    }
}

CardRegistersRate.propTypes = {};

export default CardRegistersRate;
