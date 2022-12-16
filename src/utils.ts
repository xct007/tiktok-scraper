import axios from 'axios';
const API_URL = (aweme: number | string) => {
	return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`
}

const getAwemeId = async (url: string): Promise<any|boolean> => {
	const REGEX = /\bhttps?:\/\/(?:m|www|vm)\.tiktok\.com\/\S*?\b(?:(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+)|(?=\w{7})(\w*?[A-Z\d]\w*)(?=\s|\/$))\b/;
	const valid = url.match(REGEX)
	if (valid) {
		return valid[1]
	} else {
		try {
			const data = await axios.get(url)
			const _url = data.request._redirectable._options.href;
            const _valid = _url.match(REGEX)
			if (_valid) {
				return _valid[1]
			} else {
				return false
			}
		} catch {
			return false
		}
	}
}
export { API_URL, getAwemeId }
