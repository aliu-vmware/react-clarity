import React from "react";
import c from "classnames";

//const validTypes = ["info", "warning", "success", "danger"];

function Badge({className, type, children, ...props}) {
    return (
        <span className={c("badge", {["badge-" + type]: type}, className)}>{children}</span>
    );
}
export default Badge;