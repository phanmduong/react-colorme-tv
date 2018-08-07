import React from "react";
import PropTypes from 'prop-types';
import styles from "./styles.less";
import classNamesBind from "classnames/bind";

let cx = classNamesBind.bind(styles);

class Info extends React.Component {
    render() {
        const {value, suffix, prefixCls, isCol} = this.props;
        return (
            <div className={cx(`${prefixCls}-content`,
                {[`${prefixCls}-content-col`]: isCol})}>
                <div className={cx(`${prefixCls}-content-title`)}>
                    {value}
                </div>
                <div className={cx(`${prefixCls}-content-suffix`)}>
                    {suffix}
                </div>
            </div>
        );
    }
}

Info.defaultProps = {
    prefixCls: 'card-info'
};

Info.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
    suffix: PropTypes.string.isRequired,
    isCol: PropTypes.bool,
};

export default Info;
