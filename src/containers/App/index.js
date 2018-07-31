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
import {HeaderProvider} from "../../components/context/HeaderContext";
import {checkLink, isEmpty} from "../../helpers/utility";
import {isEmptyArr} from "../../helpers/entity/array";
import {MenuProvider} from "../../components/context/MenuContext";
import history from "../../helpers/history";
import {equals} from "../../helpers/entity/object";

let cx = classNamesBind.bind(styles);


class AppContainer extends React.Component {
    state = {
        title: '',
        menu: []
    };
    timeout = null;

    componentDidMount() {
        setHeaderToken();
    }

    changeTitleHeader = (title) => {
        title = isEmpty(title) ? '' : title;
        if (title != this.state.title) {
            this.setState({title});
        }
    };

    nextMenu = (menu) => {
        const {location} = history;
        const {pathname} = location;


        const index = menu.findIndex((item) => {
            return checkLink(item.path, pathname);
        });

        let nextIndex = 0;
        if (0 <= index && index < menu.length - 1) {
            nextIndex = index + 1;
        }

        if (index === -1) {
            clearInterval(this.timeout);
            return;
        }

        history.push(menu[nextIndex].path);
    };

    setTimeout = (menu) => {
        this.timeout = setInterval(() => {
            this.nextMenu(menu);
        }, 2000);
    };

    clearTimeout = () => {
        if (this.timeout != null) {
            clearInterval(this.timeout);
        }
    };

    updateMenu = (menu) => {

        if (isEmptyArr(menu)) {
            menu = [];
            this.clearTimeout();
        }

        if (!equals(this.state.menu, menu)) {
            console.log("set state");
            this.setState({menu});
            this.clearTimeout();
            this.setTimeout(menu);
        }

    };

    render() {
        const {prefixCls} = this.props;
        const {menu} = this.state;
        const layout = (
            <Layout hasSider>
                <SiderMenu menu={menu}/>
                <Layout>
                    <GlobalHeader
                        title={this.state.title}
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
        const header = {
            onChangeTitle: this.changeTitleHeader
        };
        const menuData = {
            onUpdateMenu: this.updateMenu
        };
        return (
            <HeaderProvider value={header}>
                <MenuProvider value={menuData}>
                    <ContainerQuery query={QUERY_SCREEN}>
                        {params => <div className={classNames(params)}>{layout}</div>}
                    </ContainerQuery>
                </MenuProvider>
            </HeaderProvider>

        );
    }
}

AppContainer.defaultProps = {
    prefixCls: 'app-container'
};

AppContainer.propTypes = {};

export default AppContainer;
