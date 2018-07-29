import React from "react";
import {Layout} from "antd";
import GlobalHeader from "../../components/GlobalHeader";
import SiderMenu from "../../components/SiderMenu";
import {QUERY_SCREEN} from "../../constants/index";
import {ContainerQuery} from "react-container-query";
import classNamesBind from "classnames/bind";
import classNames from "classnames";
import styles from "./styles.less";
import AppRoutes from "../../routes/AppRoutes";
import {setHeaderToken} from "../../helpers/axios";

let cx = classNamesBind.bind(styles);


class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        setHeaderToken();
    }

    render() {
        const {prefixCls} = this.props;
        const layout = (
            <Layout hasSider>
                <SiderMenu/>
                <Layout>
                    <GlobalHeader
                    title={"Content Ranking"}
                    />
                    <div className={cx(`${prefixCls}-layout`)}>
                        <Layout.Content>
                            <div className={cx(`${prefixCls}-layout-content`)}>
                                <AppRoutes/>
                            </div>
                        </Layout.Content>
                    </div>
                </Layout>
            </Layout>
        );
        return (
            <ContainerQuery query={QUERY_SCREEN}>
                {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
        );
    }
}

AppContainer.defaultProps = {
    prefixCls: 'app-container'
};

AppContainer.propTypes = {};

export default AppContainer;
