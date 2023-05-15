import React from "react";
import { useStore } from "effector-react";

import { $project } from "@/effector";

import { Wrapper, TagsWrapper, Tag } from "./index.styled";
import { InputTitle } from "../shared/index";

const tagsNames = [
	"NFT", "GameFi", "DeFi", "DAO", "Ecosystem", "Others", "SocialFi", "Metaverse", "Tools"
];

type TagsChoiceProps = {
	handleClick: (str: string) => void
}

export default function TagsChoice({ handleClick }: TagsChoiceProps) {
	const project = useStore($project);

	return (
		<Wrapper>
			<InputTitle>Project Category (It cannot be changed after creation)</InputTitle>

			<TagsWrapper>
				{tagsNames.map(it =>
					<Tag
						selected={it===project.category}
						onClick={() => handleClick(it)}
						key={it}>{it}
					</Tag>
				)}
			</TagsWrapper>
		</Wrapper>
	);
}
