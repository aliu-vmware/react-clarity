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
import Spinner from "./components/Spinner";
import Toggle from "./components/Toggle";
import ProgressBar from "./components/ProgressBar";
import Radio from "./components/Radio";
import Textarea from "./components/Textarea";
import Modal from "./components/Modal";
import Input from "./components/Input";
import Sidenav from "./components/Sidenav";
import ButtonGroup from "./components/ButtonGroup";
import Select from "./components/Select";
import Tooltip from "./components/Tooltip";
import { Dropdown, MenuItem }  from "./components/Dropdown";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { checkbox: true, toggle: true };
    }

    handleCheckbox = () => {
        this.setState({ checkbox: !this.state.checkbox });
    };

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    openModal = () => {
        this.setState({ modal: true });
    };

    closeModal = () => {
        this.setState({ modal: false });
    };

    render() {
        return (
            <div className="main-container">
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
                <div className="content-container">
                    <div className="content-area">
                        <Alert onClose={() => alert('closing!')}>This is info</Alert>
                        <Alert type="warning" small>This is small warning</Alert>

                        <Button>Sample Button</Button>

                        <Checkbox onChange={this.handleCheckbox} value="val" checked={this.state.checkbox}>Some Value</Checkbox>

                        <div className="centered">
                            <Card>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>Body</Card.Body>
                                <Card.Footer>Footer</Card.Footer>
                            </Card>
                        </div>

                        <Label>Inbox <Badge type="info">5</Badge></Label>

                        <div>
                            <Toggle onChange={this.handleToggle} value="val" checked={this.state.toggle}>Some Value</Toggle>
                        </div>

                        <div>
                            <Spinner size="small"/>
                        </div>

                        <div className="centered">
                            <ProgressBar max={100} value={50} displayValue="50%"/>
                        </div>

                        <div className="centered" style={{marginTop: 10}}>
                            <ProgressBar loop/>
                        </div>
                        <div style={{marginTop: 10}}>
                            <Radio name="radio" value="chicken" >Beef</Radio>
                            <Radio name="radio" value="beef">Chicken</Radio>
                            <Radio name="radio" value="lobster" disabled>Lobster</Radio>
                        </div>
                        <div>
                            <Textarea placeholder="Empty text area"/>
                        </div>
                        <div className="centered">
                            <Button onClick={this.openModal}>Open Modal</Button>
                            <Modal
                                open={this.state.modal}
                                title="Modal Title"
                                onHide={this.closeModal}
                                footer={<Button onClick={this.closeModal}>OK</Button>}>
                                This is some modal content!
                            </Modal>
                        </div>
                        <div>
                            <Input placeholder="A text input"/>
                        </div>
                        <div>
                            <ButtonGroup className="btn-primary">
                                <Button>Create</Button>
                                <Button>Favorite</Button>
                                <Button>Download</Button>
                            </ButtonGroup>
                        </div>
                        <div className="centered">
                            <Select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Select>
                        </div>
                        <div>
                            <Tooltip position="top right" icon="info-circle" iconSize="24">
                                I'm a tooltip!
                            </Tooltip>
                        </div>
                        <div>
                            <Dropdown title="Dropdown">
                                <MenuItem header>A header</MenuItem>
                                <MenuItem>Item 1</MenuItem>
                                <MenuItem>Item 2</MenuItem>
                                <MenuItem divider/>
                                <MenuItem onClick={() => alert('hi!')}>Item 3 with alert</MenuItem>
                            </Dropdown>
                        </div>
                    </div>
                    <Sidenav>
                        <Sidenav.Link active>Nav Element 1</Sidenav.Link>
                        <Sidenav.Link>Nav Element 2</Sidenav.Link>
                        <Sidenav.Section title="Collapsible Nav Element" collapsible>
                            <li><Sidenav.Link>Link 1</Sidenav.Link></li>
                            <li><Sidenav.Link>Link 2</Sidenav.Link></li>
                        </Sidenav.Section>
                        <Sidenav.Section title="Default Nav Element">
                            <li><Sidenav.Link>Link 1</Sidenav.Link></li>
                            <li><Sidenav.Link>Link 2</Sidenav.Link></li>
                            <li><Sidenav.Link active>Link 3</Sidenav.Link></li>
                            <li><Sidenav.Link>Link 4</Sidenav.Link></li>
                        </Sidenav.Section>
                    </Sidenav>
                </div>
            </div>
        );
    }
}

export default App;
