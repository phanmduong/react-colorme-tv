import React, {Component} from "react";
import PropTypes from "prop-types";
import {Form} from "antd";
import {removePropertyObjectWithKey} from "../../helpers/entity/object";

const generatorFormItem = () => {
    return WrappedComponent => {
        class FormItem extends Component {
            static contextTypes = {
                form: PropTypes.object.isRequired
            };

            render() {
                const {getFieldDecorator} = this.context.form;
                const {onChange, defaultValue, rules, name} = this.props;

                const options = {};

                if (rules) {
                    options.rules = rules;
                }

                if (onChange) {
                    options.onChange = onChange;
                }

                if (defaultValue) {
                    options.initialValue = defaultValue;
                }

                const props = removePropertyObjectWithKey(this.props, 'defaultValue');

                return (
                    <Form.Item>
                        {getFieldDecorator(name, options)(
                            <WrappedComponent {...props}>
                                {this.props.children}
                            </WrappedComponent>
                        )}
                    </Form.Item>
                );
            }
        }

        return FormItem;
    };
};

export default generatorFormItem;
