import React, {Component} from "react";

const HeaderContext = React.createContext();

export const HeaderProvider = HeaderContext.Provider;

export function withHeader() {
    return WrappedComponent => {
        class HeaderConsumer extends Component {
            header = null;

            componentDidMount() {
                if (this.header) {
                    this.header.onChangeTitle(this.props.title);
                }
            }

            render() {
                return (
                    <HeaderContext.Consumer>
                        {header => {
                            this.header = header;
                            return (
                                <WrappedComponent {...this.props}/>
                            );
                        }}
                    </HeaderContext.Consumer>
                );
            }
        }

        return HeaderConsumer;
    };
}
