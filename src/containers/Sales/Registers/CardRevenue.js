import React from "react";
import {Card, Progress} from "antd";
import WaterWave from "../../../components/Charts/WaterWave";
import styles from './styles.less';
// import PropTypes from 'prop-types';

import classNamesBind from "classnames/bind";
import {convertMoneyToK, dotNumber} from "../../../helpers/utility";

let cx = classNamesBind.bind(styles);

class CardRevenue extends React.Component {
    state = {
        percent: 30
    };

    componentDidMount() {
        // setInterval(()=>{
        //     this.setState({percent: this.state.percent + 5})
        // },2000)
    }

    render() {
        const {prefixCls} = this.props;
        const bases = [
            {
                name: 'Cơ sở 1',
                money: 150000000,
                target_revenue: 210000000,
            },
            {
                name: 'Cơ sở 2',
                money: 170000000,
                target_revenue: 210000000,
            },
            {
                name: 'Cơ sở 3',
                money: 100000000,
                target_revenue: 210000000,
            },
            {
                name: 'Cơ sở 4',
                money: 200000000,
                target_revenue: 210000000,
            },
            {
                name: 'Cơ sở 5',
                money: 170000000,
                target_revenue: 210000000,
            },
        ];
        const money = 220000000;
        const target_revenue = 300000000;
        const title = `${convertMoneyToK(dotNumber(money))}/${convertMoneyToK(dotNumber(target_revenue))}`;
        return (
            <div>
                <Card title="Doanh thu" extra="Doanh thu hôm nay - 100.000.000đ" className="card-common full-height"
                      style={{height: '100%'}}>
                    <div className={cx(`${prefixCls}-card-revenue-content`)}>
                        <div className={cx(`${prefixCls}-card-revenue-chart`)}>
                            <WaterWave percent={Math.round(money * 100 / target_revenue)} height={200} title={title}/>
                        </div>
                        <div className={cx(`${prefixCls}-card-revenue-base`)}>
                            {bases.map((base) => {
                                return (
                                    <div className={cx(`${prefixCls}-card-revenue-base-item`)}>
                                        <div className={cx(`${prefixCls}-card-revenue-base-item-title`)}>
                                            <div className={cx(`${prefixCls}-card-revenue-base-item-name`)}>
                                                {base.name}
                                            </div>
                                            <div className={cx(`${prefixCls}-card-revenue-base-item-name`)}>
                                                {convertMoneyToK(dotNumber(base.money))}/
                                                {convertMoneyToK(dotNumber(base.target_revenue))}
                                            </div>
                                        </div>
                                        <div className={cx(`${prefixCls}-card-revenue-base-item-progress`)}>
                                            <Progress percent={Math.round(base.money * 100 / base.target_revenue)}
                                                      status="active"/>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

CardRevenue.defaultProps = {
    prefixCls: 'sales-register'
};

CardRevenue.propTypes = {};

export default CardRevenue;
