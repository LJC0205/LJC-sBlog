/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/01/Centos7防火墙设置/index.html", "123582d26c41267152272a1b99e9d335"], ["/2021/07/05/RabbitMQ安装教程及安装包/index.html", "cb97e3eaf94534ac655a6253d5a12071"], ["/2021/07/07/Redis的五大数据类型及操作命令/index.html", "26fee92dd3d9759fc3fa94db244ffa1c"], ["/2021/07/08/Mysql面试题总结/index.html", "5d5a4774d49b8175fe2334036cef007a"], ["/2021/07/10/RabbitMQ的集群/index.html", "e39e63984a0023debae98867076610a7"], ["/2021/07/10/SpringBoot面试题/index.html", "6dfde173881e0e9ecca343832ae1eb86"], ["/2021/07/11/Nginx的安装及高可用配置/index.html", "4b86c651acb7ca76c0c58ad5fe28e232"], ["/2021/07/12/Java的深拷贝和浅拷贝/index.html", "3f9e84910ce298aca2c58f5549ad15a2"], ["/2021/07/13/热部署Devtools/index.html", "29501fb14a9837c567bacc53756a2d00"], ["/2021/07/15/Redis持久化/index.html", "c6be5db70f3e7276a06d88c1d1be2819"], ["/2021/07/23/Eureka服务注册与发现/index.html", "7ee7657f86b96f79c7ccb1a5f56b352f"], ["/2021/07/23/为什么要使用Optional/index.html", "34ddbe8d8a5210887bd43d85e17c3cb4"], ["/2021/07/27/JWT单点登录/index.html", "db2f6df2e9a6d74f3ad2d872eb8f12ca"], ["/2021/07/27/使用Java代码对nacos配置文件进行操作/index.html", "70666fe0218bab13e03efb7b5e155191"], ["/2021/07/28/AOP记录日志/index.html", "69be4b71d326716c5c9d9ee8c04a8c16"], ["/2021/07/28/Nacos持久化配置/index.html", "d729e8bc92a0e3bb54d9c16c61e56420"], ["/2021/07/31/OpenFeign的使用/index.html", "73a45659957d246b643fb0a005fd616c"], ["/2021/08/04/Centos7环境下安装Mysql8详细教程/index.html", "fa1b501d9cc541eea8c376440e0985b4"], ["/2021/08/05/Nacos集群配置（Linux）/index.html", "9d9b4c8e78892a260b953002afe6bce8"], ["/2021/08/06/Ribbon负载均衡服务调用/index.html", "5a123cf8f7297e8901c3cfa7bb9f1e72"], ["/2021/08/19/Gitlab搭建/index.html", "1a200b9bbd1b05abf19ff888da2f0e0f"], ["/2021/08/24/ArrayList源码+扩容机制分析/index.html", "ca12811cbb50321914dd2c0a734ea4a9"], ["/2021/08/25/HashMap源码分析/index.html", "5f79f2cdbf797d1f9c756a328e0b4b53"], ["/2021/09/03/Java集合常用面试题/index.html", "28bccaa59ace9c361f258b88362c8ec7"], ["/2021/09/03/LinkedList源码分析/index.html", "115c2de2ea0cd4abe3542d11382a7448"], ["/2021/09/04/Java中的BigDecimal类用法介绍/index.html", "66cec54592a1092a7dd4b5eb82afdee0"], ["/2021/09/04/Mysql索引/index.html", "89e95a37b114b5d9d0e7f1e179cb35ac"], ["/2021/09/06/MySQL高性能优化规范建议/index.html", "192a118030f16b123670249607cdb377"], ["/2021/09/07/Docker教程/index.html", "1f68e05a5d5784ce03292899350e53b7"], ["/2021/09/07/MySQL事务隔离级别/index.html", "4aeaf19b0867031275277b95f6d383c2"], ["/2021/09/07/一千行MySQL学习笔记/index.html", "cb877f6eb201b5f9bba1a9f037a86776"], ["/about/index.html", "17b501c76de74da27d5d824aba2c60c6"], ["/archives/2021/07/index.html", "f9e1d8ec3ca696554165a4f28cc8f9a9"], ["/archives/2021/07/page/2/index.html", "186c5b146bd7a33ddbd0d0d6089830aa"], ["/archives/2021/08/index.html", "a151045a510a1f81bbf02d1a862d7efd"], ["/archives/2021/09/index.html", "82b373d417d825f56d2cd48566301631"], ["/archives/2021/index.html", "8cb2dce4db0e1a0ff7bfbd5c7db2882e"], ["/archives/2021/page/2/index.html", "cda7ae371ee892df456838164b52a11c"], ["/archives/index.html", "68ac3536573b54facc3229d86fbfbffe"], ["/archives/page/2/index.html", "86681e4319c2061420fa2ad653c78d6a"], ["/categories/index.html", "19bfe3a54ae0d506998da2fcb852b89f"], ["/css/APlayer.min.css", "a6e3570bc14f718c30f3a744a3be18fe"], ["/css/VolantisTags.css", "00e86b5f8f0c685af0cd50a0e5c72c14"], ["/css/card_botui.css", "aa687b8441c1dea2f0710f788723542f"], ["/css/fontAnimation.css", "e438cbdce5ff14ae374d19c1e13d491b"], ["/css/index.css", "73b7820292f365e8e448573cc6a6bc88"], ["/css/var.css", "d41d8cd98f00b204e9800998ecf8427e"], ["/css/volantis.css", "cd2a3ce6b8506d280e2ed38354b97b44"], ["/img/404.jpg", "4ef3cfb882b6dd4128da4c8745e9a507"], ["/img/algolia.svg", "88450dd56ea1a00ba772424b30b7d34d"], ["/img/avatar.png", "8d9f170f28537e95db18d36898815643"], ["/img/banner/4.jpg", "c17100ff73db548f429475376fd42f88"], ["/img/friend_404.gif", "68af0be9d22722e74665ef44dd532ba8"], ["/img/icp.png", "6e26aed5ced63bc60524cc736611d39e"], ["/img/loading.gif", "d1cf8d9ccb6a2b3514a7d14332035a3c"], ["/img/wechat.jpg", "78a728b6d777f8790878bbe1dbf376c3"], ["/index.html", "baab733ab18aee75bfb14ad62a6c0952"], ["/js/APlayer.min.js", "8f1017e7a73737e631ff95fa51e4e7d7"], ["/js/Meting.min.js", "bfac0368480fd344282ec018d28f173d"], ["/js/VolantisTags.js", "3d18dd231aba8d8ae6ca554723630b3b"], ["/js/botui.js", "9d88f9c981b7f917faab90756d60fa3c"], ["/js/botui_init.js", "ee36b94f815c1d8e04c2fbd029c93648"], ["/js/classify.js", "2ec4725eff203ca3defe053eb5ec65ee"], ["/js/main.js", "b382597891e958e71bb7c1099977ec66"], ["/js/search/algolia.js", "24e286714f775d2a52053e530b2ac199"], ["/js/search/local-search.js", "e3a22e76d8b457655f619551990316e8"], ["/js/third-party/ClickShowText.js", "22f4c82da4faed04c79e61fcbbdf675c"], ["/js/third-party/activate-power-mode.js", "e8455f75769585811cd6b3220787d08e"], ["/js/third-party/canvas-nest.js", "bb643bd9c2ac59f6ce2a1251b8014624"], ["/js/third-party/canvas-ribbon.js", "4ca518354a167db9fe0869c0982ff215"], ["/js/third-party/click_heart.js", "c2420dfec66aa5bad663e6c365a129c8"], ["/js/third-party/fireworks.js", "080fdfcacffc6828826484645140af50"], ["/js/third-party/piao.js", "5c8c9ff4bb9bed49e333387a54eae9be"], ["/js/tw_cn.js", "0dcf46510648b9ff1a8a65d270ba117a"], ["/js/utils.js", "9fadc7723c6bd679aa69c1c158f65af0"], ["/js/volantis.js", "176cc4b7e4b28ae27e5faa4d28159966"], ["/live2dw/assets/moc/haruto.2048/texture_00.png", "56ff69b411abfc80cb68d0b1267959c5"], ["/live2dw/lib/L2Dwidget.0.min.js", "32973883fcac0a9ae6cc79c0ea25fda2"], ["/live2dw/lib/L2Dwidget.min.js", "094cbace49a39548bed64abff5988b05"], ["/music/index.html", "c62dc049f92b5454d02c686e7bb4741c"], ["/page/2/index.html", "73a75541b7a18be3c627f90bc334c35e"], ["/page/3/index.html", "2eb2b408964cbe7a5be017b3db4f359e"], ["/page/4/index.html", "397fdb4e7ceac90696bf5f8fc33b5f30"], ["/page/5/index.html", "61971f53e43ec451d6af7f885e74ad57"], ["/sw-register.js", "cb30f5a75ef01942f9ef7d21550d6ac5"], ["/tags/Devtools/index.html", "bcf2278745be730d1c01221ddc2bfbb7"], ["/tags/Docker/index.html", "b0302e34fc6ee9c4c2661e1331bc1a4b"], ["/tags/Java/index.html", "ccbb08343cdf3066c4dfa19127fd7fd1"], ["/tags/Linux/index.html", "c1dc555b6d82c67cfd083104bce0ec59"], ["/tags/Mysql/index.html", "81af69cad2a445a8108a9658ad3561b8"], ["/tags/Nginx/index.html", "606d6188e8b1090cb402b46056a75173"], ["/tags/RabbitMQ/index.html", "8d67c00d53bd71e1dbb5f769341b3ccf"], ["/tags/Redis/index.html", "4b41a0cac10fcd3979936c52b6b0a5c0"], ["/tags/Spring/index.html", "cfb322997a653054e5a04b61997644a4"], ["/tags/SpringBoot/index.html", "1c0d329faf8fcfc46c6fcde5b2267d08"], ["/tags/SpringCloud-Alibaba/index.html", "fd4e11ff06c3dc737b3b68df097b1e50"], ["/tags/SpringCloud-Netflix/index.html", "0a19787e94e0b224e4b08005f82411dd"], ["/tags/index.html", "857d1dc6d246cc502a605c06712124b2"]];
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
                            var request = new Request(cacheKey, {credentials: 'same-origin'});
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
