import React from "react";
import c from "classnames";

function Input({className, ...props}, ref) {
  return (<input ref={ref} className={c("clr-input", className)} {...props}/>);
}

export default React.forwardRef(Input);