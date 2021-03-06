import React from "react";
import {Card, Col, Row} from "antd";

class DashboardContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={16}>
                        <div className={"full-height"}>
                            <div style={{height: '40%', paddingBottom: '24px'}}>
                                <Card title="Card title" extra="dsadas" className="card-common" style={{height: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                            <div style={{height: '60%'}}>
                                <Card title="Card title" extra="dsadas" className="card-common" style={{height: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" extra="dsadas" className="card-common full-height">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;
