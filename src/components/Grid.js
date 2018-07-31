import React from "react";
import c from "classnames";

export function Row({className, children, ...props}) {
    return (
        <div className={c("row", className)}>
            {children}
        </div>
    );
}

export function Col({className, children, xs, sm, md, lg, xl, ...props}) {
    return (
        <div className={c({
            "col-xs": !(xs || sm || md || lg || xl),
            ["col-xs-" + xs]: xs,
            ["col-sm-" + sm]: sm,
            ["col-md-" + md]: md,
            ["col-lg-" + lg]: lg,
            ["col-xl-" + xl]: xl,
        })} {...props}>
            {children}
        </div>
    );
}

export default { Row, Col };