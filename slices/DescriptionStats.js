import React from 'react'
import styled from 'styled-components'
import { PrismicRichText } from '@prismicio/react'
import SliceLayout from '../components/Layout/SliceLayout'
import { SubheadingOrange } from '../components/Headings'

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
    padding: 20px 0 70px;
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
const Left = styled.div`
  margin: 0 auto;
`
const Div = styled.div`
  max-width: 600px;
`
const DescriptionSubheading = styled(SubheadingOrange)`
  padding: 0px 0 30px;
`

const DescriptionStats = (props) => {
    const { primary, items } = props.data
    return (
        <SliceLayout>
            <Section>
                <Left>
                    <DescriptionSubheading align="left">
                        {primary.heading}
                    </DescriptionSubheading>
                    <Div>
                        <PrismicRichText field={primary.description} />
                    </Div>
                </Left>
                <StatGrid>
                    {items.map(item => (
                        <Stat stat={item.key_value} subheading={item.subheading} />
                    ))}
                </StatGrid>
            </Section>
        </SliceLayout>
    )
}

export default DescriptionStats