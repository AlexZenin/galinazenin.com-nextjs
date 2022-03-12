import React from 'react'
import styled from "styled-components";
import { PrismicRichText } from '@prismicio/react'
import SliceLayout from "../components/Layout/SliceLayout"
import { ButtonOutline } from '../components/Buttons';

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
    }
    padding: 20px 0;
    width: fit-content;
    margin: 0 auto;
`
const Description = styled.div`
    max-width: 400px;
    margin: 0 30px;
    font-size: 18px;
    @media (max-width: 768px) {
        margin: 0;
    }
`
const ButtonPosition = styled.div`
    @media (max-width: 768px) {
        width: fit-content;
        margin: 0 auto;
    }
`
const Img = styled.img `
    max-height: 300px;
    max-width: 100%;
    object-fit: cover;
`

const HeadingImageCTA = (props) => {
    const { description, cta_text, image } = props.data
    return (
        <SliceLayout>
        <Section>
            <Img src={image.url} alt={image.alt} />
            <Description>
                <div>
                    <PrismicRichText field={description} />
                </div>
                <ButtonPosition>
                    <ButtonOutline text={cta_text} />
                </ButtonPosition>
            </Description>
        </Section>
        </SliceLayout>
    )
}

export default HeadingImageCTA