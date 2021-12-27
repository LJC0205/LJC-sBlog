/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","96f2f2f44475f7e2245810901f372e39"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","893362beac823db7b910288f1be4bdfa"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","ffa15995aaf10ffb616f1d47b667a3fa"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","1177c895032ae34b84ccc5de16b119c6"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","0d969ea57402c2317d5c868329c4d98f"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","762fe911b13dfbbeb6829c7c6c934475"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","f916f87ff630b3be4a40cb62f473b0e5"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","4a67bcf1acaf0fb5802ca20f00d1da9a"],["/buffifly/2021/07/13/热部署Devtools/index.html","594a39bb41369105e8de7dd5af324783"],["/buffifly/2021/07/15/Redis持久化/index.html","ee6494b9ae5a1d69ba3943d66222f094"],["/buffifly/2021/07/23/Eureka集群的搭建/index.html","59c6192cd2ada6961ddfe7eb31155b1b"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","0500181d3dbbdf073734fc9c33024c15"],["/buffifly/2021/07/27/JWT单点登录/index.html","8d59ec0fdb7d8b81208f4af16df3ee3f"],["/buffifly/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html","7ad503eed62a9d1ccf031c6c92953886"],["/buffifly/2021/07/28/AOP记录日志/index.html","c469f006dc6442774de612a100010b0a"],["/buffifly/2021/07/28/Nacos持久化配置/index.html","7a40d2e48b343737a8fa19bea2cb265e"],["/buffifly/2021/07/31/OpenFeign的使用/index.html","5a7c8d796397435d595980667fbd7e4c"],["/buffifly/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html","b179f28dfeaff7a5cdc83d8ea624386d"],["/buffifly/2021/08/05/Nacos集群配置（Linux）/index.html","dc393aa1b9b26ccde934653d567ee07b"],["/buffifly/2021/08/06/Ribbon负载均衡服务调用/index.html","c49f435d12e2fe14f73efa5e5b701928"],["/buffifly/2021/08/19/Gitlab搭建/index.html","7f996923a2d1bd8aba057c9e533c22a0"],["/buffifly/2021/08/24/ArrayList源码+扩容机制分析/index.html","92b0f00db239abb0b41690ed8f12cc8d"],["/buffifly/2021/08/25/HashMap源码分析/index.html","e8171bc6c911ffeee4af368a70b61ba9"],["/buffifly/2021/09/03/Java集合常用面试题/index.html","6ce911d907bee2fd847debe902c4ec07"],["/buffifly/2021/09/03/LinkedList源码分析/index.html","585b4c43e7f6795dd4529a61726893d2"],["/buffifly/2021/09/04/Java中的BigDecimal类用法介绍/index.html","cb214459c535b5463c20bf4063337695"],["/buffifly/2021/09/04/Mysql索引/index.html","e4fd309a814514d0805c3e2e5e450a0e"],["/buffifly/2021/09/06/MySQL高性能优化规范建议/index.html","5e8f72b11c52d04d4c6ea008d3719081"],["/buffifly/2021/09/07/Docker教程/index.html","561694ae7996185bb875598ce5b7c9d7"],["/buffifly/2021/09/07/MySQL事务隔离级别/index.html","7a5949117d2510a7fc9cacad972c279c"],["/buffifly/2021/09/07/一千行MySQL学习笔记/index.html","8bc62b0a65301e04d92533647ed646b3"],["/buffifly/2021/12/27/Centos7中yapi的搭建/index.html","ae754a24951b7aad0e5512c5406ab01c"],["/buffifly/2021/12/27/docker可视化工具Portainer部署与汉化/index.html","bec7f9532a3ba4b2f2256c25707896be"],["/buffifly/about/index.html","4ffd6f65ec16ddd8c1613c25832585b6"],["/buffifly/archives/2021/07/index.html","2db55d5e89eb846e0b77ed335d1f3627"],["/buffifly/archives/2021/07/page/2/index.html","6bb23d89456da6e23b510c282b8cc369"],["/buffifly/archives/2021/08/index.html","797aa5fc2ee6ada8f9b347f171477bc4"],["/buffifly/archives/2021/09/index.html","bf5b4237eaaca999e30b1a6e31c3a9d1"],["/buffifly/archives/2021/12/index.html","458c044899bbf5333a7b09f6aa429931"],["/buffifly/archives/2021/index.html","3eff35264f09585fe97926b92380c25b"],["/buffifly/archives/2021/page/2/index.html","17b1a2adbc6b2199d4976b24fc6504cf"],["/buffifly/archives/2021/page/3/index.html","e89b5dd6f79bd26bf8887ae5d1f12e8f"],["/buffifly/archives/index.html","ac42f2225065b76c0562ceac9165b758"],["/buffifly/archives/page/2/index.html","c8872a41908a473c8b72be34c0250174"],["/buffifly/archives/page/3/index.html","65198bd229c231310c780c034809178b"],["/buffifly/categories/index.html","1dc41bd4aa5a49c31382b54495799c95"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","73b7820292f365e8e448573cc6a6bc88"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","851dc71d578f546e09baf8ef7f1a965d"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","dff58f20246145ab76f770f514628de9"],["/buffifly/page/2/index.html","5b56901ad3bbce14c54d661d4d244f9e"],["/buffifly/page/3/index.html","04f4a49c064a11ba581fa050d8511b50"],["/buffifly/page/4/index.html","e5ce8c05c4aece54bf8dbba1798f0c4d"],["/buffifly/page/5/index.html","624432e82e01dd29135fdfd017b98ce7"],["/buffifly/sw-register.js","368751be6c35df84b06b47d73186eff3"],["/buffifly/tags/Devtools/index.html","c50bbf669ae5fb75a69ffbef2d843ce5"],["/buffifly/tags/Docker/index.html","6dff505442d4e62cc46b1b9232b90932"],["/buffifly/tags/Java/index.html","1864c67afce3fd03c488592696f0055e"],["/buffifly/tags/Linux/index.html","ac7e858d9f2bbe7089109addf825036a"],["/buffifly/tags/Mysql/index.html","229a4d8749244af15e6755adda49076f"],["/buffifly/tags/Nginx/index.html","9fbfc7ad846f8953adba427d95bd14b9"],["/buffifly/tags/RabbitMQ/index.html","00015e4c84b41cce67739def36e4905a"],["/buffifly/tags/Redis/index.html","304e3de2f8b5f30ec2df3f62dbbaff5a"],["/buffifly/tags/Spring/index.html","8874bdb734214e2de15dc21de05dd796"],["/buffifly/tags/SpringBoot/index.html","82eb0b59f45dadd8fea108e9771aedbc"],["/buffifly/tags/SpringCloud/index.html","4401736cd14d1e861063cde40bb80e36"],["/buffifly/tags/index.html","780a7c2facc8c6db829b08906b3e9b83"]];
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
