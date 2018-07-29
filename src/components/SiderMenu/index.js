import React from "react";
import {Layout, Menu} from "antd";
import styles from "./index.less";
import {Link} from "react-router-dom";
// import classNames from 'classnames/bind';
import classNamesBind from "classnames/bind";
import {LOGO_SIDER} from "../../constants";

let cx = classNamesBind.bind(styles);

class SiderMenu extends React.Component {
    render() {
        const {prefixCls} = this.props;
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
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div
                                className={cx(`${prefixCls}-menu-item-icon`, {[`${prefixCls}-menu-item-active`]: true})}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                    <div className={cx(`${prefixCls}-menu-item`)}>
                        <Link to="/">
                            <div className={cx(`${prefixCls}-menu-item-icon`)}/>
                        </Link>
                    </div>
                </div>
            </Layout.Sider>
        );
    }
}

SiderMenu.defaultProps = {
    prefixCls: 'sider-menu'
};

export default SiderMenu;
