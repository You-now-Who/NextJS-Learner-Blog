import Link from 'next/link';
import Layout from '../../components/Layout';

export default function FirstPost() {
    return(
        <>
            <Layout>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">Take me home</Link>
                </h2>
            </Layout>
        </>
    )
}