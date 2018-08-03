import React from "react";
import c from "classnames";

import Button from "./Button";

const nestedPositionMap = {
    "left bottom": "left-bottom",
    "left top": "left-top",
    "right top": "right-top",
    "right bottom": "right-bottom"
};

const positionMap = {
    "top right": "top-right",
    "top left": "top-left",
    "bottom right": "bottom-right",
    "bottom left": "bottom-left",
    ...nestedPositionMap
};

const {Provider, Consumer} = React.createContext();

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.ctx = { handleClose: this.handleClose };
    }

    handleClick = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        const { className, position, children, title, ...props } = this.props;
        const { open } = this.state;
        console.log(this.ctx);
        return (
            <Provider value={this.ctx}>
                <div className={c("dropdown", {
                        open,
                        [positionMap[position]]: positionMap[position]
                })}>
                    <Button className={c("dropdown-toggle", className)} type="button"
                            onClick={this.handleClick}
                            {...props}>
                        {title}
                        <clr-icon shape="caret down"/>
                    </Button>
                    <div className="dropdown-menu">
                        {children}
                    </div>
                </div>
            </Provider>
        )
    }
}

export function MenuItem(props) {
    return (
        <Consumer>
            { (ctx) => {
                return <MenuItemImpl {...props} {...ctx} />;
            } }
        </Consumer>
    );
}

class MenuItemImpl extends React.Component {
    handleClick = (e) => {
        this.props.handleClose && this.props.handleClose();
        this.props.onClick && this.props.onClick(e);
    };

    render() {
        const {className, header, divider, handleClose, onClick, children, ...props} = this.props;
        if(header) {
            return <h4 className={c("dropdown-header", className)} {...props}>{children}</h4>;
        }
        if(divider) {
            return <div className={c("dropdown-divider", className)} {...props}/>;
        }
        return <Button type="button" className={c("dropdown-item", className)}
                       onClick={this.handleClick} {...props}>{children}</Button>;
    }
}

export default Dropdown;