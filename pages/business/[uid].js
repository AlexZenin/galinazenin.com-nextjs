import React from 'react'
import styled from 'styled-components'
import { createClient, linkResolver } from '../../prismicio'
import Layout from "../../components/Layout/Layout"
import SliceZone from '../../components/SliceZone'
import * as prismicH from "@prismicio/helpers";

const Header = styled.div`
  display: flex;
  width: 100%;
  max-height: 450px;
  max-width: 1500px;
  padding: 0 40px 40px;
  margin: 0 auto;
  justify-content: space-between;
  box-sizing: border-box;
  @media(max-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 40px;
  }
  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: none;
  }
`
const Left = styled.div`
  max-width: 500px;
  padding: 40px 0;
`
const Subheading = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  color: ${props => props.theme.headerGrey};
`
const Heading = styled.h1`
  color: ${props => props.theme.darkOrange};
  font-size: 2rem;
`
const A = styled.a`
  color: ${props => props.theme.darkOrange};
`
const Img = styled.img`
  width: 700px;
  max-height: 100%;
  @media (max-width: 800px) {
    max-height: 80vh;
  }
  max-width: 100%;
  object-fit: contain;
  padding: 20px 0;
  box-sizing: border-box;
`

export default function Business({ page }) {
    const { data } = page
    const { url, target } = data.website_url
    return (
        <Layout>
            <Header>
                <Left>
                    <Subheading>Business</Subheading>
                    <Heading> { data.heading } </Heading>
                    <A href={url} target={target}>Visit website</A>
                </Left>
                <Img src={data.cover_image.url} alt={data.cover_image.alt}/>
            </Header>
            <SliceZone slices={page.data.body} />
        </Layout>
    )
}

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData })

    const page = await client.getByUID('business', params.uid, {
       fetchLinks: [
        'cta.subheading',
        'cta.heading',
        'cta.link', 
       ] 
    })

    return {
        props: { page },
    }
}

export const getStaticPaths = async () => {
    const client = createClient();

    const documents = await client.getAllByType("business");
    
    return {
        paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
        fallback: true,
    };
};
