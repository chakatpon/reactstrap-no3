import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar,
         Container,
         NavbarBrand,
         NavbarToggler,
         Collapse, 
         Nav, 
         NavItem,
         UncontrolledDropdown, 
         DropdownToggle,
         DropdownMenu,
         DropdownItem, 
         } from 'reactstrap';

import { toggleNavbar } from '../actions';

class MainNavbar extends React.Component {
    render() {
        return(
            <div>
                <Navbar  color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand fixed="top" href="/app/dashboard" >Chakatpon Khunthong</NavbarBrand>
                        <NavbarToggler onClick={() => this.props.toggleNavbar(this.props.navOpen)}/>
                        <Collapse isOpen={this.props.navOpen} navbar>
                            <Nav  navbar>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/app/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/app/posts">Posts</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/app/categories">Categories</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/app/users">Users</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar className="ml-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        <i class="fas fa-user"></i> Welcome  
                                    </DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
                                          <i class="fas fa-user-circle"></i> Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                          <i class="fas fa-cog"></i> Settings
                                        </DropdownItem> 
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/app/login">
                                        <i class="fas fa-user-times"></i> Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        navOpen : state.navOpen
    }
}

export default connect(mapStateToProps,{ toggleNavbar })(MainNavbar);