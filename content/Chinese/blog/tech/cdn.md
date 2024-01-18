---
Tags:
- CDN
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date: "2024-01-18"
disableShare: true
draft: true
hidemeta: false
lastmod: "2024-01-18"
showToc: true
showbreadcrumbs: true
slug: ""
title: 国内 CDN 加速
weight: null
---

> 起因是解决互换友链中头像加载的问题。

# 国外：Cloudflare 

无需置疑，地表最强的CDN提供商，提供免费CDN，免备案CDN和高防御的CDN，秒国内一线厂商毫无疑问。2020年7月17日，Cloudflare由于路由器发生错误，引起全球性互联网访问中断，中断持续了27分钟，整个网络上的流量下降了50%，造成包括Shopify、Politico、Discord和LOL（英雄联盟）等在内的网站及服务无法访问，可见覆盖范围和实力。

# 国内CDN

主流CDN提供商，主打优化国内线路提供的收费CDN，按量、按次、按时段收费，在购买基础CDN上，附加各种额外收费项目，随时有发现欠费卖房的情况，在国内无法免备案使用，优点就是除了快，别无其他。

# 对比

Cloudflare国外访问快，而且免费。国内CDN国内快，但国外可能就无法访问了，小站无需使用太多流量，是否能保证国内范围速度快国外也快呢？当然，本站就是使用了双CDN加速，国内用户走国内CDN加速，国外用户走CloudflareCDN加速。


# 相关阅读

- [夏日冰菓：同时使用国内CDN和Cloudflare](https://blog.lincloud.pro/archives/26.html)