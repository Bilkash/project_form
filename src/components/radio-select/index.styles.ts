import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 25px;  
`;

export const Option = styled.div`
	display: flex;
	align-items: center;  
	margin-bottom: 25px;  
`;

export const RadioOuter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;  
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid rgba(255, 255, 255, 0.1);  
	margin-right: 10px;  
`;

export const RadioInner = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #2B8CE6;  
`;

export const OptionText = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	text-align: right;
	color: #FFFFFF;
`;
