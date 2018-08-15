import React from "react";
import c from "classnames";

export default function ({className, small, link, ...props}) {
  return (<button className={c("btn", {"btn-sm": small, "btn-link": link }, className)} {...props}/>);
}