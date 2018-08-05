import React from "react";
import {Col, Row} from "antd";
import {withHeader} from "../../../components/context/HeaderContext";
import {withMenu} from "../../../components/context/MenuContext";
import CardRegisters from "./CardRegisters";
import CardRevenue from "./CardRevenue";
import CardRegistersRate from "./CardRegistersRate";
import {observer} from 'mobx-react';
import store from './store';
import {getValuesFromKeys, isEmptyObj} from "../../../helpers/entity/object";
import GlobalLoading from "../../../components/GlobalLoading";
import {generateDateWithUnix} from "../../../helpers/time";
import {removeObservable} from "../../../helpers/entity/mobx";
import moment from "moment/moment";

@observer
class Registers extends React.Component {
    componentDidMount() {
        store.getData();
        this.timeOut = setInterval(() => {
            store.getData();
        }, 5000);
    }

    componentWillUnmount() {
        if (this.timeOut) {
            clearInterval(this.timeOut);
        }
    }


    formatDataByDate = (dateArray, registersByDate, paidByDate) => {
        let registers = [];
        let paids = [];
        dateArray.forEach((date) => {
            const itemRegister = registersByDate.filter((register) => register.date == date)[0];
            registers = [...registers, itemRegister ? itemRegister.total : 0];
            const itemPaid = paidByDate.filter((paid) => paid.date == date)[0];
            paids = [...paids, itemPaid ? itemPaid.total : 0];
        });

        return {
            registersByDate: registers,
            paidByDate: paids
        };
    };

    render() {
        const {data} = store;
        if (isEmptyObj(data)) {
            return <GlobalLoading/>;
        }

        const dataObj = getValuesFromKeys(removeObservable(data), ["analytics_sales.paid_by_date", "analytics_sales.registers_by_date",
            "analytics_sales.registers_today", "analytics_sales.money_today", "analytics_sales.total_paid_registers",
            "analytics_sales.target_revenue", "analytics_sales.money", "gen.start_time", "gen.end_time", "bases"]);

        const dateArray = generateDateWithUnix(dataObj["gen.start_time"], dataObj["gen.end_time"], 'DD-MM-YYYY');
        const dateArrayWithCurrentTime = generateDateWithUnix(dataObj["gen.start_time"], moment().unix(), 'DD-MM-YYYY');

        const {registersByDate, paidByDate} = this.formatDataByDate(dateArray,
            dataObj["analytics_sales.registers_by_date"], dataObj["analytics_sales.paid_by_date"]);
        return (
            <div>
                <Row gutter={24}>
                    <Col span={16}>
                        <div className={"full-height"}>
                            <div style={{height: '50%', paddingBottom: '24px'}}>
                                <CardRegisters
                                    dateArray={dateArray}
                                    paidByDate={paidByDate}
                                    registersToday={dataObj["analytics_sales.registers_today"]}
                                    registersByDate={registersByDate}
                                />
                            </div>
                            <div style={{height: '50%'}}>
                                <CardRegistersRate
                                    dateArray={dateArrayWithCurrentTime}
                                    paidByDate={paidByDate}
                                    registersByDate={registersByDate}
                                    totalPaidRegisters={dataObj["analytics_sales.total_paid_registers"]}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <CardRevenue
                            money={dataObj["analytics_sales.money"]}
                            targetRevenue={dataObj["analytics_sales.target_revenue"]}
                            bases={dataObj["bases"]}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

Registers.propTypes = {};

export default withHeader()(withMenu()(Registers));
