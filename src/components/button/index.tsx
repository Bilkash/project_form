import React from "react";

import { ButtonBox, ButtonText, DarkButtonBox } from "./index.styled";

type ButtonProps = {
	text: string;
	dark?: boolean;
	handleClick: () => void;
}

export default function Button({ dark, text, handleClick }: ButtonProps) {
	if (dark) {
		return (
			<DarkButtonBox onClick={handleClick}>
				<ButtonText dark={dark}>{text}</ButtonText>
			</DarkButtonBox>
		);
	}

	return (
		<ButtonBox onClick={handleClick}>
			<ButtonText dark={dark}>{text}</ButtonText>
		</ButtonBox>
	);
}
