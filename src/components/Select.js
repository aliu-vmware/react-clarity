import React from "react";
import c from "classnames";

export default function ({className, children, ...props}) {
    return (
        <div className={c("select", className)}>
            <select {...props}>
                {children}
            </select>
        </div>
    );
}