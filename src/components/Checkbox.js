import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.compId = getId();
    }

    render() {
        const {className, children, ...props} = this.props;
        return (
            <div className={c("checkbox", {disabled: props.disabled}, className)}>
                <input id={`Checkbox-${this.compId}`} type="checkbox" {...props}/>
                <label htmlFor={`Checkbox-${this.compId}`}>{children}</label>
            </div>
        );
    }
}

export default Checkbox;