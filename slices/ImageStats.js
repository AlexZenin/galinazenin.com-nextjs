import React from 'react'
import styled from 'styled-components'
import { SliceLayoutBackground } from '../components/Layout/SliceLayout'

// Stat Styling

const StatLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const KeyValue = styled.h1`
    color: ${props => props.theme.darkOrange};
    margin: 0;
    font-weight: 600;
    font-size: 2.2rem;
`
const Subheading = styled.p`
    text-transform: uppercase;
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
`
const Stat = (props) => (
    <StatLayout>
        <KeyValue>{props.stat}</KeyValue>
        <Subheading>{props.subheading}</Subheading>
    </StatLayout>
)

// Main component

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 90px 0;
    flex-wrap: wrap;
`
const StatGrid = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 50px 20px;
    font-size: 18px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    grid-column-gap: 100px;
    grid-row-gap: 70px;
    height: fit-content;
    @media(max-width: 768px) {
        grid-gap: 60px;
    }
`
const Img = styled.img `
    max-height: 400px;
    max-width: 100%;
    object-fit: contain;
    margin: 0 auto;
`

const ImageStats = (props) => {
    const { primary, items } = props.data
    return (
        <SliceLayoutBackground color={primary.background1}>
        <Section>
            <Img src={primary.image.url} alt={primary.image.alt}/>
            <StatGrid>
                {items.map(item => (
                    <Stat stat={item.key_value} subheading={item.subheading} />
                ))}
            </StatGrid>
        </Section>
        </SliceLayoutBackground>
    )
}

export default ImageStats