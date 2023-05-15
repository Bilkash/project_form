import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 15px;
`;

export const NumberBox = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
  background: #101313;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const Number = styled.div`
  color: #FFFFFF;
`;
