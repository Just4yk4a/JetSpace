import React from "react";
import {inject, observer} from "mobx-react";
import {
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

@inject("authStore")
@observer
export default class Header extends React.Component {

    logOut() {
        this.props.authStore.logOut();
    }

    render() {
        const {user} = this.props.authStore;
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">
                        JetSpace
                    </NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto">
                            {user == null ? <NavItem tag={Link} to="/login">Login</NavItem> :
                                this.getUserDropdown(user)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    getUserDropdown(user) {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {user.username}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => this.logOut()}>
                        Log out
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}