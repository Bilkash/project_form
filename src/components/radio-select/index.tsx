import React from "react";

import { Wrapper, Option, OptionText, RadioInner, RadioOuter } from "./index.styles";

export default function RadioSelect({ options, handleClick, value }) {
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
