import Link from 'next/link';
import React from 'react';
import MfLogo from '../../../../assets/img/svg/mf-logo.svg';
import { Header } from '../../style';

const Index = props => {
	const {} = props;

	return (
		<Header>
			<div className="logo-wrapper">
				<div>
					<Link href="/">
						<a>
							<img className="logo" src={MfLogo} alt="mf-logo" />
						</a>
					</Link>
				</div>
			</div>
			<div className="navbar-container">
				<nav className="navbar">
					<ul className="navbar-list">
						<li className="navbar-item">
							<Link href="/contact-me">
								<a className="navbar-link">Contact me</a>
							</Link>
						</li>
						{/* <li className="">
                                <Link href="#"><a>Tips</a></Link>
                            </li> */}
					</ul>
				</nav>
			</div>
		</Header>
	);
};

export default Index;
