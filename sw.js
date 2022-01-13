/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","312fb5c2e7b0615c5e11c03de3f2ce2b"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","15c2b61a93900b65611db09a797d7c73"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","6e95365d22c0785d21783423fdc16aaa"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","958072f193d9914aec9778fdfab946fc"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","1b78308ab93fcab86db22173724e8ad6"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","44f9fd54411a85abbce237658dc595b5"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","84610816c4e801e7583c0b592e77a710"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","2ec28cdaf835b5b438d3d6f61f9251da"],["/buffifly/2021/07/13/热部署Devtools/index.html","afd2189d70d9d0482dedb662ea525a0a"],["/buffifly/2021/07/15/Redis持久化/index.html","be210a42647775229edb0e81db2fa02e"],["/buffifly/2021/07/23/Eureka集群的搭建/index.html","45e5c5f1b1bcfb203804d5617cdd913f"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","55c4bff1b66078453da224e77707f737"],["/buffifly/2021/07/27/JWT单点登录/index.html","cba97f3892942e1ec77019e5234bbfdb"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","ea43f6fdd226e75fa2cecb1a3de319cc"],["/buffifly/2021/07/28/AOP记录日志/index.html","a25b7077f6a6df5a6f4cc94a10028f78"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","5fbab6d7a517123cdc57e71d6dab051e"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","bdc5723309c55fc0fff3081ed709b501"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","f8a06b15847471e89aca61fa3bd849b9"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","72d75cf88e2aab48c7ea59b8078232ad"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","e68cbc0a1658534f09406c7afeed5a85"],["/buffifly/2021/08/19/Gitlab搭建/index.html","a3629419dbd2eab31e656a00e928a925"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","db43ec0a420aaeeb9f4abb47230180e6"],["/buffifly/2021/08/25/HashMap源码分析/index.html","13ec0a3825aacd47d6a2fcf954fc4fce"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","1ebd4f9be5bfe76acabe8e354e8e23eb"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","2bc8d80159dd83bf77490e4fd0d3df9d"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","784fe6a1761be8c50d4fcddbc8e17742"],["/buffifly/2021/09/04/Mysql索引/index.html","a719b3e2302f828364c2a3145fb9cabc"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","5ae0bf2a5e3bc9ba80bc7bcae0c3ddd0"],["/buffifly/2021/09/07/Docker教程/index.html","3260e4213a7310219f1e0b329d34a85f"],["/buffifly/2021/09/07/MySQL事务隔离级别/index.html","9e874bd01fd21d4bcc069a9a1c4a6761"],["/buffifly/2021/09/07/一千行MySQL学习笔记/index.html","cde259e847a505745ad98567f484137d"],["/buffifly/2021/12/27/Centos7中yapi的搭建/index.html","e8248a33314b203ff5b316037738ee0e"],["/buffifly/2021/12/27/MYSQL递归查询/index.html","1a7ebf2c1324dda6621d1643454b52b9"],["/buffifly/2021/12/27/docker可视化工具Portainer部署与汉化/index.html","9569d78a4d086d4069310248c7e6bb55"],["/buffifly/2022/01/13/SpringBoot实现钉钉机器人消息推送异常信息/index.html","763ea0ccaa26ea63edc478b684a88523"],["/buffifly/about/index.html","9d85026eb9d7dc482f729373abb42976"],["/buffifly/archives/2021/07/index.html","672f0b8845fecdf27a6c476d14b80234"],["/buffifly/archives/2021/07/page/2/index.html","057460d22c8f9ab0de6ccac32a2b6466"],["/buffifly/archives/2021/08/index.html","9826cd33389182056866cfff1f4d81cf"],["/buffifly/archives/2021/09/index.html","5c89b6d57c28e5fbd6fd15012ecbc747"],["/buffifly/archives/2021/12/index.html","d30ad71f35f071dbe15ffb1084fd768a"],["/buffifly/archives/2021/index.html","e669fca1c6a6bdce768f7319ad0c18cf"],["/buffifly/archives/2021/page/2/index.html","9e0e445a8ca76ac449a0c51d25632eac"],["/buffifly/archives/2021/page/3/index.html","ee56ed3024eec1cacb3aa9e68f070d11"],["/buffifly/archives/2022/01/index.html","83bf63b5ab7d51a4761ea4938ac447ca"],["/buffifly/archives/2022/index.html","6e2c826cbcfe77d39922d7d419df8dae"],["/buffifly/archives/index.html","af12c19ad676b723d56f44f9cf1a55ef"],["/buffifly/archives/page/2/index.html","dfa77b7e2fa3a4544be95e3296e1652b"],["/buffifly/archives/page/3/index.html","9e64dd0e30c6e7942d749bfc4a6d057a"],["/buffifly/categories/index.html","6ebea3b84154e55693dabc7bd27b7fae"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","2e8e290b0cfa438b8d45f07e86bbd780"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","875ed1e92235c98d21b2eeb67009071a"],["/buffifly/page/2/index.html","81658290922c72f339f6faaee054b903"],["/buffifly/page/3/index.html","595228b8cb2d514f1585f7be589b888a"],["/buffifly/page/4/index.html","c490b05eddbcf3b92224b3fb52a8b603"],["/buffifly/page/5/index.html","de4dcf7efc4a72f9a9acc6c71f3b7042"],["/buffifly/sw-register.js","2cb32264f2099bc185e92e0b2e73aaa2"],["/buffifly/tags/Devtools/index.html","b2f019ebfa2b29267b93a88dcacc7211"],["/buffifly/tags/Docker/index.html","f24ad017757a16130be70ed1a7355f21"],["/buffifly/tags/Java/index.html","178a9a461652716061c944bbb1822c1b"],["/buffifly/tags/Linux/index.html","051662b9ae83b76ba346a0b490910d2b"],["/buffifly/tags/Mysql/index.html","53d8cc627269b0faee724847bedf53a7"],["/buffifly/tags/Nginx/index.html","5188c0f3c9e4af1f3312b602e22cefe3"],["/buffifly/tags/RabbitMQ/index.html","f5192a82e00ba6aeabef456ee935e253"],["/buffifly/tags/Redis/index.html","6101e8305d90b202ba5cbe588c002568"],["/buffifly/tags/Spring/index.html","e259f11d6c7fdc85455606d7dd60aced"],["/buffifly/tags/SpringBoot/index.html","81e9841417232e7d315f66d1fe1dcc17"],["/buffifly/tags/SpringCloud/index.html","2e768fdc41e2534b7e1eef7be3bae0d9"],["/buffifly/tags/index.html","ae8ba961b60ffe7a89b8d8915e1945bf"]];
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
