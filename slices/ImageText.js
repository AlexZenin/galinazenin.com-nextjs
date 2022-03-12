import React from 'react'
import styled from "styled-components";
import { PrismicRichText } from '@prismicio/react'
import SliceLayout from "../components/Layout/SliceLayout"
import { SubheadingOrange } from "../components/Headings"

const Section = styled.section`
    padding: 70px 0;
    display: flex;
    flex-direction: ${props => props.direction === "Right" 
        ? "row" 
        : "row-reverse" };
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
const Description = styled.div`
    max-width: 700px;
    margin: 0 20px;
    @media (max-width: 768px) {
        margin: 0;
    }
`
const Img = styled.img `
    max-height: 500px;
    max-width: 100%;
    object-fit: contain;
    padding: 0 20px;
`

const ImageText = (props) => {
    const { primary } = props.data
    return (
        <SliceLayout>
        <Section direction={primary.image_alignment || "Right"} >
            <Description>
                { primary.heading1 && 
                    <SubheadingOrange>
                        { primary.heading1 }
                    </SubheadingOrange>
                }
                <div>
                    <PrismicRichText field={primary.text} />
                </div>
            </Description>
            <Img src={primary.image.url} alt={primary.image.alt} />
        </Section>
        </SliceLayout>
    )
}

export default ImageText