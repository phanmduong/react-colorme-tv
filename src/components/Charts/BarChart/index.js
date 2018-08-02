import React from "react";
import DataSet from "@antv/data-set/build/data-set";
import {Axis, Chart, Geom, Legend, Tooltip} from "bizcharts";
import PropTypes from 'prop-types';
import autoHeight from "../../HOC/autoHeight";

@autoHeight()
class BarChart extends React.PureComponent {
    componentDidMount() {
    }

    getDataView = () => {
        const {data, titles, fields} = this.props;
        const dataChart = data.map((dataArray, index) => {
            let col = {name: titles[index]};

            fields.forEach((field, indexItem) => {
                col[field] = dataArray[indexItem];
            });

            return col;
        });
        const ds = new DataSet();
        const dv = ds.createView().source(dataChart);
        dv.transform({
            type: 'fold',
            fields: fields,
            key: 'x1',
            value: 'y1',
        });
        return dv;
    };

    render() {
        const dv = this.getDataView();
        return (
            <Chart padding={['auto']} height={this.props.height} data={dv} forceFit>
                <Axis name="x1"/>
                <Axis name="y1"/>
                <Legend/>
                <Tooltip crosshairs={{type: "y"}}/>
                <Geom type='interval' position="x1*y1" color={'name'}
                      adjust={['dodge']}/>
            </Chart>
        );
    }
}

BarChart.propTypes = {
    fields: PropTypes.array.isRequired,
    titles: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    height: PropTypes.number,
};

export default BarChart;
