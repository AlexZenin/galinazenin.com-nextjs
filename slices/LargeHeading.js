import React from 'react'
import styled from 'styled-components'
import { SliceLayoutBackground } from '../components/Layout/SliceLayout'

const Heading = styled.h1`
    color: ${props => props.theme.darkOrange};
    font-size: 2.5rem;
    padding: 0 20px;
    margin: 70px 0 0;
`

const LargeHeading = ({ data }) => (
    <SliceLayoutBackground color={data.primary.background1}>
        <Heading>
            { data.primary.heading }
        </Heading>
    </SliceLayoutBackground>
)

export default LargeHeading