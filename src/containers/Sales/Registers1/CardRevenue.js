import React from "react";
import {Card} from "antd";
import styles from './styles.less';
import PropTypes from 'prop-types';

import classNamesBind from "classnames/bind";

let cx = classNamesBind.bind(styles);

class CardRevenue extends React.Component {
    state = {
        percent: 30
    };

    render() {
        const {prefixCls, money, targetRevenue} = this.props;
        const value = Math.round(money * 100 / targetRevenue);
        return (
            <div>
                <Card title="Doanh thu"
                      className="card-common full-height card-no-padding"
                      style={{height: '100%'}}>
                    <div className={cx(`${prefixCls}`)}>
                        <div className={cx(`${prefixCls}-progress`)} style={{height: Math.min(value, 100) + '%'}}/>
                        <div className={cx(`${prefixCls}-content`)}>
                            <div className={cx(`${prefixCls}-content-title`)}>
                                {value}
                            </div>
                            <div className={cx(`${prefixCls}-content-suffix`)}>
                                %
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        );
    }
}

CardRevenue.defaultProps = {
    prefixCls: 'sales-register-1-card-revenue'
};

CardRevenue.propTypes = {
    money: PropTypes.number.isRequired,
    targetRevenue: PropTypes.number.isRequired,
};

export default CardRevenue;
