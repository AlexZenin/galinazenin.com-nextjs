import React from 'react'
import styled from "styled-components";

const Container = styled.section`
    max-width: 1200px;
    width: auto;
    margin: 0 auto;
    padding: 0 20px;
`
const Section = styled.section`
    width: 100%;
    overflow: auto;
    background-color: ${props => props.color === "Grey"  
        ? props.theme.lightBackground 
        : "white" 
    };
`

export const SliceLayoutBackground = ({ children, color }) => (
    <Section color={color}>
        <Container>
            { children }
        </Container>
    </Section>
)

const SliceLayout = ({ children }) => (
        <Container>
            { children }
        </Container>
)

export default SliceLayout