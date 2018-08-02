import React from "react";
import {Col, Row} from "antd";
import {withHeader} from "../../../components/context/HeaderContext";
import {withMenu} from "../../../components/context/MenuContext";
import CardRegisters from "./CardRegisters";
import CardRevenue from "./CardRevenue";
// import {track, setTheme} from 'bizcharts';
import CardRegistersRate from "./CardRegistersRate";

//import PropTypes from 'prop-types';

class Registers extends React.Component {
    componentDidMount() {
        // track(false);
        //
        // const config = {
        //     defaultColor: '#1089ff',
        //     shape: {
        //         interval: {
        //             fillOpacity: 1,
        //         },
        //     },
        // };
        //
        // setTheme(config);
    }

    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col span={16}>
                        <div className={"full-height"}>
                            <div style={{height: '50%', paddingBottom: '24px'}}>
                                <CardRegisters/>
                            </div>
                            <div style={{height: '50%'}}>
                                <CardRegistersRate/>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <CardRevenue/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Registers.propTypes = {};

export default withHeader()(withMenu()(Registers));
