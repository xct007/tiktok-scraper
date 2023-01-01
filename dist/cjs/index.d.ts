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
export declare const Tiktok: (url: string) => Promise<Results>;
export default Tiktok;
//# sourceMappingURL=index.d.ts.map