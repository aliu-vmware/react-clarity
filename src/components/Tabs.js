import React from "react";
import c from "classnames";
import getId from "../util/IdGenerator";
import { mapValidChildren } from "../util/ChildUtils";

export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.id = getId();
        if(!this.props.activeKey) {
            this.state.selectedTab = this.getDefaultTabKey();
        }
    }

    //TODO: figure out how uncontrollable works, and switch to it.
    getDefaultTabKey() {
        const { activeKey, children, defaultTab } = this.props;
        if(activeKey)
            return activeKey;
        if(defaultTab)
            return defaultTab;
        let eventKey = null;
        React.Children.forEach(children, child => {
            if(eventKey === null && String(child.props.eventKey)) {
                eventKey = String(child.props.eventKey);
            }
        });
        return eventKey;
    }

    isActive = eventKey => this.props.activeKey === eventKey || this.state.selectedTab === eventKey;

    selectTab = e => {
        let eventKey = e.target.getAttribute("aria-controls");
        if(!this.props.activeKey) {
            this.setState({ selectedTab: eventKey })
        }
        this.props.onSelect && this.props.onSelect(eventKey);
    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <ul className="nav" role="tablist">
                    {mapValidChildren(children, child => {
                        const { eventKey } = child.props;
                        const active = this.isActive(eventKey);
                        return (
                            <li role="presentation" className="nav-item">
                                <button id={`TabControl-${this.id}-${eventKey}`}
                                        className={c("btn btn-link nav-link", { active })}
                                        aria-selected={active}
                                        aria-controls={eventKey}
                                        role="tab"
                                        onClick={this.selectTab}
                                        type="button">
                                    {child.props.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {mapValidChildren(children, child => {
                    const childProps = {...child.props};

                    childProps["aria-labelledby"] = `TabControl-${this.id}-${childProps.eventKey}`;

                    delete childProps.title;
                    delete childProps.disabled;

                    return <TabPane {...childProps} active={this.isActive(childProps.eventKey)}/>;
                })}
            </div>
        );
    };
}

function TabPane({children, active, eventKey, ...props}) {
    return (
        <section role="tabpanel" aria-hidden={!active} {...props}>
            {children}
        </section>
    );
}

export function Tab({children, eventKey, title}) {
    return children;
}

export default Tabs;