/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","7cbf40ae20e5a9f083c791c51c64eed5"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","4ce2df17346f716760253dd9e31db00b"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","cfca7ed0d0ba50897caa3de297ca2f98"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","aed20f182cb8d1749da011c6a2ffefe8"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","5f96f1e05bf7fc2c9b1c3aeda473cca8"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","766795e2f4f01b74c2ced4550354f000"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","386d411e4fc97d46ccb7fae0e598c02a"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","32c337b28a52b94690f0cc1af5472b7f"],["/buffifly/2021/07/13/热部署Devtools/index.html","9ab07bfcb8966fdee413e73ee8c854b3"],["/buffifly/2021/07/15/Redis持久化/index.html","75bd213b585caf949623b3ae784578c7"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","f30ab4ca44e8375dd6eaff8f2035e24a"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","9086912cbf99659afd643a713505f6e7"],["/buffifly/2021/07/27/JWT单点登录/index.html","2c0d57cf67299c3b037b62d8087154b1"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","2903eb72fc5a0b620d91cf1804e511d1"],["/buffifly/2021/07/28/AOP记录日志/index.html","ca9b57941138fb5666c2d2452afa1cb3"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","375898e8c61f74ef04d2a954cc471a70"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","1ce62920980acb0dd332f590ce5adbfe"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","520a3c936e1196d3a46d4b499395e839"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","bd644dce46eea894aae009c415911aa8"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","dd593845542510b2b8133e7dbf8bee41"],["/buffifly/2021/08/19/Gitlab搭建/index.html","15ab17fa174749dd1497c617ea4f3f90"],["/buffifly/2021/08/24/centos7配置基本开发环境/index.html","a133f7458c51abfaf82c08421d9d6474"],["/buffifly/2021/08/25/HashMap源码分析/index.html","eeddc0f03a174e6835f1bc9f9ab47177"],["/buffifly/about/index.html","515bc900ecd1e2872b49f7d61a51797c"],["/buffifly/archives/2021/07/index.html","c1e8107d518942627ea43eea78633f3d"],["/buffifly/archives/2021/07/page/2/index.html","e90f8cbd54e95b30dac2c064f4743471"],["/buffifly/archives/2021/08/index.html","a561fd17651b310df2653b4ee08ddede"],["/buffifly/archives/2021/index.html","956151248df9e613aa285411e3809eda"],["/buffifly/archives/2021/page/2/index.html","a1b8ae2f33f7a19a1cb5ed31bc58380e"],["/buffifly/archives/index.html","a492e69ed21f61db7707bcddbabf3968"],["/buffifly/archives/page/2/index.html","4c6343e95160f80bb4ea4a385ed1f584"],["/buffifly/categories/index.html","cc5a5fcb467e11198bc7cce9d7ce45b4"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","773670c0f69c89543aacdf966fadc08f"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","7e0b1b0d91894eb085469030d086e577"],["/buffifly/page/2/index.html","7c6669ea93c0c5868f0a7bf30d2b2feb"],["/buffifly/page/3/index.html","a06169f9f09bc7e853c6a17df2ac6f36"],["/buffifly/page/4/index.html","d7c943c326af13de413e50560463b3ce"],["/buffifly/sw-register.js","3b19a39182b4900db0bf42d6c80c17e5"],["/buffifly/tags/Devtools/index.html","01c235eed967eeaac444d42553f5306c"],["/buffifly/tags/Java/index.html","f08fe2c93b0798a82e53877d56ba59db"],["/buffifly/tags/Linux/index.html","47585150d433b2bd8e0920588f8ee13d"],["/buffifly/tags/Mysql/index.html","ece46990f7f10060b87e401b5f1350c8"],["/buffifly/tags/Nginx/index.html","1657009ed6919bffabd371e1f60102f9"],["/buffifly/tags/RabbitMQ/index.html","2cc15447bff00902c30950b2d6a7624d"],["/buffifly/tags/Redis/index.html","bfaccf8d1057e4250ecab05761555a5e"],["/buffifly/tags/Spring/index.html","7069b7d12dbf6ef4e58150991da6b844"],["/buffifly/tags/SpringBoot/index.html","69992c2428b8565c92a4b5d9492c1858"],["/buffifly/tags/SpringCloud-Alibaba/index.html","4f1a7050bc9771b393ad1ea7a12f65b9"],["/buffifly/tags/SpringCloud-Netflix/index.html","c5f752fa6f222eeb7108b603d869831a"],["/buffifly/tags/index.html","79cba4d828ddc5ced6745285c2357875"]];
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
