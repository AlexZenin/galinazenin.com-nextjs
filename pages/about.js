import React from 'react'
import { createClient } from '../prismicio'
import Layout from "../components/Layout/Layout"
import SliceZone from '../components/SliceZone'

const About = ({ page }) => (
    <Layout>
        <SliceZone slices={page.data.body} />
    </Layout>
)

export default About

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('about', {
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