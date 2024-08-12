import type { Config } from "jest";

const config: Config = {
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest",
	},
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	collectCoverageFrom: ["src/**/*.ts"],
	coverageProvider: "v8",
};

export default config;
