import styled from "styled-components";

import { mediaQueries } from "@/configs/mediaQueries";

export const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: #2B8CE6;
	height: 50px;
  ${mediaQueries("md")`
    max-width: 330px;
  `};
`;

export const DarkButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: rgba(250, 250, 250, 0.1);
	height: 50px;
  ${mediaQueries("md")`
    max-width: 120px;
  `};
`;

export const ButtonText = styled("div")<{dark?: boolean}>`
  color: #101313;
  color: ${props => props.dark ? "#FAFAFA" : "#101313"};
  font-size: 16px;
  font-style: normal;
`;
