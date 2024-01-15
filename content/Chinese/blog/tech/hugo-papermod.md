---
Tags:
- PaperMod
- Hugo
- Disqus
- 建站
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date:
  '{ .Date }': null
description: ""
disableShare: true
draft: true
hidemeta: false
lastmod:
  '{ .Date }': null
showToc: true
showbreadcrumbs: true
slug: ""
title: Hugo + PaperMod 自定义 Homeinfo 中英博客搭建
weight: null
---

> 从入门到踩坑到从坑里爬起来！


# 安装过程
1. 首先需要安装 Hugo，安装 Hugo 需要利用一个包管理工具。对于 MacOS 系统 Hugo 可以直接用 `Homebrew` 来安装，打开终端输入
```
brew install hugo
```

2. Hugo 的 [tutorial](https://gohugo.io/getting-started/quick-start/) 介绍了如何创建一个项目，其中 `step2`（.yml的config文件）和 `step3`（下载主题）要根据 PaperMod 的 [guide](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation0) 来配置。

# 文件介绍
- `content`：用于放博客内容
- `data`：不用管
- `layouts`：自定义的 HTML
- `public`：项目导出文件
- `resources`：自定义的 CSS 和 JavaScript
- `static`：存放图片
- `themes`：主题

进入 `themes/PaperMod` 则是 PaperMod 的相关代码，比较主要的目录有：
- `assets`：PaperMod 的 CSS 和 JavaScript 代码
- `layouts`：PaperMod 的 HTML

# Config.yml
建议直接按照 [Sulv’s Blog ：hugo博客搭建 | PaperMod主题](https://www.sulvblog.cn/posts/blog/build_hugo/)进行配置。

# 创建文章
1. 在终端输入`hugo new 文章名称.md`，就会在`content`文件夹下创建 markdown 文件；
2. 或在对应`content`文件夹下新建`文章名称.md`；

文章头部信息可以修改这篇文章的属性，建议按照 [Sulv’s Blog ：hugo博客搭建 | PaperMod主题](https://www.sulvblog.cn/posts/blog/build_hugo/) 进行配置。

# 本地预览
1. 在终端输入`hugo server -D`启动。
2. 启动服务器后，打开浏览器，本地预览网址为`localhost:1313`。

# 网站部署
Github Pages 发布静态博客。

- 优点
  - 仅需一个 github 账号和简单配置即可将静态博客发布到 github pages
  - 没有维护的时间成本, 可以将精力更多的放到博客内容本身上去
  - 无需备案
  - 无需 ssl 证书
- 缺点
  - 访问速度较慢
  - 访问速度较慢
  - 访问速度较慢

# 自定义目录
`content` 里每个文件夹内都可以添加一个 `_index.md` 文件，该文件里面可以加 Front Matter 自定义（多语言）标题，如：
```yaml
---
hidemeta: true
title: 博客
---
```

初始项目文件夹结构如下：
```
.
├── config.yml
├── content/
│   ├── archives.md  
│   ├── search.md 
│   └── posts/
├── static/
└── themes/
    └── PaperMod/
```

# 自定义文章 Front Matter 

我的模板如下，有一些字段是我自己自定义的，不是 [PaperMod](https://github.com/adityatelange/hugo-PaperMod/) 默认带有的，直接使用该字段可能会无效，请酌情使用:

```yaml
---
Tags:
- PaperMod
- Hugo
- Disqus
- 建站
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date:
  '{ .Date }': null
description: ""
disableShare: true
draft: true
hidemeta: false
lastmod:
  '{ .Date }': null
showToc: true
showbreadcrumbs: true
slug: ""
title: Hugo + PaperMod 自定义 Homeinfo 中英博客搭建
weight: null
---
```

# 多语言
如果我们想要使用多语言（中英为例），就需要在 `content` 文件夹下准备两个文件夹，例如 `Chinese` 和 `English` ，一个放中文，另一个放英文。

在 `config.yml` 中需要做以下修改：
```yaml
defaultContentLanguage: en
defaultContentLanguageInSubdir: true

languages:
    en:
        languageName: "English"
        contentDir: content/English
    zh:
    	languageName: "中文"
        contentDir: content/Chinese
```


# 部署 Disqus 评论



# Shortcode
