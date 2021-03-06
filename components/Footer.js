import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
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
const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    margin-top: 20px;
    font-size: 14px;
`
const HomeLink = styled.a`
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
                <Link href="/" passHref>
                    <HomeLink>
                        <ColHeading>
                            Galina Zenin
                        </ColHeading>
                    </HomeLink>
                </Link>
            </HeadingColumn>
            <Column>
                <Heading>
                    Main
                </Heading>
                <Link href="/" passHref><StyledLink>Home</StyledLink></Link>
                <Link href="/about" passHref><StyledLink>About</StyledLink></Link>
                <Link href="/presentations" passHref><StyledLink>Presentations</StyledLink></Link>
                <Link href="/business" passHref><StyledLink>Business</StyledLink></Link>
                <Link href="/media" passHref><StyledLink>Media</StyledLink></Link>
                <Link href="/contact" passHref><StyledLink>Contact</StyledLink></Link>
            </Column>
            <Column>
                <Heading>
                    Other
                </Heading>
                <Link href="/presentations#PastPresentations" passHref><StyledLink>Past Presentations</StyledLink></Link>
                <Link href="/presentations#Testimonials" passHref><StyledLink>Testimonials</StyledLink></Link>
                <Link href="/media#Articles" passHref><StyledLink>Articles</StyledLink></Link>
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