/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","312fb5c2e7b0615c5e11c03de3f2ce2b"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","15c2b61a93900b65611db09a797d7c73"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","6e95365d22c0785d21783423fdc16aaa"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","958072f193d9914aec9778fdfab946fc"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","1b78308ab93fcab86db22173724e8ad6"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","44f9fd54411a85abbce237658dc595b5"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","84610816c4e801e7583c0b592e77a710"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","2ec28cdaf835b5b438d3d6f61f9251da"],["/buffifly/2021/07/13/热部署Devtools/index.html","afd2189d70d9d0482dedb662ea525a0a"],["/buffifly/2021/07/15/Redis持久化/index.html","be210a42647775229edb0e81db2fa02e"],["/buffifly/2021/07/23/Eureka集群的搭建/index.html","45e5c5f1b1bcfb203804d5617cdd913f"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","55c4bff1b66078453da224e77707f737"],["/buffifly/2021/07/27/JWT单点登录/index.html","cba97f3892942e1ec77019e5234bbfdb"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","ea43f6fdd226e75fa2cecb1a3de319cc"],["/buffifly/2021/07/28/AOP记录日志/index.html","a25b7077f6a6df5a6f4cc94a10028f78"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","5fbab6d7a517123cdc57e71d6dab051e"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","bdc5723309c55fc0fff3081ed709b501"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","f8a06b15847471e89aca61fa3bd849b9"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","72d75cf88e2aab48c7ea59b8078232ad"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","e68cbc0a1658534f09406c7afeed5a85"],["/buffifly/2021/08/19/Gitlab搭建/index.html","a3629419dbd2eab31e656a00e928a925"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","db43ec0a420aaeeb9f4abb47230180e6"],["/buffifly/2021/08/25/HashMap源码分析/index.html","13ec0a3825aacd47d6a2fcf954fc4fce"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","1ebd4f9be5bfe76acabe8e354e8e23eb"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","2bc8d80159dd83bf77490e4fd0d3df9d"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","784fe6a1761be8c50d4fcddbc8e17742"],["/buffifly/2021/09/04/Mysql索引/index.html","a719b3e2302f828364c2a3145fb9cabc"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","5ae0bf2a5e3bc9ba80bc7bcae0c3ddd0"],["/buffifly/2021/09/07/Docker教程/index.html","3260e4213a7310219f1e0b329d34a85f"],["/buffifly/2021/09/07/MySQL事务隔离级别/index.html","9e874bd01fd21d4bcc069a9a1c4a6761"],["/buffifly/2021/09/07/一千行MySQL学习笔记/index.html","cde259e847a505745ad98567f484137d"],["/buffifly/2021/12/27/Centos7中yapi的搭建/index.html","e8248a33314b203ff5b316037738ee0e"],["/buffifly/2021/12/27/MYSQL递归查询/index.html","1a7ebf2c1324dda6621d1643454b52b9"],["/buffifly/2021/12/27/docker可视化工具Portainer部署与汉化/index.html","9569d78a4d086d4069310248c7e6bb55"],["/buffifly/2022/01/13/SpringBoot实现钉钉机器人消息推送异常信息/index.html","763ea0ccaa26ea63edc478b684a88523"],["/buffifly/about/index.html","b5041431da8e93c1303c24d9368aaee0"],["/buffifly/archives/2021/07/index.html","235ae66d56b1ebb94683f91bd56eae30"],["/buffifly/archives/2021/07/page/2/index.html","d9733f9cb6c82ce8d6a8322e32d16d76"],["/buffifly/archives/2021/08/index.html","fbd4ce58c1d654e8c6450edeb8c0af69"],["/buffifly/archives/2021/09/index.html","8c8fe33e6e19718f594e3ccee13bed01"],["/buffifly/archives/2021/12/index.html","10ea0eca84e1b825cdfd8f7a3471cdea"],["/buffifly/archives/2021/index.html","ab2a4ab73fe29eb43ef396e9c7c45859"],["/buffifly/archives/2021/page/2/index.html","32581d40b9c7367cc250e9ede12e0fd4"],["/buffifly/archives/2021/page/3/index.html","201201d4c42e7508853b9ff0a489a5e1"],["/buffifly/archives/2022/01/index.html","cb23219ec81eb8b9f383e0105ac33c69"],["/buffifly/archives/2022/index.html","ff1f29264aea3160b5318c18cfbb703b"],["/buffifly/archives/index.html","dfb345612626f9187c6441697e8967cf"],["/buffifly/archives/page/2/index.html","7ec19bb9cf29db908c9aa15e52d7efa7"],["/buffifly/archives/page/3/index.html","c2e65316b3ad29abacd792cf95e0e4dc"],["/buffifly/categories/index.html","7aea9e9c526b937d7beff5ec912a4238"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","9524ac30eba0c4ea90d5180542101651"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","4be120ff10749523eb6254a97070cbe2"],["/buffifly/page/2/index.html","7e87684947216915aeec83b88d9ec187"],["/buffifly/page/3/index.html","c86930ccb8d947e8aed07365ac340167"],["/buffifly/page/4/index.html","36837110ca0369cc219852a12b79bfeb"],["/buffifly/page/5/index.html","ce5697c8b3c5c5455c2a201c60679c9a"],["/buffifly/sw-register.js","c1ba399644e09d84ec538b6da7428f59"],["/buffifly/tags/Devtools/index.html","d7f21b93f19fe396149a9f26d7020293"],["/buffifly/tags/Docker/index.html","234f30d4ba232427cf837da32edc4a6b"],["/buffifly/tags/Java/index.html","7de0564683c755759c6e24bd573c6f06"],["/buffifly/tags/Linux/index.html","89fb9f8ad2ad49b2b38c6be873480238"],["/buffifly/tags/Mysql/index.html","42a0acedfee15decbfdebbfa5d07964b"],["/buffifly/tags/Nginx/index.html","1b5b6a457a87cbfc4a47452d2a853ffc"],["/buffifly/tags/RabbitMQ/index.html","dab03522a6070fe8905f2a39b0ebe860"],["/buffifly/tags/Redis/index.html","dc91f6bbe6d9335db7bb2fa086b38b15"],["/buffifly/tags/Spring/index.html","cb86479ce2b951b06352ab46e96e28ff"],["/buffifly/tags/SpringBoot/index.html","f2644d7eb6ac263180044e6bec7c6123"],["/buffifly/tags/SpringCloud/index.html","7bca0796c28a4122c952759c310dbb3d"],["/buffifly/tags/index.html","6b0b0cd161bebda0e5a3a127c361e442"]];
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
