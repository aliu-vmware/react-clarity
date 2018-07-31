import React from "react";
import c from "classnames";

const sizeMap = {
    "small": "sm",
    "medium": "md",
    "large": "lg"
};

function Spinner({className, inline, inverse, size, ...props}) {
    return(
        <span className={c("spinner", {
            ["spinner-" + sizeMap[size]]: size,
            "spinner-inverse": inverse,
            "spinner-inline": inline})}
              {...props}/>
    );
}

export default Spinner;