import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 100vh;
  padding: 70px 15px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
`;

export const HighLightText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #2B8CE6;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 15px;
`;
