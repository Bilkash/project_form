import React from "react";
import { useStore } from "effector-react";

import { $currentFormScreen, formScreenChanged } from "@/effector";

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
					onClick={() => formScreenChanged(1)}
				/>
				<Line
					position={1}
					currentFormScreen={currentFormScreen}
				/>
				<Circle
					position={2}
					currentFormScreen={currentFormScreen}
					onClick={() => formScreenChanged(2)}
				/>
				<Line
					position={2}
					currentFormScreen={currentFormScreen}
				/>
				<Circle
					position={3}
					currentFormScreen={currentFormScreen}
					onClick={() => formScreenChanged(3)}
				/>
			</Wrapper>

			<WrapperDesktop>
				<DesktopLineWrapper>
					<CircleWrapper>
						<Circle
							position={1}
							currentFormScreen={currentFormScreen}
							onClick={() => formScreenChanged(1)}
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
							onClick={() => formScreenChanged(2)}
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
							onClick={() => formScreenChanged(3)}
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
