import React, {Component} from "react";
import GlobalLoading from "../components/GlobalLoading";

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        state = {
            component: null
        };

        async componentDidMount() {
            this.mounted = true;
            const {default: Component} = await importComponent();
            if (this.mounted) {
                /*eslint-disable react/no-did-mount-set-state*/
                this.setState({
                    component: <Component {...this.props} />
                });
            }
        }

        componentWillUnmount() {
            this.mounted = false;
        }

        render() {
            const Component = this.state.component || <GlobalLoading/>;
            return (
                <div>
                    {Component}
                </div>

            );
        }
    }

    return AsyncFunc;
}
