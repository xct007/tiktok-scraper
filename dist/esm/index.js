import axios from 'axios';
import { API, getAwemeId } from './Config.js';
const Tiktok = async (url) => {
    var _a, _b, _c, _d, _e;
    let results;
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
                .catch((e) => e === null || e === void 0 ? void 0 : e.response);
            if (data && data.aweme_list) {
                const obj = data.aweme_list.find((o) => o.aweme_id === valid);
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
                        comment_count: (_a = obj === null || obj === void 0 ? void 0 : obj.statistics) === null || _a === void 0 ? void 0 : _a.comment_count,
                        digg_count: (_b = obj === null || obj === void 0 ? void 0 : obj.statistics) === null || _b === void 0 ? void 0 : _b.digg_count,
                        download_count: (_c = obj === null || obj === void 0 ? void 0 : obj.statistics) === null || _c === void 0 ? void 0 : _c.download_count,
                        play_count: (_d = obj === null || obj === void 0 ? void 0 : obj.statistics) === null || _d === void 0 ? void 0 : _d.play_count,
                        share_count: (_e = obj === null || obj === void 0 ? void 0 : obj.statistics) === null || _e === void 0 ? void 0 : _e.share_count,
                    },
                });
            }
        }
        catch (e) {
            Object.assign(results, {
                error: String(e),
            });
        }
    }
    else {
        Object.assign(results, {
            error: 'Invalid url ?',
        });
    }
    return results;
};
export { Tiktok };
export default Tiktok;
