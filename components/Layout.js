import Head from 'next/head'
import Navbar from './Navbar'

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'This is the default title' } = this.props;
    return (
    //   <html lang="fa" dir="rtl">
    <>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" href="/img/mf-logo.svg"/>
        </Head>
        <div className="container-fluid">
            <Navbar />

            {/* <main className="container">
                { children }
            </main> */}
            {children}
        </div>
        <footer>
          {'اینجا فوتر سایت می باشد'}
        </footer>
        
      {/* </html> */}
      </>
    );
  }
}