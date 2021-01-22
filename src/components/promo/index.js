import React, { useState } from 'react'
import {
    PromoContainer,
    NavLink,
    Background,
    VideoBg,
    PromoContent,
    Header1,
    PromoP,
    PromoButtonWrapper,
    ArrowForward,
    ArrowRight
} from './PromoSectionStyled'

import { Button } from '../basestyle/ButtonElements'
import video from '../../video/run.mp4'

const PromoSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <PromoContainer>
            <Background>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </Background>
            <PromoContent>
                <Header1>Big sale for all Man runners!</Header1>
                <PromoP>
                    Go to get promo code for 40% discout for runner's accessories.
               </PromoP>
                <PromoButtonWrapper>

                    <NavLink onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' to="/man"> Get started {hover ? <ArrowForward /> : <ArrowRight></ArrowRight>}</NavLink>

                </PromoButtonWrapper>
            </PromoContent>
        </PromoContainer>
    )
}

export default PromoSection;
