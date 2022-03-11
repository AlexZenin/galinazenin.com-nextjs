import React from 'react'
import styled from 'styled-components'

const TestimonialContainer = styled.div`
  padding: 20px;
`
const ProfileImg = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`
const Name = styled.h5`
  color: ${props => props.theme.articleSubheadingGrey};
  max-width: 100%;
  font-weight: 700;
  margin: 0px 0 8px 0;
  font-size: 15px;
`
const TestimonialBody = styled.p`
  position: relative;
  font-size: 18px;
  margin-bottom: 40px;
  font-style: italic;
  ::before {
    content: "“";
    position: absolute;
    opacity: .15;
    font-size: 100px;
    line-height: .85;
    top: -4rem;
    font-family: auto;
    font-style: normal;
  }
`
const PositionText = styled.p`
  color: ${props => props.theme.articleSubheadingGrey};
  font-size: 14px;
  margin: 0;
`
const ProfileContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: center;
`
const TestimonialCard = ({ data }) => {
   let {name, position, testimonial_body, profile_picture } = data 
    return (
    <TestimonialContainer>
        <TestimonialBody>{testimonial_body}</TestimonialBody>
        <ProfileContainer>
        <ProfileImg alt={profile_picture.alt} src={profile_picture.url} />
        <div style={{alignSelf: "center"}}>
            <Name>{name}</Name>
            <PositionText>{position}</PositionText>
        </div>
</ProfileContainer>
    </TestimonialContainer>
)}

export default TestimonialCard