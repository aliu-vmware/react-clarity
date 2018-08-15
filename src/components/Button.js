import React from "react";
import c from "classnames";

function Button ({className, small, link, ...props}, ref) {
  return (<button ref={ref} className={c("btn", {"btn-sm": small, "btn-link": link }, className)} {...props}/>);
}

export default React.forwardRef(Button);