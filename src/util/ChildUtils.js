import React from "react";


export function mapValidChildren(children, fn = x => x) {
    return React.Children.map(children, child => {
        if(!React.isValidElement(child)) {
            return child;
        }
        return fn(child);
    });
}