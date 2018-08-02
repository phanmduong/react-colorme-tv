import React from "react";
import {Route, Switch} from "react-router-dom";
import homeRoutes from "./homeRoutes";
import salesRoutes from "./salesRoutes";
import classRoutes from "./classRoutes";

const routes = {homeRoutes, salesRoutes, classRoutes};

const renderRoutes = (routes, parentPath = "") => {
    return (
        <Switch>
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
                    const Component = route.component;
                    const menu = routes.filter((item) => item.isMenu);
                    return (
                        <Route
                            key={`key_${parentPath}${route.path}`}
                            exact={route.exact}
                            path={parentPath + route.path}
                            render={(props) => (<Component {...props} title={route.title} menu={menu}/>)}
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
        return (
            <div>
                {
                    Object.values(routes).map((route, index) => {
                        return (
                            <Switch key={index}>
                                {renderRoutes(route)}
                            </Switch>
                        );
                    })
                }
            </div>
        );

    }
}

AppRoutes.propTypes = {};

export default AppRoutes;
