/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","71d463b878bc712351f6f063769c26e4"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","fadafbe2f557ef75d51a89ff1982a0b3"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","1721ea3c323b22f462affa16bd3f4d06"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","621ee869f0899cd3837591c17f628094"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","b91e22870830da256925de4ea27da3b6"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","634d001c6fc9d162ad2ed3d75a7f2110"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","623f3d856ab6133329a86b7054234b7a"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","7d994080fc145da005aa825764e7711c"],["/buffifly/2021/07/13/热部署Devtools/index.html","85f7ebfe44e15304d2c023ebd8f5c6ca"],["/buffifly/2021/07/15/Redis持久化/index.html","dbe916fe0ffeaeec1537b0a8982efb05"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","4ac3e0ef82bb750d7b5f44ab3974d7cd"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","ab0711a59ed43117039628d19e8db764"],["/buffifly/2021/07/27/JWT单点登录/index.html","fe1b506ea83fd19c1c662ae2179999a5"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","251048b9a09ae29941fb4282d1788f42"],["/buffifly/2021/07/28/AOP记录日志/index.html","d1656d2e31b726781067cf70897d5005"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","602580f2bfaeb998db4f0b404b99fdb3"],["/buffifly/about/index.html","070fffa86e72217739f408462a9fcd2d"],["/buffifly/archives/2021/07/index.html","660516f28eb1f9a718685db2ba8d0aab"],["/buffifly/archives/2021/07/page/2/index.html","495a675ecce427b665b92465ff083d05"],["/buffifly/archives/2021/07/page/3/index.html","29209992bea6b1eb0c32e6b265ea4ba1"],["/buffifly/archives/2021/index.html","5591a15cd4b4ccd3118c73e83b23d888"],["/buffifly/archives/2021/page/2/index.html","7a55bb8b51b3d1d6eb59f23c2d1e1019"],["/buffifly/archives/2021/page/3/index.html","0d8f602843b66ff29bb1a57bc7738a11"],["/buffifly/archives/index.html","92cfa76780592fc55472cd33af157030"],["/buffifly/archives/page/2/index.html","ae9101630e3af2cba5b3b07141be0c52"],["/buffifly/archives/page/3/index.html","4bcc5a5311c646f75cd89bde0f60da52"],["/buffifly/categories/index.html","1fa649d07474d80f2a42b32e5a982dc2"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","eaa99a387cf691aee8c1ad7f1022f219"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/cover/bg0.jpg","12b069c439430d91a1f5012189e808fc"],["/buffifly/img/cover/bg1.jpg","0b10fc4f8699333356b1ed89ef29ea25"],["/buffifly/img/cover/bg10.jpg","47e72bafac0afe4b7ac5114f11d49df7"],["/buffifly/img/cover/bg11.jpg","e2c03539f10c34bb75e9e662e78045f7"],["/buffifly/img/cover/bg12.jpg","aee47111d06cedd8f3d1f7fdf1048123"],["/buffifly/img/cover/bg13.jpg","9a670438187c09a352666848dab6d590"],["/buffifly/img/cover/bg14.jpg","f92b8ee6abd17493b3e32ac3973e2774"],["/buffifly/img/cover/bg15.jpg","828501d0d84660d06f35b92c0906666e"],["/buffifly/img/cover/bg16.jpg","e8c27b61470809ee6fb891909380353f"],["/buffifly/img/cover/bg17.jpg","be9ed3fc0975233aac480a7bf484185c"],["/buffifly/img/cover/bg18.jpg","484a6f9d22f468b38d90e0bed279aa42"],["/buffifly/img/cover/bg19.jpg","9614e8ab01c28cf873982b8d0bcf5aac"],["/buffifly/img/cover/bg2.jpg","af0cbc5dabbdb5685c77bc7b87c851e7"],["/buffifly/img/cover/bg20.jpg","ac5cec74aef7943e2727bf1bc92e41e6"],["/buffifly/img/cover/bg3.jpg","8f8823b2e25d1216437f9c5b5595c9fa"],["/buffifly/img/cover/bg4.jpg","ff63b8284f858f0eec8209e3bd56576f"],["/buffifly/img/cover/bg5.jpg","9750fa574598f35974c5dbaf9fd16b8e"],["/buffifly/img/cover/bg6.jpg","78a4436b8aeb69337320ce83d99d1c26"],["/buffifly/img/cover/bg7.jpg","c2dce8ae6601db9bad0023c9498c6caf"],["/buffifly/img/cover/bg8.jpg","1fe7a527e10a271b48d429eaac901833"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","32e47cd253aecb448ba2a1eb75623984"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","954c25429b2b7414c5b047b0030b2a37"],["/buffifly/page/2/index.html","93458756c8de6d7d4194876dad49fd52"],["/buffifly/page/3/index.html","7c61125d6ddf9d5703840a5704ab1260"],["/buffifly/sw-register.js","0894d08e1e750ff802ffbf325d1da088"],["/buffifly/tags/Java/index.html","a8235994cc77923d914211d183070b7d"],["/buffifly/tags/Liunx/index.html","c3bdbe3f986b9f04b8cc1db629fbffd4"],["/buffifly/tags/Mysql/index.html","360a300262aee6e9f8f78fbb945c2c23"],["/buffifly/tags/Nginx/index.html","45e55cc12280357666d469e6788d1a0d"],["/buffifly/tags/RabbitMQ/index.html","6963a9df9b8190fe67cb952880ee458d"],["/buffifly/tags/Redis/index.html","13e6eea1ac76f05e01f94958c7459ced"],["/buffifly/tags/Spring/index.html","967e6172a8b96bb39c5d648caf2c3184"],["/buffifly/tags/SpringBoot/index.html","de4900de7895dd556707eefeb740353a"],["/buffifly/tags/SpringCloud-Alibaba/index.html","7db5c98796cb9afbe47f6021fd32d64e"],["/buffifly/tags/SpringCloud-Netflix/index.html","830a62da83cd323de1bca6605dde0877"],["/buffifly/tags/index.html","509d93343f3cbb45a6b1a7987e6b9c84"],["/buffifly/tags/热部署Devtools/index.html","17baacee038e07324f1ed4b613bd6da5"]];
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
