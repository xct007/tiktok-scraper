import axios from 'axios';
import { API_URL, getAwemeId } from './utils.js';

const Tiktok = async(url: string): Promise<any|boolean> => {
    const Now = Date.now();
    const valid = await getAwemeId(url);
    if (valid) {
        const { data } = await axios.get(API_URL(valid), {
            headers: {
                "User-Agent": "okhttp/3.14.9"
            }
        });
        if (data) {
            const obj = data.aweme_list.find((o: any) => o.aweme_id === valid)
            return {
                process_time: Now - Date.now(),
                aweme_id: obj.aweme_id,
                region: obj.region,
                desc: obj.desc,
                author: {
                    uid: obj.author.uid,
                    unique_id: obj.author.unique_id,
                    nickname: obj.author.nickname,
                    birthday: obj.author.birthday
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
            }
        } else {
            return false
        }
    }
}
export default Tiktok
