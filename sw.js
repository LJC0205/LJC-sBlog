/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","dfa11307d5437418e6f0341082ebca91"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","41252c5782a7468c3719e60070516232"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","9056c137fe7d08552031dafbdfd9963b"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","36c354c5858ad21a21695cda894b2d40"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","54c9a4026af59d4c4c11273a4450439e"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","bbba227da38aa6fd2f7b2f52cef8a9d3"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","8fd7bcd19723a2f859089cf9e666b807"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","c35aba5db3e1c1e84453a3aeabc45e97"],["/buffifly/2021/07/13/热部署Devtools/index.html","89df5b565446f716b89ab150d0ad80e1"],["/buffifly/2021/07/15/Redis持久化/index.html","6069c93c4a79624f96768e5570bb5232"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","3288b239c24ada55b5179c7fef355d12"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","90121a837244700500b222afd75706bc"],["/buffifly/2021/07/27/JWT单点登录/index.html","3699b063b308c33148dc0edc8b240c80"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","a6e222ffd3efc09208504eae859900bb"],["/buffifly/2021/07/28/AOP记录日志/index.html","f8106857f4ebb02455dee652f4e2e904"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","c7af733915adff7c8888c7b3080cc8d2"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","bbdf1b0e9e8014c633b7e1a0c1ad182c"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","bb49f18e382bf1b0ead398fd72dd0245"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","9a91250b63db5d4f2f0c4967eaa395a1"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","6aae3a1b1fc41bf17dbc157915f95741"],["/buffifly/2021/08/19/Gitlab搭建/index.html","b2a896a023537338e0c4d8d27e89c2b4"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","e87eb3835b74d54f9e48eb071d2eb8fe"],["/buffifly/2021/08/25/HashMap源码分析/index.html","d3fa4adb65490f3e51bba763fbf2d28c"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","e233b4d371fdff3287499f4ea0760cec"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","d87b2cfe555cd6ea2448f766c2e5a87a"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","fd9f4d2f01ffa3dc7fa9b28c8eb4d718"],["/buffifly/2021/09/04/Mysql索引/index.html","fcdc13d4a402b797c1c5ff7693f47b1a"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","e705693832e6604e41574db11963f316"],["/buffifly/about/index.html","7344ced548be25cd16cae2daf13936fc"],["/buffifly/archives/2021/07/index.html","e0edc7b11878c26c363129233d27d425"],["/buffifly/archives/2021/07/page/2/index.html","cbe8c099a0d715a1fb2822072dbd24cc"],["/buffifly/archives/2021/08/index.html","fb3120b3b8cf79a8eec75feaa95d452b"],["/buffifly/archives/2021/09/index.html","5e14b7f041f93a2515ffd8b8e2daf0da"],["/buffifly/archives/2021/index.html","399bc5a4e9b085c26241f8ddb3f00a22"],["/buffifly/archives/2021/page/2/index.html","61765e80fb6b327dd13fb02ba53437de"],["/buffifly/archives/index.html","afaaafe09998d304b0684638ca089cf2"],["/buffifly/archives/page/2/index.html","98ee77d6c4ac6ceaedbb3e128201cf40"],["/buffifly/categories/index.html","57c25fe1cc470e2d093d42e3948ee0f1"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","7add2035162de55da1f5351217acbd84"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","98f58a598ef06c35353313ecef4f3452"],["/buffifly/page/2/index.html","71d735a4d5cb3e3380ea63e184034b16"],["/buffifly/page/3/index.html","9584bc954d1809242ab954f2921dc0e4"],["/buffifly/page/4/index.html","456ad0080fc471a48fa896e1bbb4bd51"],["/buffifly/sw-register.js","41216508de439840578b86f576169707"],["/buffifly/tags/Devtools/index.html","78869cb01e4baaf8671dd11edd792a5d"],["/buffifly/tags/Java/index.html","94a7c3fb1f79fcd6cf5b26acd9eb272a"],["/buffifly/tags/Linux/index.html","faebf48559305fb4ed8e143687f162f6"],["/buffifly/tags/Mysql/index.html","793a054e54dcd2bc046bf945f27f170b"],["/buffifly/tags/Nginx/index.html","bc7d28388b52b9edf432db7012fb9614"],["/buffifly/tags/RabbitMQ/index.html","ced0c83e8c9187d7f4812239935329f5"],["/buffifly/tags/Redis/index.html","ddb78b76db744693fdc9945d6bea9fb1"],["/buffifly/tags/Spring/index.html","b89f8c8299c7e9d88311f10ce54e6c04"],["/buffifly/tags/SpringBoot/index.html","5931fd6b78ec8624cd415449add5c84d"],["/buffifly/tags/SpringCloud-Alibaba/index.html","ab550520c2f7ab9be800c9fda84863c5"],["/buffifly/tags/SpringCloud-Netflix/index.html","f353258cd0bc007fb9d2411dd4eb4725"],["/buffifly/tags/index.html","398daca6dacd9235b7416db3beb037af"]];
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
