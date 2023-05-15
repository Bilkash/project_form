import styled from "styled-components";

import { mediaQueries } from "@/confifs/mediaQueries";

export const Wrapper = styled.div`
  ${mediaQueries("md")`
    display: none;
  `};
  min-width: 25%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const WrapperDesktop = styled.div`
	${mediaQueries("md")`
		display: flex;
	`}
  display: none;
  width: 260px;
  border-right: 1px solid #101313;
  padding-top: 40px;
  padding-left: 15px;
`;

export const DesktopLineWrapper = styled.div`
	display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) => {
		const { position, currentFormScreen } = props;
		if (position === currentFormScreen) {
			return "#FFFFFF";
		}
		if (position < currentFormScreen) {
			return "#2B8CE6"; 
		} else {
			return "rgba(255, 255, 255, 0.3)";
		}
	}};
  border-radius: 50%;
  margin: 4px;
`;

export const CircleWrapper = styled.div`
  ${mediaQueries("md")`
		display: flex;
	`}
  display: flex;
  align-items: center;
`;

export const CircleText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => {
		const { position, currentFormScreen } = props;
		if (position === currentFormScreen) {
			return "#FFFFFF";
		}
		if (position < currentFormScreen) {
			return "#2B8CE6";
		} else {
			return "rgba(255, 255, 255, 0.3)";
		}
	}};
`;

export const Line = styled.div`
  ${mediaQueries("md")`
		 width: 1px;
  height: 40px;
  position: relative;
  left: 7px;
	`}
  width: 40px;
  height: 1px;
  background: ${(props) => {
		const { position, currentFormScreen } = props;
		if (position === currentFormScreen) {
			return "rgba(255, 255, 255, 0.3)";
		}
		if (position < currentFormScreen) {
			return "#2B8CE6";
		} else {
			return "rgba(255, 255, 255, 0.3)";
		}
	}};
`;

export const BottomGradientBackground = styled.div`
  ${mediaQueries("md")`
		display: block;
	`}
  position: absolute;
  width: 270px;
  height: 270px;
  left: -5px;
  bottom: -120px;

  background: radial-gradient(50% 50% at 50% 50%, #101313 38.02%, rgba(16, 19, 19, 0) 100%);
`;

export const BottomGradient = styled.div`
  ${mediaQueries("md")`
		display: block;
	`}
  position: absolute;
  width: 200px;
  height: 156px;
  left: -5px;
  bottom: -120px;

  background: linear-gradient(280.87deg, #87F696 20.45%, #00FFFF 41.25%, #9C16EF 72.03%, #4200FF 94.43%);
  opacity: 0.5;
  filter: blur(32.5px);
`;
