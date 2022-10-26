## Tiktok scraper

![](https://static.zerochan.net/Frieren.full.3233127.jpg)

## How to use

#### 1. Install packages

```sh
npm install @xct007/tiktok-scraper
```

or

```sh
yarn add @xct007/tiktok-scraper
```

#### 2. Import packages

- cjs

```js
const tiktok = require("@xct007/tiktok-scraper");
```

- ESM

```ts
import tiktok from "@xct007/tiktok-scraper";
```

#### 3. Example

```js
const tiktok = require("@xct007/tiktok-scraper");

let url = "https://vt.tiktok.com/ZGJBtcsDq/";
tiktok(url).then(async (json) => {
  console.log(json);
});
```

- Output

```json
{
  "process_time": 2676,
  "aweme_id": "6981186686579494145",
  "region": "RU",
  "desc": "#GenshinImpact #xiao #геншинимпакт #сяо #fyp #fypシ",
  "author": {
    "uid": "6832340325882987525",
    "unique_id": "monyaxa",
    "nickname": "моняша"
  },
  "duration": 27,
  "download": {
    "nowm": "https://v38.tiktokcdn.com/379359d424fe8c021d335664fd1ddfa6/63595a7b/video/tos/alisg/tos-alisg-pve-0037c001/694bfefef14749e6bd106445647064fd/?a=1180&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2470&bt=1235&cs=0&ds=6&ft=FcAYiNbhVUxwUatptdHOJLO55pRqR0iXXJApQlMyeC_O&mime_type=video_mp4&qs=0&rc=Njw1M2dpNWYzOjU0M2Q7NEBpanhweDY6ZmQ1NjMzODczNEBjMzIuNWE0NmIxMDQxLV9fYSNmbi1icjRfZGVgLS1kMS1zcw%3D%3D&l=202210261003450102450130380C036B0C&btag=80000&cc=f",
    "wm": "https://v38.tiktokcdn.com/e904fff28f5661b97dd632a4c02a055c/63595a7b/video/tos/alisg/tos-alisg-pve-0037c001/a78982b719c44a7b913aa4c80558b779/?a=1180&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2384&bt=1192&cs=0&ds=3&ft=FcAYiNbhVUxwUatptdHOJLO55pRqR0iXXJApQlMyeC_O&mime_type=video_mp4&qs=0&rc=NDo6OztpOmc4MzhnaWllZUBpanhweDY6ZmQ1NjMzODczNEBhMS8xMjNjNTQxL2FiMzBjYSNmbi1icjRfZGVgLS1kMS1zcw%3D%3D&l=202210261003450102450130380C036B0C&btag=80000&cc=f",
    "music": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6955925411251522310.mp3",
    "music_info": {
      "id": 6955925330544627000,
      "title": "original sound - khirq",
      "author": "khira",
      "is_original": false,
      "cover_hd": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a2c3cf143095a16d08548abe5f75e8bc~c5_1080x1080.webp?x-expires=1666864800&x-signature=NMoNEmfW187fE26N7UBzeYPHtps%3D",
      "cover_large": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a2c3cf143095a16d08548abe5f75e8bc~c5_1080x1080.webp?x-expires=1666864800&x-signature=NMoNEmfW187fE26N7UBzeYPHtps%3D",
      "cover_medium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a2c3cf143095a16d08548abe5f75e8bc~c5_720x720.webp?x-expires=1666864800&x-signature=1p3zb65%2F4lDZta%2FNVe%2FcEdOyDXk%3D"
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
