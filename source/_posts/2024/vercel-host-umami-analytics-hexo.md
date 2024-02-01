---
title: '为 Hexo 博客添加流量统计'
date: '2024-02-01 20:58:32'
updated: '2024-02-01 20:58:32'
categories: 技术
tags:
  - 博客
  - 流量统计
---

一般来说，写博客的都喜欢在页面上加上一个访问计数器，来~~满足虚荣心~~显示某篇文章或者整个站点的访问量。这种需求在 WordPress 等动态博客上都是比较容易满足的，安装个插件即可（辣鸡 Ghost 除外），但是对于小部分静态博客来说就比较头疼了。

目前来看，互联网上的静态博客访问计数器解决方案大致有这么几种：

- 使用“[不蒜子](http://busuanzi.ibruce.info/)”访问计数服务；
- 各平台统计服务。

<!-- more -->

其中“不蒜子”是个自称“永久免费使用”的极简网页计数器，仅需两行代码即可为静态博客添加访问计数功能，这种简单的解决方案也受到很多静态博客作者的喜爱。但正如 [PRIN](https://prinsss.github.io) 在这篇文章（[为 Ghost 博客添加页面访问计数器](https://prinsss.github.io/add-page-view-counter-for-ghost-blog/)）中所述，不蒜子虽然提供了 `site_pv`、`site_uv`、`page_pv` 等多种统计，但是其并不提供这些服务的开放 API。此前在使用 [Hugo 部署博客](https://www.yunyitang.me/hugo-papermod-blog/) 的时候使用了这个方法，但随着博客弄得越来越~~花哨~~功能繁多，简洁可爱的 [umami](https://github.com/umami-software/umami) 吸引了我的注意力，单独的分享数据页面~~虽然没用但~~很炫酷。

一开始用的 [Umami Cloud](https://umami.is/docs/cloud)，很快捷但无法自定义很多环境变量，一直统计 `localhost` 挺烦人的。在使用 Hugo 部署博客的期间，在 `layouts/partials/extend_head.html` 更改代码如下：

```html
<!-- ref: https://stackoverflow.com/questions/40297763/how-to-disable-google-analytics-on-localhost -->
<script>
    var host = window.location.hostname;
    if(host != "localhost") {
        var script = document.createElement('script');
        script.src = "https://eu.umami.is/script.js";
        script.async = true;
        script.dataset.websiteId = "ff42c1d4-d7db-4925-af13-c30c26df5816";
        document.head.appendChild(script);
    }
</script>
```

成功规避了来自 `localhost` 的流量统计。

随着博客改为 Hexo 部署，干脆尝试用一个数据库（MySQL 或 PostgreSQL）和可以运行 Node.js （18.17 或更新版本）的服务器部署 Umami。一直偷懒用静态网页部署博客，一想到可以用一回数据库架加服务器，想想还是很激动呢 😀

## Umami 安装选项

根据官方指南，安装 Umami 有几种不同的方法：

- 拉取源码安装： 从 GitHub 获取代码并自行构建应用程序；
- 使用 Docker compose：使用 `docker compose` 构建自己的 Docker 容器；
- 使用 Docker 映像： 下载预构建的 Docker 镜像。

我把这三种方法都折腾了一遍，在 `yarn build` 和 `yarn start` 之后，程序默认在 `http://localhost:3000` 上启动。大概是我对服务器不够了解，总觉得每次都启动程序再 `localhost` 太费劲了，所以将目光转向了第四个选择：

## 选择 App 托管

可以让应用程序托管服务提供商托管 Umami 程序。我们仍然需要运行一个数据库，用以连接程序。Vercel、Netlify、Railway 等都提供免费选项，穷人大喜！

最后我选择了 [Vercel](https://umami.is/docs/running-on-vercel)，一是因为此前用 [twikoo](https://twikoo.js.org/backend.html#vercel-部署) 评论系统的时候，尝试过用 Vercel 部署，一回生二回熟；二是因为搭配的数据库可以使用 Vercel Postgres 数据库，方便。

部署时，使用 [官方文档](https://umami.is/docs/running-on-vercel) 的 Vercel 按钮可以自动执行 1.-5.：

1. 将 https://github.com/umami-software/umami 项目 fork 到自己的 GitHub 账户；
2. 在 Vercel 创建或登陆账户；
3. 在仪表板页面点击 "导入项目"，然后指定 GitHub 上项目 fork 的 URL。
4. 在 Vercel 项目中添加所需的环境变量 DATABASE_URL，可以使用 [已在安装配置 Umami 时](https://umami.is/docs/install) 使用的数据库连接，或者创建 Vercel Postgres 数据库并使用；

> 使用 POSTGRES_PRISMA_URL，其格式为 `postgres://user:passwd@endpoint-pooler.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=10`；数据库 URL 环境变量可在 `db/postgresql/prisma.schema` 文件或 Vercel 设置 `https://vercel.com/username-projects/project-name/settings/environment-variables` 中更改。

5. 部署并在 `<deploy-id>.vercel.app` 访问 Umami 应用程序；
6. 按官方文档的 [登录步骤](https://umami.is/docs/login) 登陆并更改默认密码。

反正自己有域名，编了个 `analytics.yunyitang.me` 给自己的 umami 登陆主页，这样对应的 [分享链接](https://analytics.yunyitang.me/share/FfIxx6mpOlXSB7Ri/YUNYI%20BLOG) 也漂亮一点。

踩坑：每次都加载得很慢，哭了，希望在 `https://vercel.com/yunyis-projects/blog-umami/settings/functions` 里把 `Function Region` 改成“伦敦”能有所好转！

## Hexo _config.yml

在 `_config.yml` 里的设置参考 [所用主题](https://github.com/prinsss/hexo-theme-murasaki/blob/master/_config.yml) 的设置：
```yaml
# Umami - A self-hosted alternative to Google Analytics.
# See: https://github.com/umami-software/umami
umami:
  enable: true
  script_url:
  website_id:
```

## 写在后面

趁着给博客装修，趁机摸了一把 Docker、MySQL、Vercel，折腾好了圆满收工。

之后可能继续折腾 [为 Hexo 博客添加页面访问计数器](https://prinsss.github.io/add-page-view-counter-for-hexo/) 以及 [使用 Google Analytics API 实现博客阅读量统计](https://prin.pw/google-analytics-api-page-views-counter/#踩坑serverless-部署的可行性)，这次装修的新鲜劲应该够我喜欢几个月了吧。