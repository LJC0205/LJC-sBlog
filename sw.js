/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","134f6693a9ffcdea7f6832236ca084fa"],["/buffifly/2021/07/02/你好/index.html","7b962168767ca668abb308bc0dba51e9"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","f1751156c0393d55ee7a653d290b9301"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","023f49e84b2d2728359aded058790cd6"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","d75b657558d0c4f57e727ecab0698fa6"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","2dcc376e1a4647e49f48b3e1a4bc0227"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","cf125013bd00ed1898de6f11700140fb"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","a07c6797d1c211791bddf4f16917adc7"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","b25bcf54263a6a90c70bbcbfbed25518"],["/buffifly/2021/07/13/热部署Devtools/index.html","415be463404d6f9a11f790e6c64cfd0b"],["/buffifly/2021/07/15/Redis持久化/index.html","44c5aebe43b3c3336930f36c9f4866df"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","cf8e8968a8b1042b3c2eb821dd6f2ea1"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","d9c7daf1218ca3fdaa59e8458e764d10"],["/buffifly/2021/07/27/JWT单点登录/index.html","fbed460df499e2e91cf95f7acf232480"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","09e24488b631af01898b788f761cafd7"],["/buffifly/2021/07/28/AOP记录日志/index.html","92bc442dd474471010b0000525c24c17"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","e7622a1bf236f0535c2afd46f6cc7f45"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","9d8823597104c9632efb46fe6105879f"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","e73bd00641e7256810720cd3ad5ba561"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","d2e512d268699081dda72067932b42b7"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","4177be015ac4e0d5633881f455243063"],["/buffifly/2021/08/06/Seata/index.html","7f21af6130c0931e14d1706ddd9555c8"],["/buffifly/2021/08/19/Gitlab搭建/index.html","7d98dfcec2fc746651d6488c0119dded"],["/buffifly/2021/08/24/centos7安装jdk8/index.html","f4da4c73563f858ee4ec39c1ad4f8197"],["/buffifly/2021/08/25/HashMap源码分析/index.html","af8a3461e9574aec4d405f32bcf3ab55"],["/buffifly/about/index.html","314ec64b2852404206695636c75a0a34"],["/buffifly/archives/2021/07/index.html","06742027cb90f43222dc1338e3ea0b3e"],["/buffifly/archives/2021/07/page/2/index.html","742472fc632461f1e06ee4c72d3e0e2c"],["/buffifly/archives/2021/08/index.html","8be711cc6d2772c7b619b5f1c5641085"],["/buffifly/archives/2021/index.html","0f3ab020d7db6d81700cd71d23c2786b"],["/buffifly/archives/2021/page/2/index.html","c86b3c6d0b4bbf7a3b07b0fa7ce8ddcb"],["/buffifly/archives/index.html","836d78e8a01d70b91b6de74e59f7eca3"],["/buffifly/archives/page/2/index.html","f6a7888dd871ae2b5730dba2abbf4b22"],["/buffifly/categories/index.html","25c5e7e3c9b1f728c046c54c3a3dc755"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","e90e3fec90ea228f29552d2957eebd6c"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","aefce6165f34ccdbc6848f93a937a2de"],["/buffifly/page/2/index.html","34d4dd7146e1d66daaa9982822158065"],["/buffifly/page/3/index.html","cc210050e284e28fd0adeed2997095e8"],["/buffifly/page/4/index.html","218deb7dd5b1d2a9d4e2fe168461bbac"],["/buffifly/sw-register.js","9405323b816ac56ba136a61f39b07690"],["/buffifly/tags/Devtools/index.html","b17240216f1809767e697f245282b72a"],["/buffifly/tags/Java/index.html","a04486e39fd16ca2e960f69c8596491e"],["/buffifly/tags/Linux/index.html","50ca66e28e3f9f799634e2fa6da8c268"],["/buffifly/tags/Mysql/index.html","57eed59c95bb13b1059010a32ff7aea4"],["/buffifly/tags/Nginx/index.html","5765a8caecf3799d9a543c35a4398701"],["/buffifly/tags/RabbitMQ/index.html","caff1e24afbd38440a97592e2b4b18e3"],["/buffifly/tags/Redis/index.html","5db0ed15a1e171baf99f0150c7f9ede9"],["/buffifly/tags/Spring/index.html","498dc0fd1f2cfc6f6e8dbad1a10761b6"],["/buffifly/tags/SpringBoot/index.html","5adad5d06f9a69aa83125bc4472a5f0d"],["/buffifly/tags/SpringCloud-Alibaba/index.html","77beaeeade8c32aa7ca6953b0f861134"],["/buffifly/tags/SpringCloud-Netflix/index.html","0202e624f43af2bcf18b4f34e950205c"],["/buffifly/tags/index.html","1ac0b120f1cf3872e4b40a8d56891739"],["/buffifly/tags/生活杂谈/index.html","0bc42062b77b0e3abfcdba1ce76d0ab7"]];
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
