import React from "react";
import c from "classnames";

let id = 0;

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.compId = id++;
    }

    render() {
        const {className, children, ...props} = this.props;
        return (
            <div className={c("checkbox", className)}>
                <input id={`Checkbox-${this.compId}`} type="checkbox" {...props}/>
                <label htmlFor={`Checkbox-${this.compId}`}>{children}</label>
            </div>
        );
    }
}

export default Checkbox;