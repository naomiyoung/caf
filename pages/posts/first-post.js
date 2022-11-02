import Head from 'next/head';
import Layout from '../../components/layout.js'

export default function FirstPage() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
        </Layout>
    )
}