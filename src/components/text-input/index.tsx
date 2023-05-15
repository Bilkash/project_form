import React from "react";

import { ProjectData } from "@/types";

import { Wrapper, Input } from "./index.styled";
import { InputTitle } from "../shared/index";

type TextInputProps = {
	title?: string;
	placeholder: string;
	value: string;
	onChange: (str: string, name: keyof ProjectData) => void;
	name: keyof ProjectData
}

export default function TextInput({ title, placeholder, value, onChange, name }: TextInputProps) {
	return (
		<Wrapper>
			{title ? <InputTitle>{title}</InputTitle> : null}
			<Input placeholder={placeholder} value={value} onChange={(e) => onChange(e.currentTarget.value, name)}/>
		</Wrapper>
	);
}
