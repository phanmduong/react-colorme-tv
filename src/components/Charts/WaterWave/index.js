import React, {PureComponent} from 'react';
import styles from './index.less';
import PropTypes from 'prop-types';
/* eslint no-return-assign: 0 */
/* eslint no-mixed-operators: 0 */

import classNamesBind from "classnames/bind";
// import autoHeight from "../../HOC/autoHeight";

let cx = classNamesBind.bind(styles);

let percentData = 0;

// @autoHeight()
export default class WaterWave extends PureComponent {
    state = {
        radio: 1,
    };

    componentDidMount() {
        this.renderChart();
        this.resize();

        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.timer);
        if (this.node) {
            this.node.innerHTML = '';
        }
        window.removeEventListener('resize', this.resize);
    }

    resize = () => {
        const {height, isAutoHeight} = this.props;
        const {offsetWidth} = isAutoHeight ? this.root.parentNode : this.root.parentNode.parentNode;
        console.log(this.root.parentNode.parentNode);
        console.log(offsetWidth);
        this.setState({
            radio: offsetWidth < height ? offsetWidth / height : 1,
        });
    };

    componentDidUpdate() {
        const {percent} = this.props;
        percentData = percent / 100;
        if (percentData != percent / 100){
            percentData = percent / 100;
        }
    }

    renderChart() {
        const {percent, color = '#1890FF'} = this.props;
        percentData = percent / 100;
        const data = percentData;
        const self = this;

        if (!this.node || (data !== 0 && !data)) {
            return;
        }

        const canvas = this.node;
        const ctx = canvas.getContext('2d');

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const radius = canvasWidth / 2;
        const lineWidth = 2;
        const cR = radius - lineWidth;

        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;

        const axisLength = canvasWidth - lineWidth;
        const unit = axisLength / 8;
        const range = 0.2;
        let currRange = range;
        const xOffset = lineWidth;
        let sp = 0;
        let currData = 0;
        const waveupsp = 0.005;

        let arcStack = [];
        const bR = radius - lineWidth;
        const circleOffset = -(Math.PI / 2);
        let circleLock = true;

        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }

        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);

        function drawCicle() {
            const loop = true;
            while (loop) {
                if (arcStack.length) {
                    const temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                } else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;

                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, 1);

                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, 1);

                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = color;
                    return;
                }
            }
        }

        drawCicle();

        function drawSin() {
            ctx.beginPath();
            ctx.save();

            const sinStack = [];
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                const x = sp + (xOffset + i) / unit;
                const y = Math.sin(x) * currRange;
                const dx = i;
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }

            const startPoint = sinStack.shift();

            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);

            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            let colorSpin = color;
            // if (percentData < 0.3) {
            //     colorSpin = 'red';
            // } else {
            //     if (percentData > 0.8) {
            //         colorSpin = 'green';
            //     } else {
            //         colorSpin = color;
            //     }
            // }
            gradient.addColorStop(1, colorSpin);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }

        function renderCanvas() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            const data = percentData;
            if (!circleLock) {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        const t = range * 0.01;
                        currRange -= t;
                    }
                } else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                } else {
                    if (currRange <= range) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }

                sp += 0.1;
                drawSin();
            }
            self.timer = requestAnimationFrame(renderCanvas);
        }

        renderCanvas();
    }

    render() {
        const {radio} = this.state;
        const {percent, title, height, color = '#1890FF'} = this.props;
        const isFull = percent >= 70 ? color + true : false;
        return (
            <div
                className={cx(`waterWave`)}
                ref={n => (this.root = n)}
                style={{transform: `scale(${radio})`}}
            >
                <div style={{width: height, height, overflow: 'hidden'}}>
                    <canvas
                        className={cx(`waterWaveCanvasWrapper`)}
                        ref={n => (this.node = n)}
                        width={height * 2}
                        height={height * 2}
                    />
                </div>
                <div className={cx(`text`, {full: isFull})} style={{width: height}}>
                    {title && <span>{title}</span>}
                    <h4>
                        {percent}
                        %
                    </h4>
                </div>
            </div>
        );
    }
}

WaterWave.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    percent: PropTypes.number,
    style: PropTypes.object,
};