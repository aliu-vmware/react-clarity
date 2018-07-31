import React from "react";
import c from "classnames";

export default function ({className, ...props}) {
  return (<button className={c("btn", className)} {...props}/>);
}