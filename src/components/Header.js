import React from "react";
import c from "classnames";

const colorNumbers = {
    "brown": 1,
    "gray": 2,
    "purple": 3,
    "blue": 4,
    "dark blue": 5,
    "navy": 6,
    "charcoal": 7
};

export function Header({className, color, children, ...props}) {
    return (
        <header className={c({
            "header-4": !color,
            ["header-" + colorNumbers[color]]: color
        }, className)}>
            {children}
        </header>
    )
}

export function HeaderBranding({className, children, ...props}) {
    return (
        <div className={c("branding", className)}>
            {children}
        </div>
    )
}

export function HeaderNav({className, children, ...props}) {
    return (
        <div className={c("header-nav", className)}>
            {children}
        </div>
    )
}

export function HeaderActions({className, children, ...props}) {
    return (
        <div className={c("header-actions", className)}>
            {children}
        </div>
    )
}

export function HeaderSearch({className, children, ...props}) {
    return (
        <div className={c("header-actions", className)}>
            {children}
        </div>
    )
}

export function HeaderNavIcon({className, children, href, icon, ...props}) {
    return (
        <a href={href} className={c("nav-link nav-icon", className)} {...props}>
            <clr-icon shape={icon}></clr-icon>
        </a>
    );
}

export default Object.assign(Header, {
    Branding: HeaderBranding,
    Nav: HeaderNav,
    Actions: HeaderActions,
    Search: HeaderSearch,
    NavIcon: HeaderNavIcon
});