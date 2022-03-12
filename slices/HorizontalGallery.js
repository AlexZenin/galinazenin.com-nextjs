import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    padding-top: 30px;
    max-height: 80vh;
    max-width: 100%;
    overflow-x: scroll;
    position: relative;
    ::-webkit-scrollbar {    
      display: none;
    }
`
const Img = styled.img`
  max-height: 300px;
  object-fit: contain;
`
const Container = styled.div`
  max-height: 600px;
  padding: 20px;
  :first-child {
    margin-left: calc(50% - 600px);
  }
  @media (max-width: 1200px) {
    :first-child {
      margin-left: 0;
    } 
  }
`

const HorizontalGallery = ({ data }) => (
    <Flex>
        { data.items.map(({image}) => (
            <Container>
                <Img src={image.url} alt={image.alt} />
            </Container>
        ))}
    </Flex>
)

export default HorizontalGallery