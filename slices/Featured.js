import React from 'react'
import styled from "styled-components";
import { Subheading } from "../components/Headings";

const Section = styled.section`
    width: 100%;
    margin-top: 80px;
`
const Img = styled.img`
    height: 50px;
    margin: 20px 60px;
    object-fit: cover;
    opacity: 80%;
    transition: all 0.2s ease-in-out;
    :hover {
        filter: none;
        opacity: 100%;
    }
    @media(max-width: 768px){
        margin: 30px;
    }
`
const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 60px;
`

const Featured = ({ data }) => {
    let { primary, items } = data
    return (
        <Section>
            <Subheading>
                { primary.heading1 }
            </Subheading>
            <Logos>
                { items.map(item => (
                    <Img 
                        key={item.logo.alt} 
                        src={item.logo.url} 
                        alt={item.logo.alt} 
                    />
                ))}
            </Logos>
        </Section>
    )
}

export default Featured