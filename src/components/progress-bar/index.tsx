import React from "react";
import { useStore } from "effector-react";

import { $currentFormScreen } from "@/effector";

import {
	Wrapper,
	Circle,
	Line,
	WrapperDesktop,
	DesktopLineWrapper,
	CircleWrapper,
	CircleText,
	BottomGradientBackground,
	BottomGradient
} from "./index.styled";

export default function ProgressBar() {
	const currentFormScreen = useStore($currentFormScreen);

	return (
		<>
			<Wrapper>
				<Circle
					position={1}
					currentFormScreen={currentFormScreen}
				/>
				<Line
					position={1}
					currentFormScreen={currentFormScreen}
				/>
				<Circle
					position={2}
					currentFormScreen={currentFormScreen}
				/>
				<Line
					position={2}
					currentFormScreen={currentFormScreen}
				/>
				<Circle
					position={3}
					currentFormScreen={currentFormScreen}
				/>
			</Wrapper>

			<WrapperDesktop>
				<DesktopLineWrapper>
					<CircleWrapper>
						<Circle
							position={1}
							currentFormScreen={currentFormScreen}
						/>

						<CircleText
							position={1}
							currentFormScreen={currentFormScreen}
						>
							Start First Project
						</CircleText>
					</CircleWrapper>
					<Line
						position={1}
						currentFormScreen={currentFormScreen}
					/>
					<CircleWrapper>
						<Circle
							position={2}
							currentFormScreen={currentFormScreen}
						/>

						<CircleText
							position={2}
							currentFormScreen={currentFormScreen}
						>
							Project Details
						</CircleText>
					</CircleWrapper>

					<Line
						position={2}
						currentFormScreen={currentFormScreen}
					/>
					<CircleWrapper>
						<Circle
							position={3}
							currentFormScreen={currentFormScreen}
						/>

						<CircleText
							position={3}
							currentFormScreen={currentFormScreen}
						>
							Create Project
						</CircleText>
					</CircleWrapper>

					<BottomGradientBackground/>
					<BottomGradient/>
				</DesktopLineWrapper>
			</WrapperDesktop>
		</>
	);
}
