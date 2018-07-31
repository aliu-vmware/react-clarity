import React from "react";
import c from "classnames";

export default function ({className, ...props}) {
    return (<textarea className={c("clr-textarea", className)} {...props}></textarea>);
}