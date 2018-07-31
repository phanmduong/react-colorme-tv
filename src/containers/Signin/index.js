import React from "react";
import SignInForm from "./SignInForm";
import {Link} from "react-router-dom";
import {LOGO_HEADER_SIGN_IN} from "../../constants";
import styles from "./styles.less";
import classNamesBind from "classnames/bind";

let cx = classNamesBind.bind(styles);

class SignInContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div className={cx(`${prefixCls}-container`)}>
                <div className={cx(`${prefixCls}-content`)}>
                    <div className={cx(`${prefixCls}-top`)}>
                        <div className={cx(`${prefixCls}-header`)}>
                            <Link to="/">
                                <img
                                    alt="logo"
                                    className={cx(`${prefixCls}-logo`)}
                                    src={LOGO_HEADER_SIGN_IN}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={cx(`${prefixCls}-main`)}>
                        <SignInForm/>
                    </div>
                </div>
            </div>
        );
    }
}

SignInContainer.defaultProps = {
    prefixCls: 'sign-in'
};

SignInContainer.propTypes = {};

export default SignInContainer;
