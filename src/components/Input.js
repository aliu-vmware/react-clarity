import React from "react";
import c from "classnames";

export default function ({className, ...props}) {
  return (<input className={c("clr-input", className)} {...props}/>);
}