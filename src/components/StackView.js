import React from "react";
import c from "classnames";

import Button from "./Button";

export function StackView({className, title, actions, children, ...props}) {
    return(
        <div>
            { title || actions ? <h4 className="stack-header">
                { title ? <span className="stack-title">{title}</span> : null }
                { actions ? <span className="stack-actions">{actions}</span> : null }
                </h4> : null}
            <dl className={c("stack-view", className)}>
                {children}
            </dl>
        </div>
    );
}

export function StackButton({className, children, ...props}) {
    return (
        <Button className={c("stack-action", className)} small link {...props}>{children}</Button>
    );
}

export class StackBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    toggle = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { label, value, changed, children } = this.props;
        const { expanded } = this.state;
        return (
            <div className={c("stack-block", {
                "stack-block-changed": !!changed,
                "stack-block-expandable": !!children,
                "stack-block-expanded": !!children && expanded
            })}>
                <dt className="stack-block-label" onClick={this.toggle}>{label}</dt>
                <dd className="stack-block-content">{value}</dd>
                { children && expanded ? <div className="stack-children">
                    {children}
                </div> : null }
            </div>
        )
    }
}

export default { StackView, StackBlock, StackButton };