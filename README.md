## Tiktok scraper

![](https://static.zerochan.net/Frieren.full.3233127.jpg)

## How to use

#### 1. Install packages

```sh
npm install @xct007/tiktok-scraper
```

using yarn

```sh
yarn add @xct007/tiktok-scraper
```

#### 2. Import packages

- cjs

```js
const { Tiktok } = require('@xct007/tiktok-scraper');
```

- ESM

```js
import { Tiktok } from '@xct007/tiktok-scraper';
```

#### 3. Example

```js
const { Tiktok } = require('@xct007/tiktok-scraper');

const url = 'https://vt.tiktok.com/ZGJBtcsDq/';
Tiktok(url).then(async (json) => {
  console.log(json);
});
```

- Output

```js
{
  status: Boolean,
  process_time: Number,
  aweme_id: String,
  region: String,
  desc: String,
  author: {
    uid: String,
    unique_id: String,
    nickname: String,
  },
  duration: Number,
  download: {
    nowm: String,
    wm: String,
    music: String,
    music_info: {
      id: Number,
      title: String,
      author: String,
      is_original: Boolean,
      cover_hd: String,
      cover_large: String,
      cover_medium: String,
    }
  }
}
```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Repo
2. Commit your Changes
3. Push to the Branch
4. Open a Pull Request

## Contact

David - [@david.stefen](https://instagram.com/david.stefen)
