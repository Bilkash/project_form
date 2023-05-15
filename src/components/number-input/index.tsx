import React from "react";

import { Button } from "@/components";

import { Wrapper, NumberBox, Number } from "./index.styled";

export default function NumberInput({ value, handleChange }) {
	return (
		<Wrapper>
			<Button dark text={"-"}/>

			<NumberBox>
				{value}
			</NumberBox>

			<Button dark text={"+"}/>
		</Wrapper>
	);
}
