import React from "react";
import {Card} from "antd";
import PropTypes from 'prop-types';
import styles from "./styles.less";
import classNamesBind from "classnames/bind";
import Info from "./Info";

let cx = classNamesBind.bind(styles);

class CardInfo extends React.Component {
    render() {
        const {title, height} = this.props;
        return (
            <Card title={title}
                  style={{height: height}}
                  className={cx("card-common")}>
                <Info {...this.props}/>
            </Card>
        );
    }
}

CardInfo.defaultProps = {
    prefixCls: 'card-info'
};

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    suffix: PropTypes.string.isRequired,
    isCol: PropTypes.bool,
};

export default CardInfo;
