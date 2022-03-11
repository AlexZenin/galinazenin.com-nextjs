import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';


const Footer = styled.footer`
    width: 100%;
    color: white;
    background-color: ${props => props.theme.darkOrange};
    padding: 70px 0;
`
const Container = styled.div`
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        grid-row-gap: 60px;
    }
    margin: 0px auto;
    padding: 0 20px;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    width: max-content;
    margin: 0 60px 0 0;
`
const HeadingColumn = styled(Column)`
    @media (max-width: 800px) {
        grid-area: 1/1/1/3;
    }
`
const ColHeading = styled.span`
    text-transform: uppercase;
    font-weight: 600;
`
const Heading = styled.span`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-top: 20px;
    font-size: 14px;
`
const HomeLink = styled(Link)`
    text-decoration: none;
    color: white;
`
const Social = styled.a`
    color: white;
    width: max-content;
`
const Socials = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 20px;
    & > * {
        margin-right: 8px;
    }
`
const StyledFacebook = styled(Facebook)`
  transition: all 0.2s linear;
  margin-left: -6px;
  :hover {
      color: #ffffffcc;
  }
`
const StyledYoutube = styled(Youtube)`
  transition: all 0.2s linear;
  margin-right: 4px;
  margin-bottom: -3px;
  :hover {
      color: #ffffffcc;
  }
`
const StyledLinkedin = styled(Linkedin)`
  transition: all 0.2s linear;
  margin-right: 4px;
  :hover {
      color: #ffffffcc;
  }
`

const FooterComponent = props => (
    <Footer>
        <Container>
            <HeadingColumn>
                <HomeLink to="/">
                    <ColHeading>
                        Galina Zenin
                    </ColHeading>
                </HomeLink>
            </HeadingColumn>
            <Column>
                <Heading>
                    Main
                </Heading>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/presentations">Presentations</StyledLink>
                <StyledLink to="/business">Business</StyledLink>
                <StyledLink to="/media">Media</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </Column>
            <Column>
                <Heading>
                    Other
                </Heading>
                <StyledLink to="/presentations#PastPresentations">Past Presentations</StyledLink>
                <StyledLink to="/presentations#Testimonials">Testimonials</StyledLink>
                <StyledLink to="/media#Articles">Articles</StyledLink>
            </Column>
            <Column>
                <Heading>
                    Socials
                </Heading>
                <Socials>
                    <Social 
                        href="https://facebook.com/galina.zenin" 
                        target="_blank">
                        <StyledFacebook size="25px" />
                    </Social>
                    <Social 
                        href="https://www.linkedin.com/in/galinazenin/" 
                        target="_blank">
                        <StyledLinkedin size="25px" />
                    </Social>
                    <Social 
                        href="https://www.youtube.com/user/Bonkersthemonkey" 
                        target="_blank">
                        <StyledYoutube size="25px" />
                    </Social>
                </Socials>
            </Column>
        </Container>
    </Footer>
)

export default FooterComponent