import variables from '../../../constant/styleVariables';
import styled from 'styled-components';
import { pxToRem } from '../../../helper/styleMixin';

export const Wrapper = styled.div`
	background-color: ${variables.colors.BigStone};
	padding: ${pxToRem(10)}rem ${pxToRem(20)}rem ${pxToRem(50)}rem;
	position: relative;
	bottom: ${pxToRem(80)}rem;
	border-radius: 20px;
	box-shadow: 0 0 3px ${variables.colors.BigStone};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	.title-wrapper {
		width: 100%;

		.title {
			text-align: center;
			color: ${variables.colors.white};
			padding: ${pxToRem(25)}rem 0 0;
			font-weight: ${variables.fontWeight.bold};
		}
	}

	.text-wrapper {
		padding-top: ${pxToRem(20)}rem;
		width: 100%;

		.text {
			color: ${variables.colors.white};
			font-size: ${variables.fontSize.lg};
			text-align: center;
		}
	}

	.btn-wrapper {
		text-align: center;
		width: 100%;
		padding-top: ${pxToRem(30)}rem;

		.btn {
			background-color: ${variables.colors.BigStone};
			border: 3px solid ${variables.colors.CornflowerBlue};
			color: ${variables.colors.white};
			padding: ${pxToRem(12)}rem ${pxToRem(24)}rem;
			border-radius: 30px;
			font-size: ${variables.fontSize.lg};
			transition: 0.2s;

			&:hover {
				background-color: ${variables.colors.CornflowerBlue};
			}
		}
	}
  @media (min-width: ${variables.breakPoints.tabletWide}px) {
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: ${pxToRem(30)}rem ${pxToRem(20)}rem ${pxToRem(60)}rem;
    
      .text-wrapper {
        .text {
          padding-top: ${pxToRem(25)}rem;
        }
      }
    }
  }
`;
