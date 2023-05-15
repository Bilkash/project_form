import React from "react";

import { Wrapper, TagsWrapper, Tag } from "./index.styled";
import { InputTitle } from "../shared/index";

const tagsNames = [
	"NFT", "GameFi", "DeFi", "DAO", "Ecosystem", "Others", "SocialFi", "Metaverse", "Tools"
];

export default function TagsChoice() {
	return (
		<Wrapper>
			<InputTitle>Project Category (It cannot be changed after creation)</InputTitle>

			<TagsWrapper>
				{tagsNames.map(it => <Tag key={it}>{it}</Tag>)}
			</TagsWrapper>
		</Wrapper>
	);
}
