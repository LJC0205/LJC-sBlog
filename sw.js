/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/01/Centos7防火墙设置/index.html", "decae53d3386ea26ea43c1a85ece2fd0"], ["/2021/07/05/RabbitMQ安装教程及安装包/index.html", "7e1940c3fe51532e7328c483d298ead9"], ["/2021/07/07/Redis的五大数据类型及操作命令/index.html", "79c939691273ba277bfc00b11c2abdc2"], ["/2021/07/08/Mysql面试题总结/index.html", "fe52616c9e0af896c4b5c2fce1133d7b"], ["/2021/07/10/RabbitMQ的集群/index.html", "4f5225a218478baf094547813689423e"], ["/2021/07/10/SpringBoot面试题/index.html", "ae3b53016f940684701d07b4edbf7464"], ["/2021/07/11/Nginx的安装及高可用配置/index.html", "83ac48a5d0d9b7a27a766ebad2e01e66"], ["/2021/07/12/Java的深拷贝和浅拷贝/index.html", "bc2e50e3b7456cc0e2b98e54781ab705"], ["/2021/07/13/热部署Devtools/index.html", "087f0d672ef0daf8609dd8bca76cf2c4"], ["/2021/07/15/Redis持久化/index.html", "bac1dc2248509b3d05ec74eb272750ba"], ["/2021/07/23/Eureka服务注册与发现/index.html", "71e12a7f206f8ee5c385d31edff333f7"], ["/2021/07/23/为什么要使用Optional/index.html", "ac00a64c81aace59b7617259f8696c84"], ["/2021/07/27/JWT单点登录/index.html", "ef990525819837770a802858218c6563"], ["/about/index.html", "27a3c21d16be5c4f674b41e174c3efd4"], ["/archives/2021/07/index.html", "a8dee02e8a2a411ff71f1b79da20563c"], ["/archives/2021/07/page/2/index.html", "ec1d495017efdb6c9d5e6041a3f4bf1c"], ["/archives/2021/index.html", "62e93a6818565428b89b5424b97e3d60"], ["/archives/2021/page/2/index.html", "7aa57772dc27ef537f3f508b93866470"], ["/archives/index.html", "99ef2f09c892edb154aba83f39c09b11"], ["/archives/page/2/index.html", "37fd2d2b63838281b2039b0012408705"], ["/categories/index.html", "a08a89562d49bdde7f1bafb3198a1081"], ["/css/APlayer.min.css", "a6e3570bc14f718c30f3a744a3be18fe"], ["/css/VolantisTags.css", "00e86b5f8f0c685af0cd50a0e5c72c14"], ["/css/card_botui.css", "aa687b8441c1dea2f0710f788723542f"], ["/css/fontAnimation.css", "e438cbdce5ff14ae374d19c1e13d491b"], ["/css/index.css", "eaa99a387cf691aee8c1ad7f1022f219"], ["/css/var.css", "d41d8cd98f00b204e9800998ecf8427e"], ["/css/volantis.css", "cd2a3ce6b8506d280e2ed38354b97b44"], ["/img/404.jpg", "4ef3cfb882b6dd4128da4c8745e9a507"], ["/img/algolia.svg", "88450dd56ea1a00ba772424b30b7d34d"], ["/img/avatar.png", "8d9f170f28537e95db18d36898815643"], ["/img/banner/4.jpg", "c17100ff73db548f429475376fd42f88"], ["/img/cover/bg0.jpg", "12b069c439430d91a1f5012189e808fc"], ["/img/cover/bg1.jpg", "0b10fc4f8699333356b1ed89ef29ea25"], ["/img/cover/bg10.jpg", "47e72bafac0afe4b7ac5114f11d49df7"], ["/img/cover/bg11.jpg", "e2c03539f10c34bb75e9e662e78045f7"], ["/img/cover/bg12.jpg", "aee47111d06cedd8f3d1f7fdf1048123"], ["/img/cover/bg13.jpg", "9a670438187c09a352666848dab6d590"], ["/img/cover/bg14.jpg", "f92b8ee6abd17493b3e32ac3973e2774"], ["/img/cover/bg15.jpg", "828501d0d84660d06f35b92c0906666e"], ["/img/cover/bg16.jpg", "e8c27b61470809ee6fb891909380353f"], ["/img/cover/bg17.jpg", "be9ed3fc0975233aac480a7bf484185c"], ["/img/cover/bg18.jpg", "484a6f9d22f468b38d90e0bed279aa42"], ["/img/cover/bg19.jpg", "9614e8ab01c28cf873982b8d0bcf5aac"], ["/img/cover/bg2.jpg", "af0cbc5dabbdb5685c77bc7b87c851e7"], ["/img/cover/bg20.jpg", "ac5cec74aef7943e2727bf1bc92e41e6"], ["/img/cover/bg3.jpg", "8f8823b2e25d1216437f9c5b5595c9fa"], ["/img/cover/bg4.jpg", "ff63b8284f858f0eec8209e3bd56576f"], ["/img/cover/bg5.jpg", "9750fa574598f35974c5dbaf9fd16b8e"], ["/img/cover/bg6.jpg", "78a4436b8aeb69337320ce83d99d1c26"], ["/img/cover/bg7.jpg", "c2dce8ae6601db9bad0023c9498c6caf"], ["/img/cover/bg8.jpg", "1fe7a527e10a271b48d429eaac901833"], ["/img/friend_404.gif", "68af0be9d22722e74665ef44dd532ba8"], ["/img/icp.png", "6e26aed5ced63bc60524cc736611d39e"], ["/img/loading.gif", "d1cf8d9ccb6a2b3514a7d14332035a3c"], ["/img/wechat.jpg", "78a728b6d777f8790878bbe1dbf376c3"], ["/index.html", "adc44a46a20f611b5d113f74f36f4a4f"], ["/js/APlayer.min.js", "8f1017e7a73737e631ff95fa51e4e7d7"], ["/js/Meting.min.js", "bfac0368480fd344282ec018d28f173d"], ["/js/VolantisTags.js", "3d18dd231aba8d8ae6ca554723630b3b"], ["/js/botui.js", "9d88f9c981b7f917faab90756d60fa3c"], ["/js/botui_init.js", "ee36b94f815c1d8e04c2fbd029c93648"], ["/js/classify.js", "2ec4725eff203ca3defe053eb5ec65ee"], ["/js/main.js", "b382597891e958e71bb7c1099977ec66"], ["/js/search/algolia.js", "24e286714f775d2a52053e530b2ac199"], ["/js/search/local-search.js", "e3a22e76d8b457655f619551990316e8"], ["/js/third-party/ClickShowText.js", "22f4c82da4faed04c79e61fcbbdf675c"], ["/js/third-party/activate-power-mode.js", "e8455f75769585811cd6b3220787d08e"], ["/js/third-party/canvas-nest.js", "bb643bd9c2ac59f6ce2a1251b8014624"], ["/js/third-party/canvas-ribbon.js", "4ca518354a167db9fe0869c0982ff215"], ["/js/third-party/click_heart.js", "c2420dfec66aa5bad663e6c365a129c8"], ["/js/third-party/fireworks.js", "080fdfcacffc6828826484645140af50"], ["/js/third-party/piao.js", "5c8c9ff4bb9bed49e333387a54eae9be"], ["/js/tw_cn.js", "0dcf46510648b9ff1a8a65d270ba117a"], ["/js/utils.js", "9fadc7723c6bd679aa69c1c158f65af0"], ["/js/volantis.js", "176cc4b7e4b28ae27e5faa4d28159966"], ["/live2dw/assets/moc/haruto.2048/texture_00.png", "56ff69b411abfc80cb68d0b1267959c5"], ["/live2dw/lib/L2Dwidget.0.min.js", "32973883fcac0a9ae6cc79c0ea25fda2"], ["/live2dw/lib/L2Dwidget.min.js", "094cbace49a39548bed64abff5988b05"], ["/music/index.html", "767a363bd41183bc919bca428b2d1192"], ["/page/2/index.html", "1721927bb6628f38af30be1ec44ccf4e"], ["/sw-register.js", "8989077a3b306f80180a271c183e2314"], ["/tags/Java/index.html", "9f1cb866867264656a3b4422c5f08b8a"], ["/tags/Liunx/index.html", "44e55612f639f1db646c074fecd6dcaa"], ["/tags/Mysql/index.html", "39d1aba6db9dcde3effc705f6cd87500"], ["/tags/Nginx/index.html", "b9a419084a2bd32deb27e308ca5ee6ba"], ["/tags/RabbitMQ/index.html", "c004e1fd3089495ec5e59b1b32a8397e"], ["/tags/Redis/index.html", "dd0572afa9b1888088ca6e8be18ab215"], ["/tags/SpringBoot/index.html", "2530033a69604006ea7ecb77be092656"], ["/tags/SpringCloud-Netflix/index.html", "4aec614aae1e7d2c65345848d8eaa76d"], ["/tags/index.html", "39f2d92e5026cfbd95c837c3b0a55f1f"], ["/tags/热部署Devtools/index.html", "82d3109ba5f7e39bddc76b97cef03522"]];
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
