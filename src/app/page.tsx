"use client";

import { useStore } from "effector-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { ProgressBar, RadioSelect, TagsChoice, TextInput, Button, NumberInput } from "@/components";
import { Title } from "@/components/shared";
import { $currentFormScreen, $project, dataChanged, formScreenChanged } from "@/effector";
import { ProjectData } from "@/types";

import { Wrapper, HighLightText, ButtonWrapper, FormWrapper } from "./page.styled";

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
	const router = useRouter();

	const handleGoals = (str: string) => {
		dataChanged({ goal: str });
	};

	const handleLaunchType = (str: string) => {
		dataChanged({ productLaunch: str });
	};

	const handleChangeTextInput = (str: string, name: keyof ProjectData) => {
		dataChanged({ [name]: str });
	};

	const handleChooseTag = (str: string) => {
		dataChanged({ category: str });
	};

	const handleChangeNumber = (num: number) => {
		dataChanged({ workersCount: num });
	};

	const showErrorSnackbar = () => {
		toast.error("Please fill all field.",  {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 2000,
			theme: "dark"
		});
	};

	const handleFirstStepSubmit = () => {
		if (!project.name || !project.url || !project.category) {
			showErrorSnackbar();
		} else {
			formScreenChanged(2);
		}
	};

	const handleSecondStepSubmit = () => {
		if (!project.goal) {
			showErrorSnackbar();
		} else {
			formScreenChanged(3);
		}
	};

	const handleThirdStepSubmit = () => {
		if (!project.email || !project.productLaunch || !project.workersCount) {
			showErrorSnackbar();
		} else {
			router.push("/project");
		}
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
					value={project.name}
					name={"name"}
					onChange={handleChangeTextInput}
				/>

				<TextInput
					placeholder="Alphaguilty.io/awesomenftpunch"
					title="Project URL (It cannot be changed after creation)"
					value={project.url}
					name={"url"}
					onChange={handleChangeTextInput}
				/>

				<TagsChoice handleClick={handleChooseTag}/>

				<Button handleClick={handleFirstStepSubmit} text={"Add Project"}/>
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
					<Button handleClick={() => formScreenChanged(1)} dark text={"Back"}/>

					<Button handleClick={handleSecondStepSubmit} text={"Continue"}/>
				</ButtonWrapper>
			</>
		);
		case 3: return (
			<>
				<div>
					<HighLightText>Create Project</HighLightText>

					<Title>How many full-time workers on project?</Title>
				</div>

				<NumberInput value={project.workersCount} handleChange={handleChangeNumber}/>

				<Title>Are you pre or post product launch?</Title>

				<RadioSelect
					value={project.productLaunch}
					options={launchType}
					handleClick={handleLaunchType}
				/>

				<Title>Contact Email</Title>

				<TextInput
					placeholder="awesomenft@gmail.com"
					value={project.email}
					name={"email"}
					onChange={handleChangeTextInput}
				/>

				<ButtonWrapper>
					<Button handleClick={() => formScreenChanged(2)} dark text={"Back"}/>

					<Button handleClick={handleThirdStepSubmit} text={"Create Project"}/>
				</ButtonWrapper>
			</>
		);
		}
	};

	return (
		<>
			<Wrapper>
				<ProgressBar/>

				<FormWrapper>
					{renderFormScreen()}
				</FormWrapper>
			</Wrapper>

			<ToastContainer/>
		</>
	);
}
