"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwemeId = exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
// TODO: Add TIKTOK EFFECTS API
const API = {
    download: (aweme) => {
        // I can't get new api, yet. Just let use this.
        return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=FrierenDv&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
    },
};
exports.API = API;
/** Help me with this */
const getAwemeId = async (url) => {
    let result;
    const REGEXP = /video\/([\d|\+]+)?\/?/;
    const valid = url.match(REGEXP);
    if (valid) {
        return valid[1];
    }
    else {
        result = false;
        try {
            const data = await axios_1.default
                .get(url, {
                headers: {
                    'Accept-Encoding': 'deflate',
                },
                maxRedirects: 0,
            })
                .catch((e) => { var _a, _b; return (_b = (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.location; });
            if (data) {
                const _url = data;
                const _valid = _url.match(REGEXP);
                if (_valid) {
                    result = _valid[1];
                }
            }
        }
        catch { }
    }
    return result;
};
exports.getAwemeId = getAwemeId;
