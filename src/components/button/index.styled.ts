import styled from "styled-components";

export const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: ${props => props.dark ? "rgba(250, 250, 250, 0.1)" : "#2B8CE6"};
	height: 50px;
`;

export const ButtonText = styled.div`
  color: #101313;
  color: ${props => props.dark ? "#FAFAFA" : "#101313"};
  font-size: 16px;
  font-style: normal;
`;
