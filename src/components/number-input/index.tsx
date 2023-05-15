import React from "react";

import { Button } from "@/components";

import { Wrapper, NumberBox } from "./index.styled";

type NumberInputProps = {
	value: number;
	handleChange: (num: number) => void;
}

export default function NumberInput({ value, handleChange }: NumberInputProps) {
	return (
		<Wrapper>
			<Button
				dark
				text={"-"}
				handleClick={() => {
					if (value === 0) {
						return null;
					} else {
						handleChange(value-1);
					}
				}}
			/>

			<NumberBox>
				{value}
			</NumberBox>

			<Button
				dark
				text={"+"}
				handleClick={() => {
					handleChange(value+1);
				}}
			/>
		</Wrapper>
	);
}
