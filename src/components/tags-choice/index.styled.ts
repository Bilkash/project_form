import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TagsWrapper = styled.div`
	margin-top: 10px;
	display: flex;
  	flex-wrap: wrap;
`;

export const Tag = styled.div`
  	padding: 6px 12px;
  	background: ${props => props["selected"] ? "rgba(33, 122, 255, 0.1)" : "rgba(250, 250, 250, 0.1)"};
  	color: ${props => props["selected"] ? "#2B8CE6" : "#FAFAFA"};
  	border-radius: 16px;
  	margin-right: 10px;
  	margin-top: 10px;
  	cursor: pointer;
`;
