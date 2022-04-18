import '../styles.css'
import Layout from '../components/Layout/layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (

        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}