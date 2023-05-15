"use client";

import { useStore } from "effector-react";

import { ProgressBar, RadioSelect, TagsChoice, TextInput, Button } from "@/components";
import { $currentFormScreen, $project, dataChanged } from "@/effector";
import NumberInput from "@/components/number-input";

import { Wrapper, Title, HighLightText, ButtonWrapper } from "./page.styled";

const goals = [
	"Grow My Community",
	"Activate Existing Members",
	"Understand My Members",
	"Other"
];

const launchType = [
	"Pre Product",
	"Post Product"
];

export default function Home() {
	const currentFormScreen = useStore($currentFormScreen);
	const project = useStore($project);

	const handleGoals = (str) => {
		dataChanged({ goal: str });
	};

	const handleLaunchType = (str) => {
		dataChanged({ productLaunch: str });
	};

	const renderFormScreen = () => {
		switch (currentFormScreen) {
		case 1: return (
			<>
				<div>
					<HighLightText>To Create Quest you need firstly create Project</HighLightText>

					<Title>Add New Project</Title>
				</div>

				<TextInput
					placeholder="Awesome NFT Punch"
					title="Project Name (It can be changed later)"
					value=""
					onChange={() => console.log("AAAA")}
				/>

				<TextInput
					placeholder="Alphaguilty.io/awesomenftpunch"
					title="Project URL (It cannot be changed after creation)"
					value=""
					onChange={() => console.log("AAAA")}
				/>

				<TagsChoice/>

				<Button text={"Add Project"}/>
			</>
		);
		case 2: return (
			<>
				<div>
					<HighLightText>Project Details</HighLightText>

					<Title>What is your main goal with AlphaQuest</Title>
				</div>

				<RadioSelect
					value={project.goal}
					options={goals}
					handleClick={handleGoals}
				/>

				<ButtonWrapper>
					<Button dark text={"Back"}/>

					<Button text={"Continue"}/>
				</ButtonWrapper>
			</>
		);
		case 3: return (
			<>
				<div>
					<HighLightText>Create Project</HighLightText>

					<Title>How many full-time workers on project?</Title>
				</div>

				<NumberInput value={project.workersCount}/>

				<Title>Are you pre or post product launch?</Title>

				<RadioSelect
					value={project.productLaunch}
					options={launchType}
					handleClick={handleLaunchType}
				/>

				<Title>Contact Email</Title>

				<TextInput
					placeholder="awesomenft@gmail.com"
					value=""
					onChange={() => console.log("AAAA")}
				/>

				<ButtonWrapper>
					<Button dark text={"Back"}/>

					<Button text={"Create Project"}/>
				</ButtonWrapper>
			</>
		);
		}
	};

	return (
		<Wrapper>
			<ProgressBar/>

			{renderFormScreen()}
		</Wrapper>
	);
}
