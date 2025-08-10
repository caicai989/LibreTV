// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成"性享受"麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女"下海"，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
    },
    {
  "spider": "./jar/fm_push.jar;md5;5d1ab45ff233a49e9bc9b9a1554b38a9",
  "lives": [
    {
      "name": "adult_2023",
      "type": 0,
      "url": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/json/adult_2023.txt",
      "playerType": 2,
      "ua": "okhttp/3.15",
      "epg": "",
      "logo": ""
    },
    {
      "name": "madou",
      "type": 0,
      "url": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/json/madou.txt",
      "playerType": 2,
      "ua": "okhttp/3.15",
      "epg": "",
      "logo": ""
    },
    {
      "name": "18_adult",
      "type": 0,
      "url": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/json/18_adult.txt",
      "playerType": 2,
      "ua": "okhttp/3.15",
      "epg": "",
      "logo": ""
    },
    {
      "name": "adult_2",
      "type": 0,
      "url": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/json/adult_2.txt",
      "playerType": 2,
      "ua": "okhttp/3.15",
      "epg": "",
      "logo": ""
    },
    {
      "name": "adult",
      "type": 0,
      "url": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/json/adult.txt",
      "playerType": 2,
      "ua": "okhttp/3.15",
      "epg": "",
      "logo": ""
    }
  ],
  "sites": [
    {
            "key": "av资源",
            "name": "av资源",
            "type": 1,
            "api": "https://api.souavzy.vip/api.php/provide/vod/at/json",
            "searchable": 1,
            "style": {
                "type": "rect",
                "ratio": 1.33
            },
            "changeable": 1
        },
		{
            "key": "大奶子资源",
            "name": "大奶子资源",
            "type": 1,
            "api": "https://apidanaizi.com/api.php/provide/vod",
            "searchable": 1,
            "style": {
                "type": "rect",
                "ratio": 1.33
            },
            "changeable": 1
        },
    {
      "key": "msv ",
      "name": "美少女 ",
      "type": 0,
      "api": "https://www.msnii.com/api/xml.php ",
      "searchable": 1,
      "changeable": 1,
	  "style":{ "type":"rect", "ratio":1.33 }
    },
    {
      "key": "ysj ",
      "name": "饮水机 ",
      "type": 0,
      "api": "https://www.xrbsp.com/api/xml.php ",
      "searchable": 1,
      "changeable": 1,
	  "style":{ "type":"rect", "ratio":1.33 }
    },
    {
      "key": "xne ",
      "name": "香奶儿 ",
      "type": 0,
      "api": "https://www.gdlsp.com/api/xml.php ",
      "searchable": 1,
      "changeable": 1,
	  "style":{ "type":"rect", "ratio":1.33 }
    },
    {
      "key": "bp ",
      "name": "白嫖 ",
      "type": 0,
      "api": "https://www.kxgav.com/api/xml.php ",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "caoliuzyw",
      "name": "草榴",
      "type": 1,
      "api": "https://www.caoliuzyw.com/api.php/provide/vod/at/json/",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "ikunzyapi",
      "name": "爱坤",
      "type": 1,
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "feisuzyapi",
      "name": "飞速",
      "type": 1,
      "api": "https://www.feisuzyapi.com/api.php/provide/vod/?ac=list",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "hav ",
      "name": "黄艾薇 ",
      "type": 0,
      "api": "https://www.pgxdy.com/api/xml.php ",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "apilj",
      "name": "辣椒",
      "type": 0,
      "api": "https://apilj.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "changeable": 1
    },
    {
      "key": "timizy",
      "name": "甜蜜资源",
      "type": 1,
      "api": "https://timizy10.cc/api.php/provide/vod/?ac=list",
      "searchable": 1,
      "changeable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "泥巴",
      "name": "泥巴",
      "type": 3,
      "api": "csp_NiNi",
      "searchable": 1,
      "ext": "1"
    },
    {
      "key": "量子",
      "name": "量子",
      "type": 0,
      "api": "https://cj.lziapi.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "changeable": 1,
      "categories": [
        "伦理片"
      ]
    },
    {
      "key": "非凡",
      "name": "非凡",
      "type": 0,
      "api": "http://cj.ffzyapi.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "changeable": 1,
      "categories": [
        "伦理片"
      ]
    },
    {
      "key": "cat_js_18av",
      "name": "🐱18av[CAT]",
      "type": 3,
      "api": "./18a_open.js",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "cat_js_mt",
      "name": "🐱蜜桃[CAT]",
      "type": 3,
      "api": "./mtsp_open.js",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "lf_js_search",
      "name": "搜索 | lf_search",
      "type": 3,
      "searchable": 0,
      "changeable": 1,
      "quickSearch": 0,
      "filterable": 0,
      "api": "./js/lf_search3_min.js"
    },
    {
      "key": "lf_js_p2p",
      "name": "磁力 | lf_p2p",
      "type": 3,
      "searchable": 1,
      "changeable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "api": "./js/lf_p2p2_min.js",
      "ext": "18+"
    },
    {
      "key": "csp_JavDb",
      "name": "🧲JavDb",
      "type": 3,
      "api": "csp_JavDb",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 0
    },
    {
      "key": "Jable",
      "name": "Jable",
      "type": 3,
      "api": "csp_Jable",
      "searchable": 1,
	  "style":{ "type":"rect", "ratio":1.33 }
    },
    {
      "key": "MissAV",
      "name": "MissAV",
      "type": 3,
      "api": "csp_Miss",
      "searchable": 1,
	  "style":{ "type":"rect", "ratio":1.33 }
    },
    {
      "key": "Supjav",
      "name": "Supjav",
      "type": 3,
      "api": "csp_Supjav",
      "searchable": 1
    },
    {
      "key": "Hanime",
      "name": "Hanime",
      "type": 3,
      "api": "csp_Hanime",
      "searchable": 1
    },
    {
      "key": "51smt4.xyz",
      "name": "成人01",
      "type": 1,
      "api": "http://51smt4.xyz/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "jcspcj8.com",
      "name": "成人02",
      "type": 0,
      "api": "http://jcspcj8.com/api?ac=videolist",
      "searchable": 1
    },
    {
      "key": "bttcj.com",
      "name": "成人03",
      "type": 0,
      "api": "http://bttcj.com/inc/sapi.php",
      "searchable": 1
    },
    {
      "key": "cjmygzy.com",
      "name": "成人04",
      "type": 0,
      "api": "http://cjmygzy.com/inc/sapi.php?ac=videolist",
      "searchable": 1
    },
    {
      "key": "91md.me",
      "name": "成人05",
      "type": 1,
      "api": "http://91md.me/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "dadiapi.com",
      "name": "成人06",
      "type": 0,
      "api": "http://dadiapi.com/api.php",
      "searchable": 1
    },
    {
      "key": "secj8.com",
      "name": "成人07",
      "type": 0,
      "api": "http://secj8.com/inc/sapi.php?ac=videolist",
      "searchable": 1
    },
    {
      "key": "api.putaozy.net",
      "name": "成人08",
      "type": 1,
      "api": "http://api.putaozy.net/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "llzxcj.com",
      "name": "成人09",
      "type": 0,
      "api": "http://llzxcj.com/inc/sck.php?ac=videolist",
      "searchable": 1
    },
    {
      "key": "apilj.com",
      "name": "成人10",
      "type": 1,
      "api": "http://apilj.com/api.php/provide/vod/at/json/",
      "searchable": 1
    },
    {
      "key": "f2dcj6.com",
      "name": "成人11",
      "type": 0,
      "api": "http://f2dcj6.com/sapi?ac=videolist",
      "searchable": 1
    },
    {
      "key": "99zy.pw",
      "name": "成人12",
      "type": 1,
      "api": "http://99zy.pw/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "ggmmzy.com",
      "name": "成人13",
      "type": 0,
      "api": "http://www.ggmmzy.com:9999/inc/xml",
      "searchable": 1
    },
    {
      "key": "fhapi9.com",
      "name": "成人14",
      "type": 1,
      "api": "http://fhapi9.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "feifei67.com",
      "name": "成人15",
      "type": 1,
      "api": "http://www.feifei67.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "sdszyapi.com",
      "name": "成人16",
      "type": 0,
      "api": "http://sdszyapi.com/home/cjapi/asbb/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "madouse.la",
      "name": "成人17",
      "type": 1,
      "api": "http://madouse.la/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "xjjzyapi.com",
      "name": "成人18",
      "type": 0,
      "api": "http://xjjzyapi.com/home/cjapi/askl/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "shabizy.com",
      "name": "成人19",
      "type": 0,
      "api": "http://www.shabizy.com:777/inc/sea",
      "searchable": 1
    },
    {
      "key": "caiji21.com",
      "name": "成人20",
      "type": 0,
      "api": "http://www.caiji21.com/home/cjapi/klkl/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji25.com",
      "name": "成人21",
      "type": 0,
      "api": "http://www.caiji25.com/home/cjapi/p0as/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji26.com",
      "name": "成人22",
      "type": 0,
      "api": "http://caiji26.com/home/cjapi/p0g8/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji24.com",
      "name": "成人23",
      "type": 0,
      "api": "http://www.caiji24.com/home/cjapi/p0d2/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "lbapiby.com",
      "name": "成人24",
      "type": 0,
      "api": "http://lbapiby.com/api.php/provide/vod/at/xml",
      "searchable": 1
    },
    {
      "key": "api.maozyapi.com",
      "name": "成人25",
      "type": 1,
      "api": "https://api.maozyapi.com/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "888dav.com",
      "name": "成人26",
      "type": 1,
      "api": "https://www.888dav.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "mgav1.cc",
      "name": "成人27",
      "type": 0,
      "api": "https://www.mgav1.cc/api.php/provide/vod/at/xml",
      "searchable": 1
    },
    {
      "key": "mgzyz1.com",
      "name": "成人28",
      "type": 1,
      "api": "https://mgzyz1.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "msnii.com",
      "name": "成人29",
      "type": 0,
      "api": "https://www.msnii.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "kkzy.me",
      "name": "成人30",
      "type": 1,
      "api": "https://kkzy.me/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "caiji.huakuiapi.com",
      "name": "成人31",
      "type": 1,
      "api": "https://caiji.huakuiapi.com/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "siwazyw.cc",
      "name": "成人32",
      "type": 1,
      "api": "https://siwazyw.cc/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "pgxdy.com",
      "name": "成人33",
      "type": 0,
      "api": "https://www.pgxdy.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "api.sexnguon.com",
      "name": "成人34",
      "type": 1,
      "api": "https://api.sexnguon.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "dmmapi.com",
      "name": "成人35",
      "type": 0,
      "api": "https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "xx55zyapi.com",
      "name": "成人36",
      "type": 0,
      "api": "https://xx55zyapi.com/home/cjapi/ascf/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "kxgav.com",
      "name": "成人37",
      "type": 0,
      "api": "https://www.kxgav.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "caiji02.com",
      "name": "成人38",
      "type": 0,
      "api": "https://www.caiji02.com/home/cjapi/cfas/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "xrbsp.com",
      "name": "成人39",
      "type": 0,
      "api": "https://www.xrbsp.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "caiji07.com",
      "name": "成人40",
      "type": 0,
      "api": "https://www.caiji07.com/home/cjapi/cfcf/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "lbapi9.com",
      "name": "成人41",
      "type": 1,
      "api": "https://lbapi9.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "caiji03.com",
      "name": "成人42",
      "type": 0,
      "api": "https://www.caiji03.com/home/cjapi/cfg8/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji08.com",
      "name": "成人43",
      "type": 0,
      "api": "https://www.caiji08.com/home/cjapi/cfkl/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji10.com",
      "name": "成人44",
      "type": 0,
      "api": "https://www.caiji10.com/home/cjapi/cfs6/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "52zyapi.com",
      "name": "成人45",
      "type": 0,
      "api": "https://52zyapi.com/home/cjapi/asda/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "apittzy.com",
      "name": "成人46",
      "type": 1,
      "api": "https://apittzy.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "api.xiuseapi.com",
      "name": "成人47",
      "type": 1,
      "api": "https://api.xiuseapi.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "caiji01.com",
      "name": "成人48",
      "type": 0,
      "api": "https://www.caiji01.com/home/cjapi/cfd2/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji22.com",
      "name": "成人49",
      "type": 0,
      "api": "https://www.caiji22.com/home/cjapi/klp0/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji23.com",
      "name": "成人50",
      "type": 0,
      "api": "https://www.caiji23.com/home/cjapi/kls6/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "afasu.com",
      "name": "成人51",
      "type": 0,
      "api": "https://www.afasu.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "hghhh.com",
      "name": "成人52",
      "type": 1,
      "api": "https://hghhh.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "sewozyapi.com",
      "name": "成人53",
      "type": 1,
      "api": "https://sewozyapi.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "gdlsp.com",
      "name": "成人54",
      "type": 0,
      "api": "https://www.gdlsp.com/api/xml.php",
      "searchable": 1
    },
    {
      "key": "caiji04.com",
      "name": "成人55",
      "type": 0,
      "api": "https://www.caiji04.com/home/cjapi/cfc7/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji09.com",
      "name": "成人56",
      "type": 0,
      "api": "https://www.caiji09.com/home/cjapi/cfp0/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji05.com",
      "name": "成人57",
      "type": 0,
      "api": "https://www.caiji05.com/home/cjapi/cfda/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "jgczyapi.com",
      "name": "成人58",
      "type": 0,
      "api": "https://jgczyapi.com/home/cjapi/kld2/mc10/vod/xml",
      "searchable": 1
    },
    {
      "key": "caiji.caomeiapi.com",
      "name": "成人59",
      "type": 1,
      "api": "https://caiji.caomeiapi.com/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "caiji.523zyw.com",
      "name": "成人60",
      "type": 1,
      "api": "https://caiji.523zyw.com/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "caiji.naichaapi.com",
      "name": "成人61",
      "type": 1,
      "api": "https://caiji.naichaapi.com/inc/apijson_vod.php",
      "searchable": 1
    },
    {
      "key": "api.apilyzy.com",
      "name": "成人62",
      "type": 1,
      "api": "https://api.apilyzy.com/api.php/provide/vod/",
      "searchable": 1
    },
    {
      "key": "push_agent",
      "name": "推送 | lf_push",
      "type": 3,
      "searchable": 0,
      "changeable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "api": "./js/lf_pushagent_min.js",
      "ext": "https://mirror.ghproxy.com/https://raw.githubusercontent.com/qirenzhidao/tvbox18/main/t"
    }
  ],
  "doh": [
    {
      "name": "Google",
      "url": "https://dns.google/dns-query",
      "ips": [
        "8.8.4.4",
        "8.8.8.8"
      ]
    },
    {
      "name": "Cloudflare",
      "url": "https://cloudflare-dns.com/dns-query",
      "ips": [
        "1.1.1.1",
        "1.0.0.1",
        "2606:4700:4700::1111",
        "2606:4700:4700::1001"
      ]
    },
    {
      "name": "AdGuard",
      "url": "https://dns.adguard.com/dns-query",
      "ips": [
        "94.140.14.140",
        "94.140.14.141"
      ]
    },
    {
      "name": "DNSWatch",
      "url": "https://resolver2.dns.watch/dns-query",
      "ips": [
        "84.200.69.80",
        "84.200.70.40"
      ]
    },
    {
      "name": "Quad9",
      "url": "https://dns.quad9.net/dns-quer",
      "ips": [
        "9.9.9.9",
        "149.112.112.112"
      ]
    }
  ],
  "rules": [
    {
      "hosts": [
        "*",
        ".*"
      ],
      "name": "proxy"
    },
    {
      "name": "磁力廣告",
      "hosts": [
        "magnet"
      ],
      "regex": [
        "最 新",
        "直 播",
        "更 新"
      ]
    },
    {
      "name": "量子",
      "hosts": [
        "vip.lz",
        "hd.lz",
        "v.cdnlz"
      ],
      "regex": [
        "18.5333"
      ]
    },
    {
      "name": "非凡",
      "hosts": [
        "vip.ffzy",
        "hd.ffzy"
      ],
      "regex": [
        "25.0666",
        "25.08"
    
    }
  


    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com',
        name: '玉兔资源',
        adult: true
    },

    // 下面是资源失效率高的API源，不建议使用
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速播资源'
    },
    fczy: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢资源'
    },
    ukzy: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源'
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
