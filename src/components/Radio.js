import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.compId = getId();
    }

    render() {
        const {className, children, ...props} = this.props;
        return (
            <div className={c("radio", {disabled: props.disabled}, className)}>
                <input id={`Radio-${this.compId}`} type="radio" {...props}/>
                <label htmlFor={`Radio-${this.compId}`}>{children}</label>
            </div>
        );
    }
}

export default Radio;