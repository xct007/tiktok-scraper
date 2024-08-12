import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
	baseURL: "https://api22-normal-c-alisg.tiktokv.com",
	headers: {
		"Accept-Encoding": "deflate",
		"User-Agent": "okhttp/3.14.9",
	},
});

export default apiClient;
