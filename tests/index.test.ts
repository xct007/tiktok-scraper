import Tiktok from "../src/index";

describe("Tiktok", () => {
	it("should return aweme list", async () => {
		const url = "https://vt.tiktok.com/ZGJBtcsDq/";

		const result = await Tiktok(url);

		expect(result).toBeInstanceOf(Array);
	});
	it("should return aweme list with parse options", async () => {
		const url = "https://vt.tiktok.com/ZGJBtcsDq/";
		const options = { parse: true };

		const result = await Tiktok(url, {
			...options,
		});

		expect(result).toHaveProperty("author");
	});
	it("should return aweme list with parse options and keys", async () => {
		const url = "https://vt.tiktok.com/ZGJBtcsDq/";
		const options = { parse: true };

		const result = await Tiktok(url, {
			...options,
			keys: ["desc_language"],
		});

		expect(result).toHaveProperty("desc_language");
	});
});
