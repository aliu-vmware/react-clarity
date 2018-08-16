import React from "react";
import c from "classnames";

export class VerticalNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
    }

    toggleCollapse = () => this.setState({collapsed : !this.state.collapsed});

    //We only care about direct children.
    inspectChildren() {
        let flags = {};
        for(let child of React.Children.toArray(this.props.children)) {
            if(child.type === VerticalNavGroup) {
                flags.hasGroups = true;
            }
            if(child.props.icon &&
                (child.type === VerticalNavLink ||
                child.type === VerticalNavGroup)) {
                flags.hasIcons = true;
            }
            if(flags.hasGroups && flags.hasIcons) {
                break;
            }
        }
        return flags;
    }

    render() {
        const { collapsible, children } = this.props;
        const { collapsed } = this.state;
        const { hasIcons, hasGroups } = this.inspectChildren();

        return (
            <div className={c("clr-vertical-nav", {
                "nav-trigger--bottom": collapsible === "bottom",
                "has-icons": hasIcons,
                "has-nav-groups": hasGroups,
                "is-collapsed": collapsed
            })}>
                {collapsible ?
                <button onClick={this.toggleCollapse}
                        className={c("nav-trigger", { "on-collapse": collapsed })}>
                    <clr-icon class="nav-trigger-icon" shape="angle-double" dir={collapsed ? "right" : "left"}/>
                </button> : null}

                <div className="nav-content">
                    {children}
                </div>
            </div>
        );
    }
}

const collapseStyles = {
    height: 0,
    overflowY: "hidden",
    visibility: "hidden"
};

class VerticalNavGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    toggleCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        const { active, icon, content, children, className, ...props} = this.props;
        const { collapsed } = this.state;
        return (
            <div className={c("nav-group", {active})} {...props}>
                <div className={c("nav-group-content", className)}>
                    <button className="nav-group-trigger" onClick={this.toggleCollapse}>
                        {icon ? <clr-icon class="nav-icon" shape={icon}/>: null }
                        <span className="nav-group-text">{content}</span>
                        <clr-icon class="nav-group-trigger-icon" shape="caret" dir={ collapsed ? "right" : "down"}/>
                    </button>
                </div>
                <div className="nav-group-children" style={collapsed ? collapseStyles : null}>{children}</div>
            </div>
        );
    }
}

export function VerticalNavLink({as: Component = "a", className, icon, active, children, ...props}) {
    return (
        <Component className={c("nav-link", {active}, className)} {...props}>
            {icon ? <clr-icon class="nav-icon" shape={icon}/>: null }
            <span className="nav-text">{children}</span>
        </Component>
    );
}

export default Object.assign(VerticalNav, { Link: VerticalNavLink, Group: VerticalNavGroup });