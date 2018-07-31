import React from "react";
import c from "classnames";

function Label({className, type, children, ...props}) {
    return(
        <span className={c("label", {["label-" + type]: type, clickable: props.onClick})}>
            {children}
        </span>
    );
}

export default Label;