import React from "react";
import {Col, Row} from "antd";
import {withHeader} from "../../../components/context/HeaderContext";
import {withMenu} from "../../../components/context/MenuContext";
import CardRevenue from "./CardRevenue";
import {observer} from 'mobx-react';
import store from './store';
import {getValuesFromKeys, isEmptyObj} from "../../../helpers/entity/object";
import GlobalLoading from "../../../components/GlobalLoading";
import {removeObservable} from "../../../helpers/entity/mobx";
import moment from "moment/moment";
import CardInfo from "../../../components/CardInfo";
import {rangeDays, round2} from "../../../helpers/utility";

@observer
class Registers extends React.Component {
    componentDidMount() {
        store.getData();
        // store.getData();
        // this.timeOut = setInterval(() => {
        //     store.getData();
        // }, 5000);
    }

    componentWillUnmount() {
        if (this.timeOut) {
            clearInterval(this.timeOut);
        }
    }

    render() {
        const {data} = store;
        if (isEmptyObj(data)) {
            return <GlobalLoading/>;
        }

        const dataObj = getValuesFromKeys(removeObservable(data), ["analytics_sales.money", "analytics_sales.money_today",
            "analytics_sales.registers_today", "analytics_sales.total_registers", "analytics_sales.total_paid_registers",
            "analytics_sales.target_revenue", "analytics_sales.total_classes", "gen.end_time"]);
        return (
            <div>
                <Row gutter={24}>
                    <Col span={7}>
                        <div className={"full-height"}>
                            <div style={{height: `${100 / 3}%`, paddingBottom: '12px'}}>
                                <CardInfo
                                    title={"Doanh thu hôm nay"}
                                    value={round2(dataObj["analytics_sales.money_today"], 1000000)}
                                    suffix={'tr'}
                                />
                            </div>
                            <div style={{height: `${100 / 3}%`, paddingTop: '12px', paddingBottom: '12px'}}>
                                <CardInfo
                                    title={"Số lượng đăng kí hôm nay"}
                                    value={dataObj["analytics_sales.registers_today"]}
                                    suffix={"ĐĂNG KÍ"}
                                />
                            </div>
                            <div style={{height: `${100 / 3}%`, paddingTop: '12px',}}>
                                <CardInfo
                                    title={"Tổng danh thu"}
                                    value={round2(dataObj["analytics_sales.money"], 1000000)}
                                    suffix={"tr"}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={7}>
                        <CardRevenue
                            money={dataObj["analytics_sales.money"]}
                            targetRevenue={dataObj["analytics_sales.target_revenue"]}
                        />
                    </Col>
                    <Col span={10}>
                        <div className={"full-height"}>
                            <div style={{height: `${100 / 3}%`, paddingBottom: '12px'}}>
                                <Row gutter={24} className="height-100">
                                    <Col span={12} className="height-100">
                                        <CardInfo
                                            title={"Tổng đăng kí"}
                                            value={dataObj["analytics_sales.total_registers"]}
                                            suffix={"ĐĂNG KÍ"}
                                            isCol
                                        />
                                    </Col>
                                    <Col span={12} className="height-100">
                                        <CardInfo
                                            title={"Tổng đóng tiền"}
                                            value={dataObj["analytics_sales.total_paid_registers"]}
                                            suffix={'ĐÓNG TIỀN'}
                                            isCol
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{height: `${100 / 3}%`, paddingTop: '12px', paddingBottom: '12px'}}>
                                <CardInfo
                                    title={"Tổng số lớp"}
                                    value={dataObj["analytics_sales.total_classes"]}
                                    suffix={"LỚP HỌC"}
                                    isCol
                                />
                            </div>
                            <div style={{height: `${100 / 3}%`, paddingTop: '12px'}}>
                                <CardInfo
                                    title={"Ngày còn lại"}
                                    value={rangeDays(moment().unix(), dataObj["gen.end_time"])}
                                    suffix={"NGÀY NỮA"}
                                    isCol
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Registers.propTypes = {};

export default withHeader()(withMenu()(Registers));
