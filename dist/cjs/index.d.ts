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
declare const Tiktok: (url: string) => Promise<downloadResults>;
export { Tiktok };
export default Tiktok;
