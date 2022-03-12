import React from 'react'
import styled from 'styled-components'
import { ButtonFilled, ButtonOutline } from '../components/Buttons'
import { SliceLayoutBackground } from '../components/Layout/SliceLayout'

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    padding: 30px 0;
    > a {
        margin: 0 15px;
    }
`

const CTAButtons = ({ data }) => (
    <SliceLayoutBackground color={data.primary.background1} >
        <Flex>
            {data.items.map(button => (
                button.filled === "Filled" 
                ? (
                    <ButtonFilled 
                        to={button.url ? button.url.slug : "/contact"} 
                        text={button.text} 
                    />
                ) : (
                    <ButtonOutline 
                        to={button.url ? button.url.slug : "/contact"} 
                        text={button.text} 
                    />
                )
            ))}
        </Flex>
    </SliceLayoutBackground>
)

export default CTAButtons