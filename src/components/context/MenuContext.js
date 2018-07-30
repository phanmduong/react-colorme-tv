import React, {Component} from "react";

const MenuContext = React.createContext();

export const MenuProvider = MenuContext.Provider;

export function withMenu() {
    return WrappedComponent => {
        class HeaderConsumer extends Component {
            menu = null;

            componentDidMount() {
                if (this.menu) {
                    this.menu.onUpdateMenu(this.props.menu);
                }
            }

            render() {
                return (
                    <MenuContext.Consumer>
                        {
                            menu => {
                                this.menu = menu;
                                return (
                                    <WrappedComponent {...this.props}/>
                                );
                            }
                        }
                    </MenuContext.Consumer>
                );
            }
        }

        return HeaderConsumer;
    };
}
