import React from "react";
import {Layout} from "antd";
import styles from "./index.less";
import {Link} from "react-router-dom";
// import classNames from 'classnames/bind';
import classNamesBind from "classnames/bind";
import {LOGO_SIDER} from "../../constants";
import PropTypes from 'prop-types';
import {checkLink} from "../../helpers/utility";
import history from "../../helpers/history";

let cx = classNamesBind.bind(styles);

class SiderMenu extends React.Component {
    render() {
        const {prefixCls, menu} = this.props;
        return (
            <Layout.Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed
                width={80}
                className={cx(`${prefixCls}-sider`)}
            >
                <div
                    className={cx(`${prefixCls}-logo`)}
                    key="logo"
                >
                    <Link to="/">
                        <img src={LOGO_SIDER} alt="logo"/>
                    </Link>
                </div>
                <div
                    className={cx(`${prefixCls}-menu`)}
                >
                    {
                        menu.map((item, index) => {
                            const {location} = history;
                            const {pathname} = location;
                            const active = checkLink(item.path, pathname);
                            return (
                                <Link to={item.path} key={index}>
                                    <div className={cx(`${prefixCls}-menu-item`)}>
                                        <div className={cx(`${prefixCls}-menu-item-icon`,
                                            {[`${prefixCls}-menu-item-active`]: active})}/>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </Layout.Sider>
        );
    }
}

SiderMenu.defaultProps = {
    prefixCls: 'sider-menu'
};

SiderMenu.propTypes = {
    menu: PropTypes.array.isRequired
};

export default SiderMenu;
