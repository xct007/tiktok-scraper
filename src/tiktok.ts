import fetchAwemeList from "./client/fetcher";
import { IParsed, ITiktokOptions } from "./parser/type";
import { isParsedOptions, parseAweme } from "./parser/util";
import { Aweme } from "./types";

/**
 * Fetches a TikTok video or user profile based on the provided URL.
 *
 * @param url - The URL of the TikTok video or user profile.
 * @param options - Optional configuration options for the TikTok request.
 * @returns A Promise that resolves to an array of Aweme objects, a full IParsed object, or a Partial<IParsed> if keys are specified.
 * @throws An error if fetching fails or the aweme is not found.
 */
async function Tiktok<T extends ITiktokOptions>(
	url: string,
	options?: T
): Promise<
	TiktokRsp<T>
> {
	const response = await fetchAwemeList(url);
	if (!response) {
		throw new Error("Failed to fetch the response");
	}

	const [awemeId, awemeList] = response;
	if (!awemeList) {
		throw new Error("Failed to fetch the aweme list");
	}

	const aweme = awemeList.find((item) => item.aweme_id === awemeId);
	if (!aweme) {
		throw new Error("Failed to find the aweme");
	}

	return isParsedOptions(options)
		? parseAweme(aweme, options.keys ? { keys: options.keys } : undefined) as any
		: (awemeList as any);
}

export type TiktokRsp<T extends ITiktokOptions> = IParsed & Partial<
	Pick<
		Aweme,
		T extends { parse: true; keys: Array<keyof Aweme> } ? T["keys"][number] : never
	>
>

export default Tiktok;
