/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","bfa3b234b832bcb752ccd0332d03cebe"],["/buffifly/2021/07/02/你好/index.html","6f63c8c73a7212555c681e643f8aa50d"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","90ce277351f5a368c745aea68bec8aa4"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","0f99db7ebeca0072ebea48a05e37c80c"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","451fe31067c504f0f4ef9ee36335cc96"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","2722cdf264d2f67b029d0340f3aa3758"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","63407861f2c2133b595dcf500855b658"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","4ffec548e7e660feb83dd2618ba8dcec"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","2e89d3cb7fdddfb65ee481fa7f1ae8f8"],["/buffifly/2021/07/13/热部署Devtools/index.html","66068faeaf8c28a159ebdbe93d5d4e64"],["/buffifly/2021/07/15/Redis持久化/index.html","7dd04c15a03d6b85ba2fdfb4ce9fd87b"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","84034b93ca2543904494d955e130bd16"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","76fc6188733a7b13b6569db8754a767b"],["/buffifly/about/index.html","dade892a83ee725baafd107a030f0672"],["/buffifly/archives/2021/07/index.html","8a4dd60ec71be6e329c3dd750d772e0c"],["/buffifly/archives/2021/07/page/2/index.html","acbeedfe25ff2713afed95cb2b0d5699"],["/buffifly/archives/2021/07/page/3/index.html","4051fb9df73979d40a55d056c3762a52"],["/buffifly/archives/2021/index.html","0fa085427b5b361289d56239b14b7f40"],["/buffifly/archives/2021/page/2/index.html","d699f00566a9479e6cbe05c8bc2ceaba"],["/buffifly/archives/2021/page/3/index.html","07b84e059e36d51fdc5646feebbc77e7"],["/buffifly/archives/index.html","4ac772534105df10b988fa5e169f7b07"],["/buffifly/archives/page/2/index.html","52cfb71e85fbb8548d75b2f9f1b94553"],["/buffifly/archives/page/3/index.html","5f1def5d424d5ee77adbe4c065b88748"],["/buffifly/categories/index.html","419ab393859d0f9bcbb296d405a10f5f"],["/buffifly/css/Aplayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","eaa99a387cf691aee8c1ad7f1022f219"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/cover/bg0.jpg","12b069c439430d91a1f5012189e808fc"],["/buffifly/img/cover/bg1.jpg","0b10fc4f8699333356b1ed89ef29ea25"],["/buffifly/img/cover/bg10.jpg","47e72bafac0afe4b7ac5114f11d49df7"],["/buffifly/img/cover/bg11.jpg","e2c03539f10c34bb75e9e662e78045f7"],["/buffifly/img/cover/bg12.jpg","aee47111d06cedd8f3d1f7fdf1048123"],["/buffifly/img/cover/bg13.jpg","9a670438187c09a352666848dab6d590"],["/buffifly/img/cover/bg14.jpg","f92b8ee6abd17493b3e32ac3973e2774"],["/buffifly/img/cover/bg15.jpg","828501d0d84660d06f35b92c0906666e"],["/buffifly/img/cover/bg16.jpg","e8c27b61470809ee6fb891909380353f"],["/buffifly/img/cover/bg17.jpg","be9ed3fc0975233aac480a7bf484185c"],["/buffifly/img/cover/bg18.jpg","484a6f9d22f468b38d90e0bed279aa42"],["/buffifly/img/cover/bg19.jpg","9614e8ab01c28cf873982b8d0bcf5aac"],["/buffifly/img/cover/bg2.jpg","af0cbc5dabbdb5685c77bc7b87c851e7"],["/buffifly/img/cover/bg20.jpg","ac5cec74aef7943e2727bf1bc92e41e6"],["/buffifly/img/cover/bg3.jpg","8f8823b2e25d1216437f9c5b5595c9fa"],["/buffifly/img/cover/bg4.jpg","ff63b8284f858f0eec8209e3bd56576f"],["/buffifly/img/cover/bg5.jpg","9750fa574598f35974c5dbaf9fd16b8e"],["/buffifly/img/cover/bg6.jpg","78a4436b8aeb69337320ce83d99d1c26"],["/buffifly/img/cover/bg7.jpg","c2dce8ae6601db9bad0023c9498c6caf"],["/buffifly/img/cover/bg8.jpg","1fe7a527e10a271b48d429eaac901833"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","7cd4e928ccbe5971228247c5e6688e72"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2d-widget/README.html","de21eb544b4fd1c3f8589fc916b18ab1"],["/buffifly/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/buffifly/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/buffifly/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/buffifly/live2d-widget/autoload.js","68889df50f38ac9a529f8f190bf7ae33"],["/buffifly/live2d-widget/demo/demo.html","85a98be1b5549e3ba0013eeca1fb4cfd"],["/buffifly/live2d-widget/demo/login.html","1d01ff487f5c307559877ef438fb0217"],["/buffifly/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/buffifly/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/buffifly/live2d-widget/waifu.css","e11570c2a4b40040e6b5e780409055f8"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","9cf1095871951328d053ce023d68488e"],["/buffifly/page/2/index.html","a6e5fbbcb276895ff6a36cfd1c72aac8"],["/buffifly/page/3/index.html","f066bfe612832ab543bba9b42dcad032"],["/buffifly/sw-register.js","558b4b18a2865ffddc8a3b7304989d7d"],["/buffifly/tags/Java/index.html","19bd5545837907ef9aff4728f3a7092d"],["/buffifly/tags/Liunx/index.html","83a34f2622ecc51c1fab9553f6780e47"],["/buffifly/tags/Mysql/index.html","8a6d871e4b07a1fb6108fb51568c682b"],["/buffifly/tags/Nginx/index.html","90c042f5b3cb3f703d70a5160a6d5f34"],["/buffifly/tags/RabbitMQ/index.html","6263adde58c525745a77f78ee0649103"],["/buffifly/tags/Redis/index.html","75b12a536809c7f7b50c17e5c3813c52"],["/buffifly/tags/SpringBoot/index.html","0dcd00f3b0f9871f4f7bd3a5c468faea"],["/buffifly/tags/SpringCloud-Netflix/index.html","e25f6030f7e9cbc2a7c0b77f6ff6ab72"],["/buffifly/tags/index.html","118474f0e43a1e3b66821d0f875de1f1"],["/buffifly/tags/热部署Devtools/index.html","9e9e1967bbd0942ede1cbff0e1b74cab"],["/buffifly/tags/生活杂谈/index.html","5f0b25da7cf7d2fba691e6d02388b75f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
