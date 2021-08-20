import Head from 'next/head';
import Header from './components/header';
import { Container, Main } from './style';
import Footer from './components/Footer';

const Index = props => {
	const { children } = props;

	return (
		<>
			<Head>
				<title>محمدرضا دهقانی</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#16171A" />
				{/*<link rel="icon" href="/img/app_logo.svg" />*/}
			</Head>
			<div className="container">
				<Header />
			</div>
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Index;
