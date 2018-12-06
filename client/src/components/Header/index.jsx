import "./index.css";

import React from "react";
import {inject, observer} from "mobx-react";
import {
    Button,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    UncontrolledDropdown
} from "reactstrap";
import {Link} from "react-router-dom";

@inject("authStore", "workerStore")
@observer
export default class Header extends React.Component {

    logOut() {
        this.props.authStore.logOut();
    }

    render() {
        const {user} = this.props.authStore;
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand tag={Link} to="/">
                        JetSpace
                    </NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto">
                            {user == null ?
                                <NavItem tag={Link} to="/login"><Button color={"danger"}>login</Button></NavItem> :
                                this.getUserDropdown(user)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    getUserDropdown(user) {
        const authority = user.role.type;
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret color="danger">
                    {user.username}
                </DropdownToggle>
                <DropdownMenu right>
                    {authority === "ADMIN" && <DropdownItem tag={Link} to="/workers">Workers</DropdownItem>}
                    {authority === "ADMIN" && <DropdownItem tag={Link} to="/workers/add">Add worker</DropdownItem>}
                    {authority === "ADMIN" && <DropdownItem>Add car</DropdownItem>}
                    {authority === "DISPATCHER" && <DropdownItem tag={Link} to="/booking">Orders</DropdownItem>}
                    {authority === "DRIVER" && <DropdownItem tag={Link} to="/orders">Orders</DropdownItem>}
                    <DropdownItem tag={Link} to="/login" onClick={() => this.logOut()}>
                        Log out
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}