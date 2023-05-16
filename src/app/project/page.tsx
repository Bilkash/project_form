"use client";

import { useStore } from "effector-react";
import React from "react";
import { useRouter } from "next/navigation";

import { $project, cleanData, formScreenChanged } from "@/effector";
import { Title } from "@/components/shared";
import { Button } from "@/components";

import { Wrapper, BottomGradientBackground, BottomGradient, ProjectWrapper } from "./page.styled";

export default function Project() {
	const project = useStore($project);
	const router = useRouter();

	return (
		<Wrapper>
			<ProjectWrapper>
				<Title>Your new project: {project.name}</Title>
				<div>
					Project URL: {project.url}
				</div>

				<div>
					Project Category: {project.category}
				</div>

				<div>
					Project Goal: {project.goal}
				</div>

				<div>
					Workers count: {project.workersCount}
				</div>

				<div>
					Product launch type: {project.productLaunch}
				</div>

				<div>
					Contact Email: {project.email}
				</div>

				<Button text={"Refresh"} handleClick={() => {
					cleanData();
					router.push("/");
					formScreenChanged(1);
				}}/>
			</ProjectWrapper>

			<BottomGradientBackground/>
			<BottomGradient/>
		</Wrapper>
	);
}
