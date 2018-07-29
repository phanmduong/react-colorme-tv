import React from "react";
import {Route, Switch} from "react-router-dom";
import dashboardRoutes from "./dashboardRoutes";

const routes = [...dashboardRoutes];

const renderRoutes = (routes, parentPath = "") => {
    return (
        <Switch>
            <div>dsads</div>
            {routes.map(route => {
                if (route.children) {
                    return (
                        <Route
                            key={`key_${parentPath}${route.path}`}
                            exact={route.exact}
                            path={parentPath + route.path}
                            render={({match: {url}}) => {
                                return renderRoutes(route.children, url);
                            }}
                        />
                    );
                } else {
                    return (
                        <Route
                            key={`key_${parentPath}${route.path}`}
                            exact={route.exact}
                            path={parentPath + route.path}
                            component={route.component}
                        />
                    );
                }
            })}
        </Switch>
    );
};

class AppRoutes extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return renderRoutes(routes);

    }
}

AppRoutes.propTypes = {};

export default AppRoutes;
