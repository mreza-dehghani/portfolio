import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" href="/img/mf-logo.svg"/>
        </Head>
        <body>
            <div className="container-fluid">
                {/* <Navbar /> */}
                <Main />
                {/* <Footer /> */}
            </div>
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument