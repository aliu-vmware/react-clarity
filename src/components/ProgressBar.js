import React from "react";
import c from "classnames";

function ProgressBar({className, color, flash, fade, max, value, loop, displayValue, ...props}) {
    return(
        <div className={c("progress", {
            labeled: displayValue && displayValue !== 0,
            loop,
            "flash-danger": flash === "danger",
            flash: flash !== "danger",
            fade,
            [color]: color
        }, className)} {...props}>
            <progress max={max} value={value}></progress>
            <span>{displayValue}</span>
        </div>
    );
}

export default ProgressBar;