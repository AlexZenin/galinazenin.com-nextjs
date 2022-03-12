import React from 'react'
import { createClient } from '../prismicio'
import Layout from "../components/Layout/Layout"
import SliceZone from '../components/SliceZone'

export default function About({ page }) {
    return (
        <Layout>
            <SliceZone slices={page.data.body} />
        </Layout>
    )
}

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