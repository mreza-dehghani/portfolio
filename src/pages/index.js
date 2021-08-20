import Head from 'next/head';
import MainLayout from '../layouts/main';

const Index = props => {
	const {} = props;

	return (
		<>
			<Head>
				<title>وبسایت بیت باکس</title>
			</Head>
			<div>home page</div>
		</>
	);
};

Index.Layout = MainLayout;

export default Index;
