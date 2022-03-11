import { createClient } from '../prismicio'

export default function Contact({ page }) {
    console.log(JSON.stringify(page))
    return <h1>test</h1>
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('contact')

    return {
        props: { page },
    }
}