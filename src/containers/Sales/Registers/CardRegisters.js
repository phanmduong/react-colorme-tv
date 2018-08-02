import React from "react";
import {Card} from "antd";
import BarChart from "../../../components/Charts/BarChart";
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

const registers_by_date = [
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

const paid_by_date = [
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

class CardRegisters extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Card title="Đăng kí" extra="Số đăng kí hôm nay" className="card-common card-no-padding-vertical" >
                <BarChart fields={date_array} data={[registers_by_date, paid_by_date]}
                          titles={["Đăng kí", "Đã nộp tiền"]}/>
            </Card>
        );
    }
}

CardRegisters.propTypes = {};

export default CardRegisters;
