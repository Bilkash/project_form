import React from "react";

import { Wrapper, Input } from "./index.styled";
import { InputTitle } from "../shared/index";

type TextInputProps = {
	title?: string;
	placeholder: string;
	value: string;
	onChange: () => void;
}

export default function TextInput({ title, placeholder, value, onChange }: TextInputProps) {
	return (
		<Wrapper>
			{title ? <InputTitle>{title}</InputTitle> : null}
			<Input placeholder={placeholder} value={value} onChange={onChange}/>
		</Wrapper>
	);
}
