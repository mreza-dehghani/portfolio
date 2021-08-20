import variables from '../../constant/styleVariables';
import styled from 'styled-components';
import { pxToRem } from '../../helper/styleMixin';

export const Container = styled.div`
	max-width: ${pxToRem(1240)}rem;
	width: 100%;
	margin: auto;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	padding: ${pxToRem(5)}rem 0;

	.navbar-container {
		flex-grow: 4;
		align-self: center;
		padding: 0 ${pxToRem(10)}rem 0 0;

		.navbar {
			padding: 0;
			justify-content: flex-end;

			.navbar-list {
				list-style: none;
				display: flex;
				flex-direction: row-reverse;
				flex-wrap: nowrap;

				.navbar-item {
					.navbar-link {
						color: ${variables.colors.CornflowerBlue};
						padding: ${pxToRem(5)}rem ${pxToRem(10)}rem;
					}

					&:first-child {
						.navbar-link {
							border: 3px solid ${variables.colors.CornflowerBlue};
							border-radius: ${pxToRem(20)}rem;
							color: ${variables.colors.CornflowerBlue};
							transition: 0.2s;
							padding: ${pxToRem(5)}rem ${pxToRem(10)}rem;

							&:hover {
								color: ${variables.colors.white};
								background-color: ${variables.colors.CornflowerBlue};
							}
						}
					}
				}
			}
		}
	}

	.logo-wrapper {
		padding: ${pxToRem(10)}rem;
		align-self: center;
		flex-grow: 1;
		text-align: left;

		.logo {
			height: ${pxToRem(43)}rem;
			width: ${pxToRem(43)}rem;
		}
	}

	@media (min-width: ${variables.breakPoints.tablet}px) {
		padding: ${pxToRem(20)}rem 0;

		.logo-wrapper {
			.logo {
				height: ${pxToRem(63)}rem;
				width: ${pxToRem(63)}rem;
			}
		}
	}
`;

export const Main = styled.main`
	width: 100%;
	min-height: ${pxToRem(600)}rem;
`;

export const Footer = styled.footer`
	background-image: linear-gradient(90deg, ${variables.colors.CornflowerBlue} 30%, ${variables.colors.ElectricViolet});
	padding: ${pxToRem(10)}rem ${pxToRem(10)}rem ${pxToRem(20)}rem ${pxToRem(10)}rem;
	text-align: center;

	.logo-wrapper {
		padding: ${pxToRem(20)}rem;

		.logo-img {
			height: ${pxToRem(60)}rem;
		}
	}

	h3 {
		padding: ${pxToRem(25)}rem;
		max-width: ${pxToRem(486)}rem;
		margin: auto;
		color: ${variables.colors.white};
	}

	.social-media-links-wrapper {
		margin: 15px 0;

		.link-item {
			font-size: 2em;
			color: ${variables.colors.white};
			margin: 0 10px;
		}
	}

	h5 {
		color: ${variables.colors.white};
		margin: ${pxToRem(20)}rem 0;
	}

	.developer-name {
		color: ${variables.colors.white};
	}

	.copyright-text {
		color: ${variables.colors.white};
	}
`;
