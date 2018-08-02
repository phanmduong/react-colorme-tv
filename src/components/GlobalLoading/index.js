import React from "react";
import { Spin } from "antd";
import styles from "./styles.less";
import classNamesBind from "classnames/bind";

let cx = classNamesBind.bind(styles);


class GlobalLoading extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={cx("container-loading")}>
        <Spin  size="large"/>
      </div>
    );
  }
}

export default GlobalLoading;
