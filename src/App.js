import React from "react";
import Router from './Router';
import viVN from "antd/lib/locale-provider/vi_VN";
import {LocaleProvider} from "antd";

const App = () => {
    return (
        <LocaleProvider locale={viVN}>
            <Router/>
        </LocaleProvider>
    );
};

export default App;
