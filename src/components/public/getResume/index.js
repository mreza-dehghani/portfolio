import { Wrapper } from './style';

const Index = props => {
	const {} = props;

	return (
		<div className="container">
			<Wrapper>
				<div className="title-wrapper">
					<h3 className="title">Resume File</h3>
				</div>
				<div className="text-wrapper">
					<p className="text">Would you like to see my resume?</p>
				</div>
				<div className="btn-wrapper">
					<a href="#" className="btn">
						Let's get this
					</a>
				</div>
			</Wrapper>
		</div>
	);
};

export default Index;
