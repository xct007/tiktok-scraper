const tiktok = require('./dist/cjs/index.cjs')

tiktok("https://vt.tiktok.com/ZGJBtcsDq/").then(async(json) => {
    console.log(json)
})
