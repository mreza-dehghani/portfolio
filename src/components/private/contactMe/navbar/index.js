import Link from 'next/link';
import React from 'react';
import MfLogo from '../../../../assets/img/svg/mf-logo.svg';
import MfAvatar from '../../../../assets/img/svg/mf-avatar.svg';

const Index = (props) => {
	return (
		<div className="_contact_me_navbar">
			<nav className="_navbar_container container">
				<div className="_logo">
					<img src={MfLogo} alt="mf-logo" />
				</div>
				<div className="_avatar">
					<img src={MfAvatar} alt="avatar" />
				</div>
				<div className="_back">
					<Link href="/">
						<a>
							<i className="fa fa-close" />
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Index;
