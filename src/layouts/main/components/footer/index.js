import Link from 'next/link';
import React from 'react';
import MfLogoWhite from '../../../../assets/img/svg/mf-logo-white.svg';
import { Footer } from '../../style';
import GetResume from '../../../../components/public/getResume';

const Index = props => {
	const {} = props;

	return (
		<Footer>
			<GetResume />
			<div className="container">
				<div className="logo-wrapper">
					<Link href="/">
						<a>
							<img className="logo-img" src={MfLogoWhite} alt="mf-logo-white" />
						</a>
					</Link>
				</div>
				{/*<h5>Living, learning, leveling up one day at a time.</h5>*/}
				<div className="social-media-links-wrapper">
					{socialMediaLinks &&
						socialMediaLinks.map(item => {
							return (
								<a href={item.path} key={item.id} target={item.target} className="link-item">
									<i className={`fa ${item.name}`} />
								</a>
							);
						})}
				</div>
				<p className="developer-name">developed by Mohammadreza</p>
				<small className="copyright-text">
					<b>&copy; 2020</b>
				</small>
			</div>
		</Footer>
	);
};

const socialMediaLinks = [
	{ id: 0, name: 'fa-linkedin', path: 'https://www.linkedin.com/in/mohammadreza-dehghani-8112a11b9', target: '_blank' },
	{ id: 1, name: 'fa-instagram', path: 'https://www.instagram.com/mreza_dehqani/', target: '_blank' },
	{ id: 2, name: 'fa-envelope-o', path: 'mailto:mrezavlb@gmail.com', target: '_blank' },
	{ id: 3, name: 'fa-github', path: 'https://github.com/mreza-dehghani', target: '_blank' },
	{ id: 4, name: 'fa-telegram', path: 'https://t.me/mrezavlb', target: '_blank' },
];

export default Index;
