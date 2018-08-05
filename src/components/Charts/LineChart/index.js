import React from "react";
import DataSet from "@antv/data-set/build/data-set";
import {Axis, Chart, Geom, Legend, Tooltip} from "bizcharts";
import PropTypes from 'prop-types';
import autoHeight from "../../HOC/autoHeight";

@autoHeight()
class LineChart extends React.PureComponent {
    componentDidMount() {
    }

    getDataView = () => {
        const {data, titles, fields} = this.props;
        const dataChart = fields.map((field, index) => {
            let col = {name: fields[index]};
            titles.forEach((title, indexTitle) => {
                col[title] = data[indexTitle][index];
            });
            return col;
        });
        const ds = new DataSet();
        const dv = ds.createView().source(dataChart);
        dv.transform({
            type: 'fold',
            fields: titles,
            key: 'x1',
            value: 'y1',
        });
        return dv;
    };

    render() {
        const dv = this.getDataView();
        const cols = {
            name: {
                range: [0, 1]
            }
        };
        return (
            <Chart padding={['auto']} height={this.props.height} data={dv} forceFit scale={cols}>
                <Legend/>
                <Axis name="name"/>
                <Axis name="y1"/>
                <Tooltip crosshairs={{type: "y"}}/>
                <Geom type='line' position="name*y1" color={'x1'} size={2}/>
                <Geom type='point' position="name*y1" size={4} shape={'circle'} color={'x1'}
                      style={{stroke: '#fff', lineWidth: 1}}/>

            </Chart>
        );
    }
}

LineChart.propTypes = {
    fields: PropTypes.array.isRequired,
    titles: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    height: PropTypes.number,
};

export default LineChart;
