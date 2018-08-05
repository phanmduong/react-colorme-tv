import React from "react";
import {Card, Progress} from "antd";
import WaterWave from "../../../components/Charts/WaterWave";
import styles from './styles.less';
import PropTypes from 'prop-types';

import classNamesBind from "classnames/bind";
import {convertMoneyToK, dotNumber} from "../../../helpers/utility";

let cx = classNamesBind.bind(styles);

class CardRevenue extends React.Component {
    state = {
        percent: 30
    };

    render() {
        const {prefixCls, money, targetRevenue, bases} = this.props;
        const title = `${convertMoneyToK(dotNumber(money))}/${convertMoneyToK(dotNumber(targetRevenue))}`;
        return (
            <div>
                <Card title="Doanh thu" extra={`Doanh thu hôm nay - ${dotNumber(money)}đ`}
                      className="card-common full-height"
                      style={{height: '100%'}}>
                    <div className={cx(`${prefixCls}-card-revenue-content`)}>
                        <div className={cx(`${prefixCls}-card-revenue-chart`)}>
                            <WaterWave percent={Math.round(money * 100 / targetRevenue)} height={180} title={title}/>
                        </div>
                        <div className={cx(`${prefixCls}-card-revenue-base`)}>
                            {bases.map((base, index) => {
                                return (
                                    <div key={index} className={cx(`${prefixCls}-card-revenue-base-item`)}>
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

CardRevenue.propTypes = {
    money: PropTypes.number.isRequired,
    targetRevenue: PropTypes.number.isRequired,
    bases: PropTypes.array.isRequired,
};

export default CardRevenue;
