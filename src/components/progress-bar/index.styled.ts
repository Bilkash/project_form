import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 25%;
  display: flex;
  align-items: center;
  margin: 0 auto;
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

export const Line = styled.div`
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
