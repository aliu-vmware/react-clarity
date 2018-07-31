import React from "react";
import c from "classnames";

export function Card({className, clickable, children, ...props}) {
    return (
        <div className={c("card", { clickable }, className)} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({className, children, ...props}) {
    return (
        <div className={c("card-header", className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({className, children, ...props}) {
    return (
        <div className={c("card-footer", className)} {...props}>
            {children}
        </div>
    );
}

export function CardBody({className, children, ...props}) {
    return (
        <div className={c("card-block", className)} {...props}>
            {children}
        </div>
    );
}

export default Object.assign(Card, { Header: CardHeader, Footer: CardFooter, Body: CardBody });