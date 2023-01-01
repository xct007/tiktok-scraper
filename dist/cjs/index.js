"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiktok = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_js_1 = require("./utils.js");
const Tiktok = async (url) => {
    let results;
    const Now = Date.now();
    const valid = await (0, utils_js_1.getAwemeId)(url);
    if (valid) {
        const data = await axios_1.default
            .get((0, utils_js_1.API_URL)(valid), {
            headers: {
                'Accept-Encoding': 'deflate',
                'User-Agent': 'okhttp/3.14.9',
            },
        })
            .catch((e) => e.response);
        if (data && data.data && data.data.aweme_list) {
            const obj = data.data.aweme_list.find((o) => o.aweme_id === valid);
            results = {
                status: true,
                process_time: Now - Date.now(),
                aweme_id: obj.aweme_id,
                region: obj.region,
                desc: obj.desc,
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
        }
        else {
            results = { status: false };
        }
    }
    else {
        results = { status: false };
    }
    return results;
};
exports.Tiktok = Tiktok;
exports.default = exports.Tiktok;
//# sourceMappingURL=index.js.map