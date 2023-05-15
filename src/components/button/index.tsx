import React from "react";

import { ButtonBox, ButtonText } from "./index.styled";

export default function Button({ dark, text, handleClick }) {
	return (
		<ButtonBox dark={dark} onClick={handleClick}>
			<ButtonText dark={dark}>{text}</ButtonText>
		</ButtonBox>
	);
}
