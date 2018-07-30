import React, {Component} from "react";
import DocumentTitle from 'react-document-title';
import {translate} from "react-i18next";
import {isEmpty} from "../../helpers/utility";

const withTitle = () => {
    return WrappedComponent => {
        class WebTitle extends Component {
            componentDidMount() {

            }

            render() {
                const {t, title} = this.props;
                const documentTitle = !isEmpty(title) ? t(title) : 'AtomUser';
                return (
                    <WrappedComponent {...this.props}/>
                );
            }
        }

        return translate(props => props.namespaces)(WebTitle);
    };
};

export default withTitle;
