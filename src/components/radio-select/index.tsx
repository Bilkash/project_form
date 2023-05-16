import React from "react";

import { Wrapper, Option, OptionText, RadioInner, RadioOuter } from "./index.styled";

type RadioSelectTypes = {
	options: string[];
	handleClick: (str: string) => void;
	value: string;
}

export default function RadioSelect({ options, handleClick, value }: RadioSelectTypes) {
	return (
		<Wrapper>
			{options.map(it => (
				<Option key={it} onClick={() => handleClick(it)}>
					<RadioOuter>
						{value === it ? <RadioInner/> : null}
					</RadioOuter>

					<OptionText>{it}</OptionText>
				</Option>
			))}
		</Wrapper>
	);
}
