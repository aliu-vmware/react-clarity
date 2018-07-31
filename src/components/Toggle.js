import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.compId = getId();
    }

    render() {
        const {className, children, ...props} = this.props;
        return (
            <div className={c("toggle-switch", className)}>
                <input id={`Checkbox-${this.compId}`} type="checkbox" {...props}/>
                <label htmlFor={`Checkbox-${this.compId}`}>{children}</label>
            </div>
        );
    }
}

export default Toggle;