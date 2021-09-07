/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","123582d26c41267152272a1b99e9d335"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","cb97e3eaf94534ac655a6253d5a12071"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","26fee92dd3d9759fc3fa94db244ffa1c"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","dda1d44699c75c0a7e8c171894a61af8"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","e39e63984a0023debae98867076610a7"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","6dfde173881e0e9ecca343832ae1eb86"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","4b86c651acb7ca76c0c58ad5fe28e232"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","3f9e84910ce298aca2c58f5549ad15a2"],["/buffifly/2021/07/13/热部署Devtools/index.html","29501fb14a9837c567bacc53756a2d00"],["/buffifly/2021/07/15/Redis持久化/index.html","c6be5db70f3e7276a06d88c1d1be2819"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","7ee7657f86b96f79c7ccb1a5f56b352f"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","34ddbe8d8a5210887bd43d85e17c3cb4"],["/buffifly/2021/07/27/JWT单点登录/index.html","db2f6df2e9a6d74f3ad2d872eb8f12ca"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","70666fe0218bab13e03efb7b5e155191"],["/buffifly/2021/07/28/AOP记录日志/index.html","69be4b71d326716c5c9d9ee8c04a8c16"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","d729e8bc92a0e3bb54d9c16c61e56420"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","73a45659957d246b643fb0a005fd616c"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","fa1b501d9cc541eea8c376440e0985b4"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","9d9b4c8e78892a260b953002afe6bce8"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","5a123cf8f7297e8901c3cfa7bb9f1e72"],["/buffifly/2021/08/19/Gitlab搭建/index.html","1a200b9bbd1b05abf19ff888da2f0e0f"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","ca12811cbb50321914dd2c0a734ea4a9"],["/buffifly/2021/08/25/HashMap源码分析/index.html","5f79f2cdbf797d1f9c756a328e0b4b53"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","28bccaa59ace9c361f258b88362c8ec7"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","115c2de2ea0cd4abe3542d11382a7448"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","66cec54592a1092a7dd4b5eb82afdee0"],["/buffifly/2021/09/04/Mysql索引/index.html","4ac561e5b5ce69e3e1c9e5b97f94cf24"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","0e968f8fecd30dbba752d033b95c1abf"],["/buffifly/2021/09/07/Docker教程/index.html","1f68e05a5d5784ce03292899350e53b7"],["/buffifly/2021/09/07/MySQL事务隔离级别/index.html","7f7b0c21faf21411a3b96f3624e6d694"],["/buffifly/2021/09/07/一千行MySQL学习笔记/index.html","1185ade1404af300fc42798fedfd826b"],["/buffifly/about/index.html","2ad4976809734b1171d9ea02076340db"],["/buffifly/archives/2021/07/index.html","065e7b4b966e92f3824fd062d334d6ac"],["/buffifly/archives/2021/07/page/2/index.html","9cb7e22aa70810427ec251f4c7befae6"],["/buffifly/archives/2021/08/index.html","96b869fe65907c493da820e3b093693f"],["/buffifly/archives/2021/09/index.html","5d34b55cff7607289e53757863eaf90e"],["/buffifly/archives/2021/index.html","5bde6ba1609c39a8f96d35cf1b30b4c0"],["/buffifly/archives/2021/page/2/index.html","908afeb66d3dfd02bc07db067faee045"],["/buffifly/archives/index.html","4af448aa1b64c5436fde08a8faab43a8"],["/buffifly/archives/page/2/index.html","a7efea75b06e294eb9c2bb564c2b96fc"],["/buffifly/categories/index.html","3c3b3bd488a8600c39dd50ab5cfe24fe"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","e1d541a897bf6653037db1f834525a7d"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","1d8b41e503ccf7193f8fed150b80dd7f"],["/buffifly/page/2/index.html","4adf4e7c546427024c01b6b784d84866"],["/buffifly/page/3/index.html","43fc76079781b7d89809a0245d0217f2"],["/buffifly/page/4/index.html","322dfe507271e05f9e014042f79e5cbb"],["/buffifly/page/5/index.html","bf4e28110e8489c0fec89803f2fb304d"],["/buffifly/sw-register.js","f20ef0924f3d36b2c8a84de90ccb0f4f"],["/buffifly/tags/Devtools/index.html","c39152fed832962af75f3aa9a81a6098"],["/buffifly/tags/Docker/index.html","b3aeba0eb9455505cfef2b20fb6cf26a"],["/buffifly/tags/Java/index.html","10f5b6f0be04f4d828f4b553447af20e"],["/buffifly/tags/Linux/index.html","a68348fa17f31da27c96eea7fa8c6fe3"],["/buffifly/tags/Mysql/index.html","63668e80e0ab47b089bd477cc358ad64"],["/buffifly/tags/Nginx/index.html","2f6b8efb59d018faf951458e0015c5e0"],["/buffifly/tags/RabbitMQ/index.html","f380795dffebc49bfc4f06e6c1d0e45d"],["/buffifly/tags/Redis/index.html","c8150782b9e112da8491d8f09b4393e8"],["/buffifly/tags/Spring/index.html","64e066c020f156d110787aa2b8e25e59"],["/buffifly/tags/SpringBoot/index.html","c1f2f078b1cee91979e3a6c56791b13d"],["/buffifly/tags/SpringCloud-Alibaba/index.html","d19e1909c070ebc04a9cede755167e96"],["/buffifly/tags/SpringCloud-Netflix/index.html","d3f1bfbc8db96ecb18fba2d8ab8fe468"],["/buffifly/tags/index.html","0aee9625e8edeac17c854237f3360283"]];
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
