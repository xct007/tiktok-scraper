import { Aweme } from "../types";
import apiClient from "./api";

const getAwemeId = async (url: string): Promise<string | null> => {
	const REGEXP = /(?:video|photo|user)\/(\d+)/;
	const valid = url.match(REGEXP);
	if (valid) {
		return valid[1];
	}
	try {
		const { data, headers } = await apiClient
			.get(url, {
				maxRedirects: 0,
			})
			.catch((e) => e.response);
		const match = data.match(REGEXP)?.[1] || headers.location.match(REGEXP)?.[1];
		if (!match) {
			throw new Error(data);
		}
		return match;
	} catch (error) {
		console.error("Failed to fetch the aweme ID:", error);
		return null;
	}
};

/**
 * Fetches the list of Aweme objects from the specified URL.
 *
 * @param url - The URL to fetch the Aweme list from.
 * @returns A promise that resolves to a tuple containing the Aweme ID and the list of Aweme objects, or null if the Aweme ID is not found or the data is invalid.
 */
const fetchAwemeList = async (
	url: string
): Promise<[Aweme["aweme_id"], Aweme[]] | null> => {
	const aweme_id = await getAwemeId(url);
	if (!aweme_id) {
		return null;
	}
	function device_idGenerator() {
		return Array(19)
			.fill(0)
			.map(() => Math.floor(Math.random() * 10))
			.join("");
	}
	const { data } = await apiClient.request<{ aweme_list?: Aweme[] }>({
		url: "/aweme/v1/feed/",
		method: "OPTIONS",
		params: {
			iid: device_idGenerator(),
			device_id: device_idGenerator(),
			version_code: "300904",
			aweme_id,
		},
	});
	if (!data || !data.aweme_list) {
		return null;
	}
	const { aweme_list } = data;
	return [aweme_id, aweme_list];
};

export default fetchAwemeList;
