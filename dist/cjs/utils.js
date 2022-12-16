"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwemeId = exports.API_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = (aweme) => {
    return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
exports.API_URL = API_URL;
const getAwemeId = async (url) => {
    // 	const REGEX = /\bhttps?:\/\/(?:m|www|vm)\.tiktok\.com\/\S*?\b(?:(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+)|(?=\w{7})(\w*?[A-Z\d]\w*)(?=\s|\/$))\b/;
    const Konto1 = /video\/([\d|\+]+)?\/?\?/;
    const valid = url.match(Konto1);
    if (valid) {
        return valid[1];
    }
    else {
        try {
            const data = await axios_1.default.get(url, {
                headers: {
                    "Accept-Encoding": "gzip"
                },
                maxRedirects: 0,
                timeout: 10000
            }).catch((e) => {
                return e.response.headers.location;
            });
            if (data) {
                const _url = data;
                const _valid = _url.match(Konto1);
                if (_valid) {
                    return _valid[1];
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (error) {
            return error;
        }
    }
};
exports.getAwemeId = getAwemeId;
//# sourceMappingURL=utils.js.map