import Head from 'next/head';
import MainLayout from '../../layouts/main';
import Navbar from '../../components/private/contactMe/navbar';

const Index = props => {
	const {} = props;

	return (
		<>
			<Head>
				<title>وبسایت بیت باکس</title>
			</Head>
			<div>
				<Navbar />
				contact me page
			</div>
		</>
	);
};

Index.Layout = MainLayout;

export default Index;
