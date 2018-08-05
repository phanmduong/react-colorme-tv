import React from "react";
import {Card} from "antd";
import BarChart from "../../../components/Charts/BarChart";
import PropTypes from 'prop-types';

class CardRegisters extends React.Component {
    render() {
        const {dateArray, registersByDate, paidByDate, registersToday} = this.props;
        return (
            <Card title="Đăng kí" extra={`Số đăng kí hôm nay - ${registersToday}`}
                  className="card-common card-no-padding-vertical">
                <BarChart fields={dateArray} data={[registersByDate, paidByDate]}
                          titles={["Đăng kí", "Đã nộp tiền"]}/>
            </Card>
        );
    }
}

CardRegisters.propTypes = {
    dateArray: PropTypes.array.isRequired,
    registersByDate: PropTypes.array.isRequired,
    paidByDate: PropTypes.array.isRequired,
    registersToday: PropTypes.number.isRequired,
};

export default CardRegisters;
