import React from 'react'
import { Nav, NavLink, NavLogo, NavBarContainer, NavItem, NavMenu, MobileIcon,NavBtn, NavBtnLink } from './StyledElement'
import logo from './../../images/sportlogo.png'
import { FaBars } from 'react-icons/fa'
import { Switch,Route } from 'react-router-dom'
import Sports from '../../pages/Sports'

const NavigationBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>SportShop</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />                  
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/woman">
                                Woman
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/man">
                                Man
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/kids">
                                Kids
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/cart">
                                Cart
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/product/add">
                                Add Product
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/rm">
                                Remove
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavigationBar
