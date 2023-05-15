import { createGate } from "effector-react";
import { createDomain } from "effector";

import { ProjectData } from "@/types";

export const Gate = createGate();

const domain = createDomain("project_form");

const INIT_DATA: ProjectData = {
	name: "",
	url: "",
	category: "",
	goal: "",
	workersCount: 0,
	productLaunch: "",
	email: ""
};

export const dataChanged = domain.event<Partial<ProjectData>>();
export const formScreenChanged = domain.event<number>();

export const $project = domain.store<ProjectData>(INIT_DATA);
export const $currentFormScreen = domain.store<number>(1);

$project.on(dataChanged, (state, newData) => ({
	...state,
	...newData,
}));
$currentFormScreen.on(formScreenChanged, (_, newFormScreen) => newFormScreen);



