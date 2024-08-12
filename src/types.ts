export interface Aweme {
	aweme_id: string;
	desc: string;
	create_time: number;
	author: Author;
	music: Music;
	cha_list: ChaList[];
	video: Video;
	share_url: string;
	user_digged: number;
	statistics: Statistics;
	status: Status;
	rate: number;
	text_extra: TextExtra[];
	is_top: number;
	label_top: LabelTop;
	share_info: ShareInfo3;
	distance: string;
	video_labels: any[];
	is_vr: boolean;
	is_ads: boolean;
	aweme_type: number;
	cmt_swt: boolean;
	image_infos: any;
	risk_infos: RiskInfos;
	is_relieve: boolean;
	sort_label: string;
	position: any;
	uniqid_position: any;
	author_user_id: number;
	bodydance_score: number;
	geofencing: any;
	is_hash_tag: number;
	is_pgcshow: boolean;
	region: string;
	video_text: any[];
	collect_stat: number;
	label_top_text: any;
	group_id: string;
	prevent_download: boolean;
	nickname_position: any;
	challenge_position: any;
	item_comment_settings: number;
	with_promotional_music: boolean;
	long_video: any;
	item_duet: number;
	item_react: number;
	desc_language: string;
	interaction_stickers: any;
	misc_info: string;
	origin_comment_ids: any;
	commerce_config_data: any;
	distribute_type: number;
	video_control: VideoControl;
	has_vs_entry: boolean;
	commerce_info: CommerceInfo;
	need_vs_entry: boolean;
	anchors: any;
	hybrid_label: any;
	with_survey: boolean;
	geofencing_regions: any;
	aweme_acl: AwemeAcl;
	cover_labels: any;
	mask_infos: any[];
	search_highlight: any;
	playlist_blocked: boolean;
	green_screen_materials: any;
	interact_permission: InteractPermission;
	question_list: any;
	content_desc: string;
	content_desc_extra: any[];
	products_info: any;
	follow_up_publish_from_id: number;
	disable_search_trending_bar: boolean;
	image_post_info: ImagePostInfo;
	music_begin_time_in_ms: number;
	item_distribute_source: string;
	item_source_category: number;
	branded_content_accounts: any;
	is_description_translatable: boolean;
	follow_up_first_item_id: string;
	follow_up_item_id_groups: string;
	is_text_sticker_translatable: boolean;
	text_sticker_major_lang: string;
	original_client_text: OriginalClientText;
	music_selected_from: string;
	tts_voice_ids: any;
	reference_tts_voice_ids: any;
	voice_filter_ids: any;
	reference_voice_filter_ids: any;
	music_title_style: number;
	animated_image_info: AnimatedImageInfo;
	comment_config: CommentConfig;
	added_sound_music_info: AddedSoundMusicInfo;
	origin_volume: string;
	music_volume: string;
	support_danmaku: boolean;
	has_danmaku: boolean;
	muf_comment_info_v2: any;
	behind_the_song_music_ids: any;
	behind_the_song_video_music_ids: any;
	content_original_type: number;
	shoot_tab_name: string;
	content_type: string;
	content_size_type: number;
	operator_boost_info: any;
	log_info: LogInfo;
	main_arch_common: string;
	aigc_info: AigcInfo;
	banners: any;
	picked_users: any;
	comment_topbar_info: any;
}

export interface Author {
	uid: string;
	short_id: string;
	nickname: string;
	signature: string;
	avatar_thumb: AvatarThumb;
	avatar_medium: AvatarMedium;
	follow_status: number;
	is_block: boolean;
	custom_verify: string;
	unique_id: string;
	room_id: number;
	authority_status: number;
	verify_info: string;
	share_info: ShareInfo;
	with_commerce_entry: boolean;
	verification_type: number;
	enterprise_verify_reason: string;
	is_ad_fake: boolean;
	followers_detail: any;
	region: string;
	commerce_user_level: number;
	platform_sync_info: any;
	is_discipline_member: boolean;
	secret: number;
	prevent_download: boolean;
	geofencing: any;
	video_icon: VideoIcon;
	follower_status: number;
	comment_setting: number;
	duet_setting: number;
	download_setting: number;
	cover_url: any[];
	language: string;
	item_list: any;
	is_star: boolean;
	type_label: any[];
	ad_cover_url: any;
	comment_filter_status: number;
	avatar_168x168: Avatar168x168;
	avatar_300x300: Avatar300x300;
	relative_users: any;
	cha_list: any;
	sec_uid: string;
	need_points: any;
	homepage_bottom_toast: any;
	can_set_geofencing: any;
	white_cover_url: any;
	user_tags: any;
	bold_fields: any;
	search_highlight: any;
	mutual_relation_avatars: any;
	events: any;
	matched_friend: MatchedFriend;
	advance_feature_item_order: any;
	advanced_feature_info: any;
	user_profile_guide: any;
	shield_edit_field_info: any;
	can_message_follow_status_list: any;
	account_labels: any;
}

