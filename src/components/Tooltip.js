import React from "react";
import c from "classnames";

const positionMap = {
    "top right": "top-right",
    "top left": "top-left",
    "bottom right": "bottom-right",
    "bottom left": "bottom-left",
    "right": "right",
    "left": "left"
};

const sizeMap = {
    "extra small": "xs",
    "small": "sm",
    "medium": "md",
    "large": "lg"
}
function Tooltip({className, position, size, icon, iconSize, children, ...props}) {
    return(
        <a role="tooltip" aria-haspopup="true" className={c("tooltip",{
            ["tooltip-" + size]: sizeMap[size],
            ["tooltip-" + position]: positionMap[position]
        })}>
            <clr-icon shape={icon} size={iconSize}></clr-icon>
            <span className={c("tooltip-content", className)}>{children}</span>
        </a>
    );
}

export default Tooltip;