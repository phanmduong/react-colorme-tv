import React from "react";
import {Alert} from "antd";
import styles from "./styles.less";
import classNamesBind from "classnames/bind";
import CustomForm from "../../components/common/Form";
import FormInput from "../../components/common/FormInput";
import FormButton from "../../components/common/FormButton";
import Icon from "../../components/common/Icon";
import {signin} from "../../actions/signinActions";

let cx = classNamesBind.bind(styles);

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.setData = this.setState.bind(this);
    }

    state = {
        isLoading: false,
        messageError: false
    };

    handleSubmit = values => {
        signin(values, this.setData);
    };

    renderMessageError = content => {
        return (
            <Alert
                style={{marginBottom: 24}}
                message={content}
                type="error"
                showIcon
            />
        );
    };

    render() {
        const {prefixCls} = this.props;
        return (
            <div className={cx(`${prefixCls}-login`)}>
                {!this.state.isLoading &&
                this.state.messageError &&
                this.renderMessageError(this.state.messageError)}

                <CustomForm onSubmit={this.handleSubmit}>
                    <FormInput
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên đăng nhập'
                            }
                        ]}
                        prefix={<Icon type="user"/>}
                        suffix={<Icon type="close-circle"/>}
                        suffixClear
                        placeholder={'Tên đăng nhập'}
                    />
                    <FormInput
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu'
                            }
                        ]}
                        prefix={<Icon type="lock"/>}
                        suffix={<Icon type="close-circle"/>}
                        suffixClear
                        type="password"
                        placeholder={'Mật khẩu'}
                    />
                    <FormButton
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className={cx(`${prefixCls}-submit`)}
                        loading={this.state.isLoading}
                    >
                        Đăng nhập
                    </FormButton>
                </CustomForm>
            </div>
        );
    }
}

SignInForm.defaultProps = {
    prefixCls: 'sign-in'
};

export default SignInForm;
