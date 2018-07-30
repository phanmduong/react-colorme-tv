import React from "react";
import {Card, Col, Row} from "antd";
import {withHeader} from "../../../components/context/HeaderContext";
import {withMenu} from "../../../components/context/MenuContext";

//import PropTypes from 'prop-types';

class Registers extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={16}>
                        <div className={"full-height"}>
                            <div style={{height: '40%', paddingBottom: '24px'}}>
                                <Card title="Card title" extra="dsadas" className="card-common"
                                      style={{height: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                            <div style={{height: '60%'}}>
                                <Card title="Card title" extra="dsadas" className="card-common"
                                      style={{height: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Registers.propTypes = {};

export default withHeader()(withMenu()(Registers));
