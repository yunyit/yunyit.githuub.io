---
Tags:
- CDN
- Network
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
title: CDN 加速
weight: null
---

> 起因是解决互换友链中头像加载的问题。

# 国外：Cloudflare

无需置疑，地表最强的CDN提供商，提供免费CDN，免备案CDN和高防御的CDN，秒国内一线厂商毫无疑问。2020年7月17日，Cloudflare由于路由器发生错误，引起全球性互联网访问中断，中断持续了27分钟，整个网络上的流量下降了50%，造成包括Shopify、Politico、Discord和LOL（英雄联盟）等在内的网站及服务无法访问，可见覆盖范围和实力。

## Google Domain 转到 Cloudflare
正好谷歌域名服务准备集体转移到 Squarespace，便一并 [转移到 Cloudflare 域名](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/#set-up-a-domain-transfer)。

## 重新链接 GitHub Page 到 Cloudflare
Browser cache https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#browser-cache 

If you've recently changed or removed your custom domain and can't access the new URL in your browser, you may need to clear your browser's cache to reach the new URL. For more information on clearing your cache, see your browser's documentation. 


# 国内 CDN

主流CDN提供商，主打优化国内线路提供的收费CDN，按量、按次、按时段收费，在购买基础CDN上，附加各种额外收费项目，随时有发现欠费卖房的情况，在国内无法免备案使用，优点就是除了快，别无其他。

## 国内 CDN 备案
- [接入CDN的加速域名和源站域名需要备案吗？](https://support.huaweicloud.com/cdn_faq/cdn_faq_0025.html)
- [“ICP备案”与“公安备案”的区别](https://support.huaweicloud.com/icp_faq/icp_05_0080.html)

# 对比

Cloudflare国外访问快，而且免费。国内CDN国内快，但国外可能就无法访问了，小站无需使用太多流量，是否能保证国内范围速度快国外也快呢？当然，本站就是使用了双CDN加速，国内用户走国内CDN加速，国外用户走CloudflareCDN加速。


# 相关阅读

- [Cloudflare](https://www.cloudflare.com/en-gb/)
- [域名测试](https://ping.chinaz.com)
- [查询 DNS](https://intodns.com)
- [How to Transfer Domain to Cloudflare from Google Domain](https://medium.com/@life-is-short-so-enjoy-it/how-to-transfer-domain-to-cloudflare-from-google-domain-7f452ba02ca#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjFmNDBmMGE4ZWYzZDg4MDk3OGRjODJmMjVjM2VjMzE3YzZhNWI3ODEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcxMzI5OTMwMzMyODU2NTEwMDYiLCJlbWFpbCI6IndpbmlmcmVkLnRhbmcuMDgyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzA1NTkzMDIxLCJuYW1lIjoiWXVueWkgVGFuZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKcXpnUVBJam1XZ3hRQktpSjJtUUJmN1VBMVEwRXo5TTM3NlRUQlo2dmVpT0E9czk2LWMiLCJnaXZlbl9uYW1lIjoiWXVueWkiLCJmYW1pbHlfbmFtZSI6IlRhbmciLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTcwNTU5MzMyMSwiZXhwIjoxNzA1NTk2OTIxLCJqdGkiOiJmZTIwYjdlNzJkMGM2ZTc3NTQ1YjBiZWZhM2RlY2JiNWZjYmI0ZWIyIn0.EYH-hvq6sXUzpyVMb2dSg2yQ7ekzdmx6OX3HXLOHcrNr4MdNfdHvsT_YuEn3RoAdnIrZ8G8P3IHKSl6jufAib19fowTahelUHjVpjc2Sjgv4I7a_2o7Ng8vNraJx5arZujfgC0bG2QOJTHFySEdCu3_0C7RurqGC068n8B_CB_iOBGdlfUn_igzJDWf_xQfgSCoF8EEUhAXf1WTonmIPEvl7fM_8Ew6NCcHJ3grXU6wHkLYBfzlgqWjpaR11CVs8TQUOSUQoWHxihgOEysQ8hYuoBXizS4_M4x7vvtyEolO5xDHk54AO5Nbja3Xuxw7Rvl7nwwF3p9TE8eGfMvzrEw)
- [夏日冰菓：同时使用国内 CDN 和 Cloudflare](https://blog.lincloud.pro/archives/26.html)