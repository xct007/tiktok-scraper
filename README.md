---

# Tiktok Video Fetcher

This project provides a TypeScript module for fetching and parsing TikTok videos and user profiles. The module allows you to fetch raw data from TikTok and optionally parse the data into a structured format, including the ability to dynamically add specific properties from the fetched data to the parsed result.

## Features

- **Fetch TikTok Data**: Retrieve raw data for TikTok videos and user profiles.
- **Parse Data**: Optionally parse the fetched data into a structured format.
- **Dynamic Key Inclusion**: Add specific properties from the fetched data to the parsed result.

## Installation

To install the dependencies and use the module, run:

```bash
npm install @xct007/tiktok-scraper
```

## Usage

Here’s how you can use the module to fetch and parse TikTok video data:

### Fetch Raw Data

```typescript
import Tiktok from "@xct007/tiktok-scraper";

Tiktok("https://vt.tiktok.com/ZGJBtcsDq/", {
	// Without parse option
	// The raw data will be returned
	parse: false,
})
	.then((data) => {
		console.log("Aweme List:", data);
	})
	.catch((error) => {
		console.error(error);
	});
```

### Parse Data with Specific Keys

You can specify the keys you want to include in the parsed result:

```typescript
import Tiktok from "@xct007/tiktok-scraper";

Tiktok("https://vt.tiktok.com/ZGJBtcsDq/", {
	parse: true,
	keys: ["desc_language"],
})
	.then((data) => {
		// The desc_language key
		// will be included in the parsed result
		console.log("Parsed Data:", data.desc_language);
	})
	.catch((error) => {
		console.error(error);
	});
```

## API

### `Tiktok(url: string, options?: ITiktokOptions): Promise<Aweme[] | IParsed | Partial<IParsed>>`

Fetches TikTok video or user profile data based on the provided URL.

- **url**: The URL of the TikTok video or user profile.
- **options**: Optional configuration options:
  - **parse**: `boolean` - If `true`, the data will be parsed, otherwise the raw data will be returned.
  - **keys**: `Array<keyof Aweme>` - Specify the keys to include in the parsed result.

Returns a `Promise` that resolves to either an array of `Aweme` objects, a full `IParsed` object, or a `Partial<IParsed>` object if keys are specified.

### `IParsed`

An interface that defines the structure of the parsed TikTok data. This structure can be extended dynamically based on the specified keys.

## Contributing

If you’d like to contribute to this project, feel free to submit a pull request or open an issue.

## Credits

This project was developed by **FrierenDv**.

## License

This project is licensed under the MIT License.

---
