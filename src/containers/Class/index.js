import React from "react";
import {Card, Col, Icon, Row} from "antd";
// import styles from "./styles.less";
// import classNamesBind from "classnames/bind";
import {withHeader} from "../../components/context/HeaderContext";
import {withMenu} from "../../components/context/MenuContext";
import {getBases} from "../../apis/baseApis";


// let cx = classNamesBind.bind(styles);

class Class extends React.Component {
    state = {
        bases: []
    };

    async componentDidMount() {
        const res = await getBases();
        const {bases} = res.data;
        this.setState({
            bases
        });
    }

    chooseBase = (id) => {
        console.log("Base: " + id);
    };

    render() {
        // const {prefixCls} = this.props;
        return (
            <div className="container-card">
                <Row>
                    {
                        this.state.bases.map(base => (
                            <Col span={6} style={{height: 200, padding: 3}}>
                                <Card className="card-common" title={base.name}
                                      extra={
                                          <a onClick={() => this.chooseBase(base.id)}>
                                              <Icon type="right-circle-o"/>
                                          </a>
                                      }
                                      style={{width: "100%"}}>
                                    <p>{base.address}</p>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        );
    }
}

Class.defaultProps = {
    prefixCls: 'home'
};

Class.propTypes = {};

export default withHeader()(withMenu()(Class));
