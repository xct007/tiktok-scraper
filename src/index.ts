import axios from 'axios';
import { API_URL, getAwemeId } from './utils';

type Results = {
	status: boolean;
	process_time?: number;
	aweme_id?: string | number;
	region?: string;
	desc?: string;
	create_time?: number | string;
	author?: {
		uid?: number | string;
		unique_id?: number | string;
		nickname?: string;
		birthday?: string;
	};
	duration?: number | string;
	download?: {
		nowm?: string;
		wm?: string;
		music?: string;
		music_info?: {
			id?: string;
			title?: string;
			author?: string;
			is_original?: string;
			cover_hd?: string;
			cover_large?: string;
			cover_medium?: string;
		};
	};
};
export const Tiktok = async (url: string): Promise<Results> => {
	let results: Results;
	const Now = Date.now();
	const valid = await getAwemeId(url);
	if (valid) {
		const data = await axios
			.get(API_URL(valid), {
				headers: {
					'Accept-Encoding': 'deflate',
					'User-Agent': 'okhttp/3.14.9',
				},
			})
			.catch((e: any) => e.response);
		if (data && data.data && data.data.aweme_list) {
			const obj = data?.data?.aweme_list.find((o: any) => o.aweme_id === valid);
			results = {
				status: true,
				process_time: Date.now() - Now,
				aweme_id: obj.aweme_id,
				region: obj.region,
				desc: obj.desc,
				create_time: obj.create_time,
				author: {
					uid: obj.author.uid,
					unique_id: obj.author.unique_id,
					nickname: obj.author.nickname,
					birthday: obj.author.birthday,
				},
				duration: obj.music.duration,
				download: {
					nowm: obj.video.play_addr.url_list[0],
					wm: obj.video.download_addr.url_list[0],
					music: obj.music.play_url.url_list[0],
					music_info: {
						id: obj.music.id,
						title: obj.music.title,
						author: obj.music.author,
						is_original: obj.music.is_original,
						cover_hd: obj.music.cover_hd.url_list[0],
						cover_large: obj.music.cover_large.url_list[0],
						cover_medium: obj.music.cover_medium.url_list[0],
					},
				},
			};
		} else {
			results = { status: false };
		}
	} else {
		results = { status: false };
	}
	return results;
};
export default Tiktok;
