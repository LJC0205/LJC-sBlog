/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/buffifly/2021/07/01/Centos7防火墙设置/index.html","decae53d3386ea26ea43c1a85ece2fd0"],["/buffifly/2021/07/05/RabbitMQ安装教程及安装包/index.html","7e1940c3fe51532e7328c483d298ead9"],["/buffifly/2021/07/07/Redis的五大数据类型及操作命令/index.html","79c939691273ba277bfc00b11c2abdc2"],["/buffifly/2021/07/08/Mysql面试题总结/index.html","fe52616c9e0af896c4b5c2fce1133d7b"],["/buffifly/2021/07/10/RabbitMQ的集群/index.html","4f5225a218478baf094547813689423e"],["/buffifly/2021/07/10/SpringBoot面试题/index.html","ae3b53016f940684701d07b4edbf7464"],["/buffifly/2021/07/11/Nginx的安装及高可用配置/index.html","83ac48a5d0d9b7a27a766ebad2e01e66"],["/buffifly/2021/07/12/Java的深拷贝和浅拷贝/index.html","bc2e50e3b7456cc0e2b98e54781ab705"],["/buffifly/2021/07/13/热部署Devtools/index.html","087f0d672ef0daf8609dd8bca76cf2c4"],["/buffifly/2021/07/15/Redis持久化/index.html","bac1dc2248509b3d05ec74eb272750ba"],["/buffifly/2021/07/23/Eureka服务注册与发现/index.html","71e12a7f206f8ee5c385d31edff333f7"],["/buffifly/2021/07/23/为什么要使用Optional/index.html","ac00a64c81aace59b7617259f8696c84"],["/buffifly/2021/07/27/JWT单点登录/index.html","ef990525819837770a802858218c6563"],["/buffifly/about/index.html","27a3c21d16be5c4f674b41e174c3efd4"],["/buffifly/archives/2021/07/index.html","40940c324be7ca40d4f5ef2c9b6661ca"],["/buffifly/archives/2021/07/page/2/index.html","a83a3773b64e1377b9d901904a8d2c03"],["/buffifly/archives/2021/index.html","ec8b59624a44b0cbec385bf36fded1e3"],["/buffifly/archives/2021/page/2/index.html","e0b851da67e253755be26ed5f0c97dbd"],["/buffifly/archives/index.html","7b019ff0f6f4ea3bdaa08494bc51485a"],["/buffifly/archives/page/2/index.html","cac84a63640cbd48d211500db0f66454"],["/buffifly/categories/index.html","a08a89562d49bdde7f1bafb3198a1081"],["/buffifly/css/APlayer.min.css","a6e3570bc14f718c30f3a744a3be18fe"],["/buffifly/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/buffifly/css/card_botui.css","aa687b8441c1dea2f0710f788723542f"],["/buffifly/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/buffifly/css/index.css","eaa99a387cf691aee8c1ad7f1022f219"],["/buffifly/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/buffifly/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/buffifly/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/buffifly/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/buffifly/img/avatar.png","8d9f170f28537e95db18d36898815643"],["/buffifly/img/banner/4.jpg","c17100ff73db548f429475376fd42f88"],["/buffifly/img/cover/bg0.jpg","12b069c439430d91a1f5012189e808fc"],["/buffifly/img/cover/bg1.jpg","0b10fc4f8699333356b1ed89ef29ea25"],["/buffifly/img/cover/bg10.jpg","47e72bafac0afe4b7ac5114f11d49df7"],["/buffifly/img/cover/bg11.jpg","e2c03539f10c34bb75e9e662e78045f7"],["/buffifly/img/cover/bg12.jpg","aee47111d06cedd8f3d1f7fdf1048123"],["/buffifly/img/cover/bg13.jpg","9a670438187c09a352666848dab6d590"],["/buffifly/img/cover/bg14.jpg","f92b8ee6abd17493b3e32ac3973e2774"],["/buffifly/img/cover/bg15.jpg","828501d0d84660d06f35b92c0906666e"],["/buffifly/img/cover/bg16.jpg","e8c27b61470809ee6fb891909380353f"],["/buffifly/img/cover/bg17.jpg","be9ed3fc0975233aac480a7bf484185c"],["/buffifly/img/cover/bg18.jpg","484a6f9d22f468b38d90e0bed279aa42"],["/buffifly/img/cover/bg19.jpg","9614e8ab01c28cf873982b8d0bcf5aac"],["/buffifly/img/cover/bg2.jpg","af0cbc5dabbdb5685c77bc7b87c851e7"],["/buffifly/img/cover/bg20.jpg","ac5cec74aef7943e2727bf1bc92e41e6"],["/buffifly/img/cover/bg3.jpg","8f8823b2e25d1216437f9c5b5595c9fa"],["/buffifly/img/cover/bg4.jpg","ff63b8284f858f0eec8209e3bd56576f"],["/buffifly/img/cover/bg5.jpg","9750fa574598f35974c5dbaf9fd16b8e"],["/buffifly/img/cover/bg6.jpg","78a4436b8aeb69337320ce83d99d1c26"],["/buffifly/img/cover/bg7.jpg","c2dce8ae6601db9bad0023c9498c6caf"],["/buffifly/img/cover/bg8.jpg","1fe7a527e10a271b48d429eaac901833"],["/buffifly/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/buffifly/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/buffifly/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/buffifly/img/wechat.jpg","78a728b6d777f8790878bbe1dbf376c3"],["/buffifly/index.html","f4b9ee9af4cdd656e101467aec57eb21"],["/buffifly/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/buffifly/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/buffifly/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/buffifly/js/botui.js","9d88f9c981b7f917faab90756d60fa3c"],["/buffifly/js/botui_init.js","ee36b94f815c1d8e04c2fbd029c93648"],["/buffifly/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/buffifly/js/main.js","b382597891e958e71bb7c1099977ec66"],["/buffifly/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/buffifly/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/buffifly/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/buffifly/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/buffifly/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/buffifly/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/buffifly/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/buffifly/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/buffifly/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/buffifly/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/buffifly/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/buffifly/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/buffifly/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/buffifly/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/buffifly/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/buffifly/music/index.html","767a363bd41183bc919bca428b2d1192"],["/buffifly/page/2/index.html","b00b354ce7a5c02f3c5e2467d6234578"],["/buffifly/sw-register.js","0f7aa8056ac88105945b3fa4f36b9036"],["/buffifly/tags/Java/index.html","8ff00af8e88d488db530c18e6335f935"],["/buffifly/tags/Liunx/index.html","0e44e90fc3cfc6bb4f286230ad631f01"],["/buffifly/tags/Mysql/index.html","b8065aa1550e164ab76b2bef98008ead"],["/buffifly/tags/Nginx/index.html","3479277f2d190b8915b170aceda88e0a"],["/buffifly/tags/RabbitMQ/index.html","e9c662dcc81a809cc5fbf4dcdbe41e1a"],["/buffifly/tags/Redis/index.html","8d7e293c261396635397533e5c785f90"],["/buffifly/tags/SpringBoot/index.html","9763e7ee5efbbf6a1df10de8b03499da"],["/buffifly/tags/SpringCloud-Netflix/index.html","9138c8a27780fea62fc2872aeb439e95"],["/buffifly/tags/index.html","836d60773c4179dc37c70c5adfd07338"],["/buffifly/tags/热部署Devtools/index.html","cd5b6545aadcb06a42e94f136593d5d7"]];
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
