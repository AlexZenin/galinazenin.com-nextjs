import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ArrowUpRight } from "@styled-icons/feather/ArrowUpRight"

const ArticleGrid = styled.section`
    display: flex;
    padding-bottom: 70px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`
const Img = styled.img`
    max-height: 360px;
    max-width: 100%;
    box-shadow: 0 0 15px 2px rgba(136,136,136,0.50);
    transition: all 0.35s ease-in-out;
    :hover {
        box-shadow: 0 0 20px 3px rgba(136,136,136,0.50);
        transform: scale(1.015);
    }
`
const PlaceholderImg = styled.div`
    height: 360px;
    width: 220px;
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px;
    display: grid;
    grid-template-rows: 20% max-content max-content;
    justify-items: center;
    transition: all 0.3s ease-in-out;
    outline: solid 1px transparent;
    :hover {
        outline-color: initial;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px;
`
const He4 = styled.h4`
    color: ${props => props.theme.articleHeadingGrey};
    margin: 25px 0 0;
`
const Su5 = styled.h5`
    color: ${props => props.theme.articleSubheadingGrey};
    margin: 5px 0 0;
    font-weight: 400;
`
const ViewMore = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
`
const Arrow = styled(ArrowUpRight)`
    color: ${props => props.theme.darkOrange};
    margin-left: 10px;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.darkOrange};
  font-size: 15px;
`

const SeeMoreLink = ({ text, url }) => (
  <Container>
    <Link href={`/${url}`} passHref>
      <StyledLink>
        <PlaceholderImg>
          <div></div>
          <ViewMore>{text}</ViewMore>
          <Arrow size="38px" title="Link" />
        </PlaceholderImg>
      </StyledLink>
    </Link>
  </Container>
)

const Article = ({ url, alt, heading, subheading, externalUrl }) => (
  <Container>
    <a href={externalUrl || url} target="_blank" rel="noopener noreferrer">
      <Img src={url} alt={alt} />
    </a>
    <He4>{heading}</He4>
    <Su5>{subheading}</Su5>
  </Container>
)

const Articles = ({ data }) => {
  const { primary, items } = data
  return (
    <ArticleGrid id="Articles">
      {items.map(article => (
        <Article
          url={article.image.url}
          alt={article.image.alt}
          heading={article.heading1}
          subheading={article.subheading}
          externalUrl={article.external_url.url}
        />
      ))}
      {primary && primary.see_more_link && <SeeMoreLink url={primary.see_more_url.slug} text={primary.see_more_text} />}
    </ArticleGrid>
  )
}

export default Articles
