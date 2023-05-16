import styled from "styled-components";

import { mediaQueries } from "@/confifs/mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  gap: 25px;
  min-height: 100vh;
  padding: 70px 15px;
  overflow: hidden;
  background-color: #1E1E1E;
  position: relative;
`;

export const ProjectWrapper = styled.div`
	display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BottomGradientBackground = styled.div`
  ${mediaQueries("md")`
		display: block;
	`}
  position: absolute;
  width: 470px;
  height: 470px;
  right: -50px;
  bottom: -120px;

  background: radial-gradient(50% 50% at 50% 50%, #101313 38.02%, rgba(16, 19, 19, 0) 100%);
`;

export const BottomGradient = styled.div`
  ${mediaQueries("md")`
		display: block;
	`}
  position: absolute;
  width: 400px;
  height: 356px;
  right: -50px;
  bottom: -120px;

  background: linear-gradient(280.87deg, #87F696 20.45%, #00FFFF 41.25%, #9C16EF 72.03%, #4200FF 94.43%);
  opacity: 0.5;
  filter: blur(32.5px);
`;
