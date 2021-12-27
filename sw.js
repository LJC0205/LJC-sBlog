/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","19e2b42c568b0b5b79295985a50ed404"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","28d640862d79c2c44f337eb6d21a8d24"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","897c005bcb9acc4dae10398b8d8275e0"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","d55516932c3f40a132c8a5492ef0f804"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","4582f52954896e61ee48a0b5eee60608"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","29563568b3ac6cc718102ecf184952b6"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","dd02a940e4a99decb4b0057d77d44bca"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","cdf0d4da8e677044db4f9ecdfe5c8b04"],["/buffifly/2021/07/13/热部署Devtools/index.html","dda56b9e6102d5cf8e23e6b40baf57bd"],["/buffifly/2021/07/15/Redis持久化/index.html","25ffd651ea14293985212fa25d3d5c83"],["/buffifly/2021/07/23/Eureka集群的搭建/index.html","3043a774a2d0690e1e7cd3b9708a0834"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","006a229a441dd662bceaf4e316a3218d"],["/buffifly/2021/07/27/JWT单点登录/index.html","e976966dff94898d15e7abd9aaa6358e"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","52e67cc014723d4e818ee9c88a9ca97d"],["/buffifly/2021/07/28/AOP记录日志/index.html","f627db87c2d944381ecd1f7439e9b466"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","a88ca117613c87c5175ba3bf8039cd70"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","dd58aa7e20dd6a9c173a2c440d67efca"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","23a1e23c5188045dacd92189500d39c9"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","e111c7bcd203d9431860ceaf9832bfc0"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","570a5b964493c2228e6119936aa0edf2"],["/buffifly/2021/08/19/Gitlab搭建/index.html","9caebbd9492d8d82bf2fdc37a1d7d206"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","9506f02b5274e526f0c52315be3c7589"],["/buffifly/2021/08/25/HashMap源码分析/index.html","189f14cdbb1bbec91f56f54cbaccb457"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","02013167d63c64f4527f29d7338d9efe"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","ba058da62fb61ad4635f07d471e9dace"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","e05315130aff65c02bfd6fbc72dd28c0"],["/buffifly/2021/09/04/Mysql索引/index.html","2480e94d42a976102cece83b4632654e"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","391716268fb2861a04c2e91963ae16aa"],["/buffifly/2021/09/07/Docker教程/index.html","740b14becbe01b81bda9560bf44322d1"],["/buffifly/2021/09/07/MySQL事务隔离级别/index.html","da6f80bd7fafd1986f494dabf5ae1cf1"],["/buffifly/2021/09/07/一千行MySQL学习笔记/index.html","0af92adcc8c3d0a6ca6171b2ee485e83"],["/buffifly/2021/12/27/Centos7中yapi的搭建/index.html","a15180e64ce0d00a851b3d0c89b82ce2"],["/buffifly/2021/12/27/docker可视化工具Portainer部署与汉化/index.html","391e9f5431ca4b2a930c0778c30ebc49"],["/buffifly/about/index.html","209ddf5c497a43939869dedb34cca2cc"],["/buffifly/archives/2021/07/index.html","1d75c78373a80694cbec68c9b4d1cc98"],["/buffifly/archives/2021/07/page/2/index.html","957030fad83321a7fdf2a1839f0e847a"],["/buffifly/archives/2021/08/index.html","20d9c1a07ebc680550e7648126d284a1"],["/buffifly/archives/2021/09/index.html","7f71a4b0511e399972ab3e0795ffe1c8"],["/buffifly/archives/2021/12/index.html","4c8c3ea3caecaa0d8687b298957e5c57"],["/buffifly/archives/2021/index.html","ac4bdf7c0c36e45d54197508fef5cba2"],["/buffifly/archives/2021/page/2/index.html","6e0a894201f9078b3a88ed8f9b7cc747"],["/buffifly/archives/2021/page/3/index.html","9d0fdbc3f9530f528d82b569cf7b7b46"],["/buffifly/archives/index.html","a61070d8d8cf677ba766e0b9974e1031"],["/buffifly/archives/page/2/index.html","2fadd4f8ece135ccf787f1df977fb70f"],["/buffifly/archives/page/3/index.html","5ea7bbb2bea33bf215fa59905170b1a6"],["/buffifly/categories/index.html","627e7d0d7934063209389121ab0f7aa1"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","3542909a11651347e82844e9f41ae6d3"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","f7d996e4f93fb2838c38da138331b30a"],["/buffifly/page/2/index.html","1c3ec4e817000a7189df984bdd93e820"],["/buffifly/page/3/index.html","b83e59186fc4d0bd0d6e8b4603d823b7"],["/buffifly/page/4/index.html","8a023c9f161b0266e58bc0c27a3a7ec0"],["/buffifly/page/5/index.html","7b4389e408375c119baec1dfae7baeaf"],["/buffifly/sw-register.js","4a15f380d224eabf4c1076084a6efef7"],["/buffifly/tags/Docker/index.html","b566b61bff413758849be898c6dcdd05"],["/buffifly/tags/Linux/index.html","9cbe7151bb3cbdd5e0e8b02767ac29d7"],["/buffifly/tags/index.html","d991f6af158c3c44c1cff52d22f9d4b4"]];
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
