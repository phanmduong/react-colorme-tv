import React from "react";
import {Col, Row} from "antd";
import styles from "./styles.less";
import classNamesBind from "classnames/bind";
import {Link} from "react-router-dom";
import icons from "../../constants/icons";
import {withHeader} from "../../components/context/HeaderContext";
import salesRoutes from "../../routes/salesRoutes";
import {withMenu} from "../../components/context/MenuContext";
import classRoutes from "../../routes/classRoutes";

let cx = classNamesBind.bind(styles);

const screens = [
    {
        text: 'Sales TV',
        icon: icons.sales,
        path: salesRoutes[0].path
    },
    {
        text: 'Class TV',
        icon: icons.classes,
        path: classRoutes[0].path
    },
    {
        text: 'Marketing TV',
        icon: icons.marketing,
        path: ''
    },
    {
        text: 'Office TV',
        icon: icons.office,
        path: ''
    },
];

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div className="container-card">
                <Row gutter={24}>
                    {screens.map((screen, index) => {
                        return (
                            <Col key={index} span={8} className={cx(`${prefixCls}-card`) + " padding-vertical"}>
                                <Link to={screen.path}>
                                    <div className="card-common">
                                        <div className={cx(`${prefixCls}-card-content`)}>
                                            <img className={cx(`${prefixCls}-card-content-icon`)} src={screen.icon}
                                                 alt={screen.text}/>
                                            <div className={cx(`${prefixCls}-card-content-text`)}>
                                                {screen.text}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}

                </Row>
            </div>
        );
    }
}

Home.defaultProps = {
    prefixCls: 'home'
};

Home.propTypes = {};

export default withHeader()(withMenu()(Home));
