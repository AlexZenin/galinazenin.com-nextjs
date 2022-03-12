import React from 'react'
import { createClient } from '../../prismicio'
import Layout from "../../components/Layout/Layout"
import SliceZone from '../../components/SliceZone'

export default function Businesses({ page }) { 
    return (
        <Layout>
            <SliceZone slices={page.data.body} />
        </Layout>
    )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('businesses')

    return {
        props: { page },
    }
}