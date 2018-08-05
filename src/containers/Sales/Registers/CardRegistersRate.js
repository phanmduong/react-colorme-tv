import React from "react";
import {Card} from "antd";
import LineChart from "../../../components/Charts/LineChart";
import PropTypes from 'prop-types';

class CardRegistersRate extends React.Component {
    componentDidMount() {
    }

    formatData = (dateArray, registersByDate, paidByDate) => {
        let registers = [registersByDate[0]];
        let paid = [paidByDate[0]];
        let date = [];
        dateArray.forEach((value, index) => {
            date[index] = dateArray[index];
            if (index > 0) {

                registers[index] = registersByDate[index] + registers[index - 1];
                paid[index] = paidByDate[index] + paid[index - 1];
            }
        });
        return {
            dateArray: date,
            registersByDate: registers,
            paidByDate: paid
        };
    };

    render() {
        const {dateArray, registersByDate, paidByDate, totalPaidRegisters} = this.props;

        const data = this.formatData(dateArray, registersByDate, paidByDate);

        return (
            <Card title="Tỉ lệ truyển sinh" extra={`Tổng số học viên đã đóng tiền - ${totalPaidRegisters}`}
                  className="card-common card-no-padding-vertical">
                <LineChart fields={data.dateArray} data={[data.registersByDate, data.paidByDate]}
                           titles={["Đăng kí", "Đã nộp tiền"]}/>
            </Card>
        );
    }
}

CardRegistersRate.propTypes = {
    dateArray: PropTypes.array.isRequired,
    registersByDate: PropTypes.array.isRequired,
    paidByDate: PropTypes.array.isRequired,
    totalPaidRegisters: PropTypes.number.isRequired,
};

export default CardRegistersRate;
