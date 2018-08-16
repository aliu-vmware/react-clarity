import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.compId = getId();
        this.ref = React.createRef();
    }

    componentDidMount() {
        const {indeterminate} = this.props;
        if(this.ref.current) {
            this.ref.current.indeterminate = indeterminate;
        }
    }

    componentDidUpdate() {
        const {indeterminate} = this.props;
        if(this.ref.current) {
            this.ref.current.indeterminate = indeterminate;
        }
    }

    render() {
        const {className, children, indeterminate, ...props} = this.props;
        return (
            <div className={c("checkbox", {disabled: props.disabled}, className)}>
                <input ref={this.ref} id={`Checkbox-${this.compId}`} type="checkbox" {...props}/>
                <label htmlFor={`Checkbox-${this.compId}`}>{children}</label>
            </div>
        );
    }
}

export default Checkbox;