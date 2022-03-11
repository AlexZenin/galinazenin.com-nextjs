import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled.p`
    display: inline-block;
    padding: 12px 34px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
    text-align: center;
    border: 2px solid ${props => props.theme.darkOrange};
`
const Outline = styled(Button)`
    color: ${props => props.theme.darkOrange};
    background-color: transparent;
    :hover {
        background-color: ${props => props.theme.darkOrange};
        color: white;
    }
`
const Filled = styled(Button)`
    color: white;
    background-color: ${props => props.theme.darkOrange};
    :hover {
        background-color: transparent;
        color: ${props => props.theme.darkOrange};
    }
`

export const ButtonOutline = (props) => (
    <Link to={ props.to || "/" }>
        <Outline>
            { props.text }
        </Outline>
    </Link>
)

export const ButtonFilled = (props) => (
    <Link to={ props.to || "/"  }>
        <Filled>
            { props.text }
        </Filled>
    </Link>
)