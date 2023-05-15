import React from "react";
import { useStore } from "effector-react";

import { $currentFormScreen, formScreenChanged } from "@/effector";

import { Wrapper, Circle, Line } from "./index.styled";

export default function ProgressBar() {
	const currentFormScreen = useStore($currentFormScreen);

	return (
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
	);
}
