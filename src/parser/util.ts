import { Aweme } from "../types";
import { IParsed, ITiktokOptions } from "./type";

export function isParsedOptions(
	options?: ITiktokOptions
): options is { parse: true; keys?: [keyof Aweme] } {
	return options?.parse === true;
}

function getters<T>(data: any, keys: string[]): T {
	const obj: any = {};
	keys.forEach((key) => {
		const nestedKeys = key.split(".");
		const firstKey = nestedKeys.shift();
		if (firstKey !== undefined) {
			const value = nestedKeys.reduce(
				(acc, nestedKey) => acc?.[nestedKey],
				data[firstKey]
			);
			obj[firstKey] = value;
		}
	});
	return obj;
}

export function findAweme(data: Aweme[], value: string): Aweme | undefined {
	return data.find((item) => item.aweme_id === value);
}

interface IParseOptions {
	keys: Array<keyof Aweme>;
}

export function parseAweme(
	data: Aweme,
	options?: IParseOptions
): Partial<Aweme> | IParsed {
	// If no keys are specified, return the full parsed object
	const parsed: IParsed = {
		aweme_id: data.aweme_id,
		region: data.region,
		desc: data.desc,
		create_time: data.create_time,
		author: getters(data.author, ["nickname", "unique_id", "signature"]),
		duration: data.video?.duration || 0,
		download: {
			covers: data.video?.cover?.url_list || [],
			nowm: data.video?.download_addr?.url_list?.[0] || "",
			wm: data.video?.download_addr?.url_list?.[1] || "",
			music: data.music?.play_url?.url_list?.[0] || "",
			music_info: getters(data.music, [
				"id",
				"title",
				"author",
				"album",
				"cover_large.url_list",
			]),
		},
	};
	if (options && options.keys) {
		const parsedData: Partial<Aweme> = {
            ...parsed,
        };
		for (const key of options.keys) {
			if (key in data) {
                parsedData[key] = data[key];
			}
		}
        return parsedData;
	}
	return parsed;
}
