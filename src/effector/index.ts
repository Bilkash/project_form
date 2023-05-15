import { createGate } from "effector-react";
import { createDomain } from "effector";

export const Gate = createGate();

const domain = createDomain("project_form");

type ProjectData = {
  name: string;
  url: string;
  category: string;
  goal: string;
  workersCount: number;
  productLaunch: string;
  email: string;
}

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



