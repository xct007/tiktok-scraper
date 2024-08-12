import { Author, Aweme, Music } from "../types";

export interface ITiktokOptions {
	/**
	 * Determines whether to parse the video or not.
	 */
	parse?: boolean;
	/**
	 * The keys to parse from the video.
	 * If the keys are not specified, the full IParsed object is returned.
	 */
	keys?: Array<keyof Aweme>;
}

export interface IParsed {
	/**
	 * The unique identifier for the aweme.
	 */
	aweme_id: string;
	/**
	 * The region name or code.
	 */
	region: string;
	/**
	 * The description of the content.
	 */
	desc: string;
	/**
	 * The timestamp of creation.
	 */
	create_time: number;
	/**
	 * Information about the author.
	 */
	author: Author;
	/**
	 * The duration of the video, if applicable.
	 */
	duration: number;
	/**
	 * The download links for the content.
	 */
	download: {
		/**
		 * The cover images if the resource is a photo.
		 */
		covers: string[] | null;
		/**
		 * The video download link without a watermark.
		 */
		nowm: string | null;
		/**
		 * The video download link with a watermark.
		 */
		wm: string | null;
		/**
		 * The music download link.
		 */
		music: string;
		/**
		 * Information about the music.
		 */
		music_info: Music;
	};
}
