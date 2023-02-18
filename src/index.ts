import axios from 'axios';
import { API, getAwemeId } from './Config.js';

type downloadResults = {
	status: boolean;
	error?: string;
	process_time?: number;
	aweme_id?: string | number;
	region?: string;
	desc?: string;
	create_time?: number;
	author?: {
		uid: number;
		unique_id: string;
		nickname: string;
		birthday: string;
	};
	duration?: number;
	download?: {
		nowm: string;
		wm: string;
		music: string;
		music_info: {
			id: string;
			title: string;
			author: string;
			is_original: string;
			cover_hd: string;
			cover_large: string;
			cover_medium: string;
		};
	};
	statistics?: {
		comment_count: number;
		digg_count: number;
		download_count: number;
		play_count: number;
		share_count: number;
	};
};
const Tiktok = async (url: string): Promise<downloadResults> => {
	let results: downloadResults;
	const Now = Date.now();
	const valid = await getAwemeId(url);
	results = { status: false };
	if (valid) {
		try {
			const { data } = await axios
				.get(API.download(valid), {
					headers: {
						'Accept-Encoding': 'deflate',
						'User-Agent': 'okhttp/3.14.9',
					},
				})
				.catch((e: any) => e?.response);
			if (data && data.aweme_list) {
				const obj = data.aweme_list.find((o: any) => o.aweme_id === valid);
				Object.assign(results, {
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
						birthday: obj.author.birthday, // Probably unused
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
					// Take what we need
					statistics: {
						comment_count: obj?.statistics?.comment_count,
						digg_count: obj?.statistics?.digg_count,
						download_count: obj?.statistics?.download_count,
						play_count: obj?.statistics?.play_count,
						share_count: obj?.statistics?.share_count,
					},
				});
			}
		} catch (e: any) {
			Object.assign(results, {
				error: String(e),
			});
		}
	} else {
		Object.assign(results, {
			error: 'Invalid url ?',
		});
	}
	return results;
};
export { Tiktok };
export default Tiktok;
