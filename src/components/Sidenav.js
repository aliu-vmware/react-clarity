import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";

export function Sidenav({className, children, ...props}) {
    return (
        <nav className={c("sidenav", className)}>
            <section className="sidenav-content" {...props}>
                {children}
            </section>
        </nav>
    )
}

export function SidenavLink({className, active, children, ...props}) {
    return (
        <a className={c("nav-link", {active}, className)} {...props}>{children}</a>
    );
}

export class SidenavSection extends React.Component {
    constructor(props) {
        super(props);
        this.id = getId();
    }
    render() {
        const {className, title, collapsible, children, ...props} = this.props;
        return (
            <section className={c("nav-group", {collapsible}, className)} {...props}>
                <input id={`SidenavSection-${this.id}`} type="checkbox"/>
                <label htmlFor={`SidenavSection-${this.id}`}>{title}</label>
                <ul className="nav-list">
                    {children}
                </ul>
            </section>
        );
    }
}

export default Object.assign(Sidenav, { Link: SidenavLink, Section: SidenavSection });