import React from "react";
import PropTypes from "prop-types";
import {
    Layout,
} from "antd";
import styles from "./styles.less";
import classNamesBind from "classnames/bind";
import {formatTime} from "../../helpers/time";

let cx = classNamesBind.bind(styles);

class GlobalHeader extends React.Component {
    state = {
        time: Date.now() / 1000
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
    }

    render() {
        const {prefixCls, title} = this.props;
        const {time} = this.state;
        return (
            <Layout.Header
                className={cx(`${prefixCls}-layout`)}
            >
                <div className={cx(`${prefixCls}-layout-header`)}>
                    <div className={cx(`${prefixCls}-layout-header-title`)}>
                        {title}
                    </div>
                    <div className={cx(`${prefixCls}-layout-header-time`)}>
                        {formatTime(time, 'LLLL')}
                    </div>
                </div>
            </Layout.Header>
        );
    }
}

GlobalHeader.defaultProps = {
    prefixCls: 'global-header'
};

GlobalHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default GlobalHeader;
