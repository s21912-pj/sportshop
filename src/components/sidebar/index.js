import React from 'react'
import {
    SideBarContainer,
    SideBarLink,
    Icon,
    SideBarRoute,
    CloseIcon,
    SideBarArea,
    SideBarMenu,
    SideBtnWrap
} from './SideBarElements'


const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarArea>
                <SideBarMenu>
                   {/* <SideBarLink to="sports" onClick={toggle}>
                        Sports
                    </SideBarLink>*/}
                    <SideBarLink to="woman" onClick={toggle}>
                        Woman
                        </SideBarLink>
                    <SideBarLink to="man" onClick={toggle}>
                        Man
                        </SideBarLink>
                    <SideBarLink to="kids" onClick={toggle}>
                        Kids
                        </SideBarLink>
                    <SideBarLink to="cart" onClick={toggle}>
                        Cart
                        </SideBarLink>
                    <SideBarLink to="rm" onClick={toggle}>
                        Remove
                    </SideBarLink>
                </SideBarMenu>
           {/*<SideBtnWrap>
                    <SideBarRoute to="/signin">Sign In</SideBarRoute>
           </SideBtnWrap> */}
            </SideBarArea>
        </SideBarContainer>
    )
}


export default SideBar;