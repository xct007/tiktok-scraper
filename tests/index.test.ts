import Tiktok from "../src/index";

describe("Tiktok", () => {
	
	let tiktokUrl: string;

	beforeAll(() => {
		tiktokUrl = "https://vt.tiktok.com/ZGJBtcsDq/";
	});

	it("should return aweme list", async () => {
		const result = await Tiktok(tiktokUrl);

		expect(result).toBeInstanceOf(Array);
	});
	it("should return aweme list with parse options", async () => {
		const options = { parse: true };

		const result = await Tiktok(tiktokUrl, {
			...options,
		});

		expect(result).toHaveProperty("author");
	});
	it("should return aweme list with parse options and keys", async () => {
		const options = { parse: true };

		const result = await Tiktok(tiktokUrl, {
			...options,
			keys: ["desc_language"],
		});

		expect(result).toHaveProperty("desc_language");
	});
});
