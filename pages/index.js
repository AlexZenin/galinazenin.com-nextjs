import React from 'react'
import { createClient } from '../prismicio'
import styled from 'styled-components'
import { Heading } from "../components/Headings"
import { ButtonOutline } from '../components/Buttons';
import SliceZone from "../components/SliceZone"
import Layout from "../components/Layout/Layout"
import { PrismicRichText } from '@prismicio/react'


const Section = styled.section`
    display: grid;
    grid-template-columns: 58% 38%;
    grid-template-rows: auto;
    grid-column-gap: 4%;
    max-width: 1500px;
    margin: 0 auto;
    align-items: center;
    @media (max-width: 1024px) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        justify-items: center;
        padding: 0 20px;
    }
    padding: 0 40px;
    margin: 0 auto;
`
const Description = styled.div`
    max-width: 700px;
    font-size: 18px;
    @media (max-width: 1024px) {
      padding-bottom: 40px;
      text-align: center;
      max-width: 100%;
      width: 100%;
    }
`
const ButtonPosition = styled.div`
    @media (max-width: 768px) {
        width: fit-content;
        margin: 0 auto;
    }
`
const Img = styled.img`
    max-height: 430px;
    max-width: 100%;
    object-fit: cover;
`

export default function Home({ page }) {
  const { description, cta_text, image } = page.data
  return (
    <>
      <Layout>
        <Section>
          <div>
            <Heading>
              <PrismicRichText field={page.data.heading} />
            </Heading>
            <Description>
              <PrismicRichText field={description} />
              <ButtonPosition>
                <ButtonOutline to="/contact" text={cta_text} />
              </ButtonPosition>
            </Description>
          </div>
          <Img src={image.url} alt={image.alt} />
        </Section>
        <SliceZone slices={page.data.body} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('home', {
        fetchLinks: [
          'timeline.heading', 
          'timeline.description', 
          'timeline.key_achivement', 
          'timeline.achievements', 
        ]
    })

    return {
        props: { page },
    }
}