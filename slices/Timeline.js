import React from 'react'
import styled from 'styled-components'
import SliceLayout from '../components/Layout/SliceLayout'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 60px;
`
const SlimContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
const Description = styled.p`
  max-width: 55ch;
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 20px;
  @media (max-width: 600px) {
      flex-direction: column;
      padding-bottom: 0;
  }
`
const KeyImg = styled.img`
    margin: -20px;
    height: 230px;
    width: 230px;
    object-fit: contain;
    align-self: center;
`
const Img = styled.img`
    margin: 10px -20px;
    height: 230px;
    width: 230px;
    object-fit: contain;
`
const Subheading = styled.h5`
    text-transform: uppercase;
    max-width: 700px;
    margin: 0 auto;
    padding: 0px 0 10px;
    color: ${props => props.theme.darkOrange};
`

const Timeline = ({ data }) => {
    const items = data.primary.timeline_link.data.achievements
    const { heading, description, key_achivement} = data.primary.timeline_link.data
    return (
        <SliceLayout>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <SlimContainer>
        <Subheading>{heading}</Subheading>
        <Flex>
            <Description>{description}</Description>
            <KeyImg src={key_achivement.url} alt={key_achivement.alt} />
        </Flex>
        </SlimContainer>
        <Container>
        {items.map(({ image }) => (
                    <Img src={image.url} alt={image.alt} />
        ))}
        </Container>
</SliceLayout>
    )
}

export default Timeline