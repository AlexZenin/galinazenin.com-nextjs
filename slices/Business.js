import React from 'react'
import styled from 'styled-components'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import SliceLayout from '../components/Layout/SliceLayout'

const Subheading = styled.h5`
    text-transform: uppercase;
    color: ${props => props.theme.darkOrange};
`
const Div = styled.div`

`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  grid-template-rows: auto;
  grid-column-gap: 4%;
  grid-template-areas: ${
    props => props.left 
    ? "'description image'"
    : "'image description'" };
  place-items: center;
  padding: 60px 0 60px;
  border-bottom: 1px solid #88888833;
  @media (max-width: 800px) {
      display: flex;
      flex-direction: column-reverse;
  }
`
const Content = styled.div`
  padding: 20px;
  grid-area: description;
`
const P = styled.p`
  margin: 30px 0 0;
  width: max-content;
`
const Img = styled.img`
  max-width: 100%;
  padding: 20px;
  object-fit: cover;
  box-sizing: border-box;
  grid-area: image;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.darkOrange};
  font-size: 15px;
  margin-top: 15px;
`

const Business = (data, left) => {
    return(
        <Grid left={left}>
            <Content>
                <Subheading>{data.name}</Subheading>
                <Div>
                  <PrismicRichText field={data.description} /> 
                </Div>
                <P>
                <Link href={`/business/${data.business.slug}`} passHref>
                  <StyledLink>
                      Find out more
                  </StyledLink>
                </Link>
                </P>
            </Content>
            <Img src={data.image.url} alt={data.image.alt} />
        </Grid>
    )
}

const BusinessComponent = ({ data }) => (
    <SliceLayout>
        {data.items.map((item, index) => Business(item, (index + 1) % 2))}
    </SliceLayout>
)

export default BusinessComponent