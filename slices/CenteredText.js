import React from 'react'
import styled from 'styled-components'
import { PrismicRichText } from '@prismicio/react'
import { SliceLayoutBackground } from '../components/Layout/SliceLayout'

const Div = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 80px;

    ul {
        list-style: none;
    }

    li {
        color: #646464;
    }

    ul li::before {
        content: "\\2022";
        color: ${props => props.theme.darkOrange};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
`

function CenteredText({ data }) {
    return (
        <SliceLayoutBackground color={data.primary.background1}>
            <Div>
                <PrismicRichText field={data.primary.text} />
            </Div> 
        </SliceLayoutBackground>
    )
}

export default CenteredText