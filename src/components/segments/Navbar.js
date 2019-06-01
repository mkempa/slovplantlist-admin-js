import React from "react";
import { connect } from 'react-redux';
import {
    Nav, Navbar, NavItem, Glyphicon
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const CNavbar = (props) => {

    return (
        <div id="navigation">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        SlovPlantList Admin
                </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/checklist">
                            Checklist
                        </NavItem>
                        <NavItem eventKey={2} href="/genera">
                            Genera
                        </NavItem>
                        <NavItem eventKey={3} href="/families-apg">
                            Families APG4
                        </NavItem>
                        <NavItem eventKey={4} href="/families">
                            Families
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/users">
                            Users
                        </NavItem>
                        <LinkContainer to="/logout">
                            <NavItem eventKey={2}>
                                <Glyphicon glyph="log-out" /> Logout
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Text pullRight style={{"margin-right": "15px"}}>
                        Logged as: <strong>{props.user.role.toUpperCase()}</strong>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(CNavbar);