import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Subheading} from '../components/Headings'
import { ArrowRight } from "@styled-icons/feather/ArrowRight"

const Section = styled.section`
    width: 100%;
    background-color: ${props => props.theme.lightBackground};
    margin: 0;
    padding: 20px 0 80px;
`
const Heading = styled.h1`
    width: max-content;
    color: ${props => props.theme.darkOrange};
    font-weight: 300;
    font-size: 34px;
`
const StyledLink = styled.a`
  text-decoration: none;
  width: max-content;
  margin: 0 auto;
  padding-left: 48px;
  display: flex;
  align-items: center;
  svg {
        position: relative;
        left: 0;
        transition: all 0.2s ease-in-out;
    }
    :hover {
        svg {
            left: 5px;
        }
    }
`
const A = styled.a`
    text-decoration: none;
    width: max-content;
    margin: 0 auto;
    padding-left: 48px;
    display: flex;
    align-items: center;
    svg {
        position: relative;
        left: 0;
        transition: all 0.2s ease-in-out;
    }
    :hover {
        svg {
            left: 5px;
        }
    }
`
const Arrow = styled(ArrowRight)`
    color: ${props => props.theme.darkOrange};
    margin-left: 10px;
`

const Cta = ({ data }) => { 
    let { heading, subheading, link } = data.primary.cta.data
    return(
        <Section>
            <Subheading>{ subheading }</Subheading>
            { link.slug ? 
                <Link href={`/${link.slug}`} passHref>
                    <StyledLink>
                        <Heading>
                            { heading }
                        </Heading>
                        <Arrow size="38px" title="Link" />
                    </StyledLink>
                </Link>
            :
                <A target="_blank" href={link.url}>
                    <Heading>
                        {heading}
                    </Heading>
                    <Arrow size="38px" title="Link" />
                </A>
            }
        </Section>
    )
}

export default Cta