export interface AvatarThumb {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface AvatarMedium {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface ShareInfo {
	share_url: string;
	share_desc: string;
	share_title: string;
	share_qrcode_url: ShareQrcodeUrl;
	share_title_myself: string;
	share_title_other: string;
	share_desc_info: string;
	now_invitation_card_image_urls: any;
}

export interface ShareQrcodeUrl {
	uri: string;
	url_list: any[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface VideoIcon {
	uri: string;
	url_list: any[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Avatar168x168 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Avatar300x300 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface MatchedFriend {
	video_items: any;
	repost_items: any;
}

export interface Music {
	id: number;
	id_str: string;
	title: string;
	author: string;
	album: string;
	cover_large: CoverLarge;
	cover_medium: CoverMedium;
	cover_thumb: CoverThumb;
	play_url: PlayUrl;
	source_platform: number;
	duration: number;
	extra: string;
	user_count: number;
	position: any;
	collect_stat: number;
	status: number;
	offline_desc: string;
	owner_id: string;
	owner_nickname: string;
	is_original: boolean;
	mid: string;
	binded_challenge_id: number;
	author_deleted: boolean;
	owner_handle: string;
	author_position: any;
	prevent_download: boolean;
	strong_beat_url: StrongBeatUrl;
	external_song_info: any[];
	sec_uid: string;
	avatar_thumb: AvatarThumb2;
	avatar_medium: AvatarMedium2;
	preview_start_time: number;
	preview_end_time: number;
	is_commerce_music: boolean;
	is_original_sound: boolean;
	artists: any;
	lyric_short_position: any;
	mute_share: boolean;
	tag_list: any;
	is_author_artist: boolean;
	is_pgc: boolean;
	search_highlight: any;
	multi_bit_rate_play_info: any;
	tt_to_dsp_song_infos: any;
	recommend_status: number;
	uncert_artists: any;
}

export interface CoverLarge {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface CoverMedium {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface CoverThumb {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface PlayUrl {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface StrongBeatUrl {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface AvatarThumb2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface AvatarMedium2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface ChaList {
	cid: string;
	cha_name: string;
	desc: string;
	schema: string;
	author: Author2;
	user_count: number;
	share_info: ShareInfo2;
	connect_music: any[];
	type: number;
	sub_type: number;
	is_pgcshow: boolean;
	collect_stat: number;
	is_challenge: number;
	view_count: number;
	is_commerce: boolean;
	hashtag_profile: string;
	cha_attrs: any;
	banner_list: any;
	show_items: any;
	search_highlight: any;
}

export interface Author2 {
	followers_detail: any;
	platform_sync_info: any;
	geofencing: any;
	cover_url: any;
	item_list: any;
	type_label: any;
	ad_cover_url: any;
	relative_users: any;
	cha_list: any;
	need_points: any;
	homepage_bottom_toast: any;
	can_set_geofencing: any;
	white_cover_url: any;
	user_tags: any;
	bold_fields: any;
	search_highlight: any;
	mutual_relation_avatars: any;
	events: any;
	advance_feature_item_order: any;
	advanced_feature_info: any;
	user_profile_guide: any;
	shield_edit_field_info: any;
	can_message_follow_status_list: any;
	account_labels: any;
}

export interface ShareInfo2 {
	share_url: string;
	share_desc: string;
	share_title: string;
	bool_persist: number;
	share_title_myself: string;
	share_title_other: string;
	share_signature_url: string;
	share_signature_desc: string;
	share_quote: string;
	share_desc_info: string;
	now_invitation_card_image_urls: any;
}

export interface Video {
	play_addr: PlayAddr;
	cover: Cover;
	height: number;
	width: number;
	dynamic_cover: DynamicCover;
	origin_cover: OriginCover;
	ratio: string;
	download_addr: DownloadAddr;
	has_watermark: boolean;
	bit_rate: any[];
	duration: number;
	cdn_url_expired: number;
	need_set_token: boolean;
	tags: any;
	big_thumbs: any;
	is_bytevc1: number;
	meta: string;
	bit_rate_audio: any[];
}

export interface PlayAddr {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Cover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface DynamicCover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface OriginCover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface DownloadAddr {
	uri: string;
	url_list: any[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Statistics {
	aweme_id: string;
	comment_count: number;
	digg_count: number;
	download_count: number;
	play_count: number;
	share_count: number;
	forward_count: number;
	lose_count: number;
	lose_comment_count: number;
	whatsapp_share_count: number;
	collect_count: number;
	repost_count: number;
}

export interface Status {
	aweme_id: string;
	is_delete: boolean;
	allow_share: boolean;
	allow_comment: boolean;
	is_private: boolean;
	with_goods: boolean;
	private_status: number;
	in_reviewing: boolean;
	reviewed: number;
	self_see: boolean;
	is_prohibited: boolean;
	download_status: number;
}

export interface TextExtra {
	start: number;
	end: number;
	user_id: string;
	type: number;
	hashtag_name: string;
	hashtag_id: string;
	is_commerce: boolean;
	sec_uid: string;
}

export interface LabelTop {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface ShareInfo3 {
	share_url: string;
	share_desc: string;
	share_title: string;
	bool_persist: number;
	share_title_myself: string;
	share_title_other: string;
	share_link_desc: string;
	share_signature_url: string;
	share_signature_desc: string;
	share_quote: string;
	share_desc_info: string;
	now_invitation_card_image_urls: any;
	share_button_display_mode: number;
}

export interface RiskInfos {
	vote: boolean;
	warn: boolean;
	risk_sink: boolean;
	type: number;
	content: string;
}

export interface VideoControl {
	allow_download: boolean;
	share_type: number;
	show_progress_bar: number;
	draft_progress_bar: number;
	allow_duet: boolean;
	allow_react: boolean;
	prevent_download_type: number;
	allow_dynamic_wallpaper: boolean;
	timer_status: number;
	allow_music: boolean;
	allow_stitch: boolean;
}

export interface CommerceInfo {
	adv_promotable: boolean;
	branded_content_type: number;
}

export interface AwemeAcl {
	download_general: DownloadGeneral;
	download_mask_panel: DownloadMaskPanel;
	share_list_status: number;
	share_general: ShareGeneral;
	platform_list: any;
	share_action_list: any;
	press_action_list: any;
}

export interface DownloadGeneral {
	code: number;
	show_type: number;
	extra: string;
	transcode: number;
	mute: boolean;
}

export interface DownloadMaskPanel {
	code: number;
	show_type: number;
	extra: string;
	transcode: number;
	mute: boolean;
}

export interface ShareGeneral {
	code: number;
	show_type: number;
	extra: string;
	transcode: number;
	mute: boolean;
}

export interface InteractPermission {
	duet: number;
	stitch: number;
	duet_privacy_setting: number;
	stitch_privacy_setting: number;
	upvote: number;
	allow_adding_to_story: number;
	allow_create_sticker: AllowCreateSticker;
}

export interface AllowCreateSticker {
	status: number;
}

export interface ImagePostInfo {
	images: Image[];
	image_post_cover: ImagePostCover;
	post_extra: string;
}

export interface Image {
	display_image: DisplayImage;
	owner_watermark_image: OwnerWatermarkImage;
	user_watermark_image: UserWatermarkImage;
	thumbnail: Thumbnail;
	bitrate_images: any;
}

export interface DisplayImage {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface OwnerWatermarkImage {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface UserWatermarkImage {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Thumbnail {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface ImagePostCover {
	display_image: DisplayImage2;
	owner_watermark_image: OwnerWatermarkImage2;
	user_watermark_image: UserWatermarkImage2;
	thumbnail: Thumbnail2;
	bitrate_images: any;
}

export interface DisplayImage2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface OwnerWatermarkImage2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface UserWatermarkImage2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface Thumbnail2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface OriginalClientText {
	markup_text: string;
	text_extra: TextExtra2[];
}

export interface TextExtra2 {
	type: number;
	hashtag_name: string;
	sub_type: number;
	tag_id: string;
}

export interface AnimatedImageInfo {
	type: number;
	effect: number;
}

export interface CommentConfig {
	emoji_recommend_list: any;
	long_press_recommend_list: any;
	quick_comment_emoji_recommend_list: any;
}

export interface AddedSoundMusicInfo {
	id: number;
	id_str: string;
	title: string;
	author: string;
	album: string;
	cover_large: CoverLarge2;
	cover_medium: CoverMedium2;
	cover_thumb: CoverThumb2;
	play_url: PlayUrl2;
	source_platform: number;
	duration: number;
	extra: string;
	user_count: number;
	position: any;
	collect_stat: number;
	status: number;
	offline_desc: string;
	owner_id: string;
	owner_nickname: string;
	is_original: boolean;
	mid: string;
	binded_challenge_id: number;
	author_deleted: boolean;
	owner_handle: string;
	author_position: any;
	prevent_download: boolean;
	strong_beat_url: StrongBeatUrl2;
	external_song_info: any[];
	sec_uid: string;
	avatar_thumb: AvatarThumb3;
	avatar_medium: AvatarMedium3;
	preview_start_time: number;
	preview_end_time: number;
	is_commerce_music: boolean;
	is_original_sound: boolean;
	artists: any;
	lyric_short_position: any;
	mute_share: boolean;
	tag_list: any;
	is_author_artist: boolean;
	is_pgc: boolean;
	search_highlight: any;
	multi_bit_rate_play_info: any;
	tt_to_dsp_song_infos: any;
	recommend_status: number;
	uncert_artists: any;
}

export interface CoverLarge2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface CoverMedium2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface CoverThumb2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface PlayUrl2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface StrongBeatUrl2 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface AvatarThumb3 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface AvatarMedium3 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_prefix: any;
}

export interface LogInfo {
	order: string;
}

export interface AigcInfo {
	aigc_label_type: number;
}
