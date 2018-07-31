import React, { Component } from 'react';
import "@clr/icons";

import "@clr/ui/clr-ui.css";
import "@clr/icons/clr-icons.css";

import './App.css';

import Alert from "./components/Alert";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Label from "./components/Label";
import Header from "./components/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { checkbox: true };
    }

    handleCheckbox = () => {
        console.log("handleCheckbox fired");
        this.setState({ checkbox: !this.state.checkbox });
    };

    render() {
        return (
            <div className="App">
                <Header>
                    <Header.Branding>
                        <a className="nav-link">
                            <clr-icon shape="vm-bug"/>
                            <span className="title">Clarity React</span>
                        </a>
                    </Header.Branding>
                    <Header.Nav>
                        <Header.NavIcon icon="cloud"/>
                        <Header.NavIcon icon="folder"/>
                    </Header.Nav>
                </Header>

                <div className="content">
                    <Alert>This is info</Alert>
                    <Alert type="warning" small={true} closeable={false}>This is warning</Alert>

                    <Button>Sample Button</Button>

                    <Checkbox onChange={this.handleCheckbox} value="val" checked={this.state.checkbox}>Some Value</Checkbox>

                    <div>
                        <Card style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>Body</Card.Body>
                            <Card.Footer>Footer</Card.Footer>
                        </Card>
                    </div>

                    <Label>Inbox <Badge type="info">5</Badge></Label>
                </div>
            </div>
        );
    }
}

export default App;
