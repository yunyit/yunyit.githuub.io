---
Tags:
- PaperMod
- Hugo
- Markdown
- 建站
- YAML
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date: "2024-01-15"
description: ""
disableShare: true
draft: false
hidemeta: false
lastmod: "2024-01-15"
showToc: true
showbreadcrumbs: true
slug: ""
title: Hugo/PaperMod 双语 Home-Info/Profile 博客搭建
weight: 1
---

> 从入门到踩坑到从坑里爬起来！


# 安装 
1. 首先需要安装 `Hugo`，安装 `Hugo` 需要利用一个包管理工具。对于 MacOS 系统 `Hugo` 可以直接用 `Homebrew` 来安装，打开终端输入
```shell
brew install hugo
```

2. `Hugo` 的 [tutorial](https://gohugo.io/getting-started/quick-start/) 介绍了如何创建一个项目，其中 `step2`（.yml的config文件）和 `step3`（下载主题）要根据 `PaperMod` 的 [guide](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation0) 来配置。

# 文件夹管理
- `content`：用于放博客内容
- `data`：不用管
- `layouts`：自定义的 HTML
- `public`：项目导出文件
- `resources`：自定义的 CSS 和 JavaScript
- `static`：存放图片
- `themes`：主题

进入 `themes/PaperMod` 则是 [PaperMod](https://github.com/adityatelange/hugo-PaperMod/) 的相关代码，比较主要的目录有：
- `assets`：PaperMod 的 CSS 和 JavaScript 代码
- `layouts`：PaperMod 的 HTML

## 自定义博文目录
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
│   ├── img/
│   └── ...
└── themes
    └── PaperMod
```

# Config.yml
- [Sulv’s Blog ：hugo博客搭建 | PaperMod主题](https://www.sulvblog.cn/posts/blog/build_hugo/)
- [PaperMod 官方文档](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#intro)

## 多语言 config.yml 设置
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

## 双语双模式 config.yml 设置
一开始照本宣科做中英一式两份的个人网站，[后来随着](https://www.yunyitang.me/zh/blog/life/2023/) 扩展 [友链](https://www.yunyitang.me/zh/links/)、多读多看，加之自己在英工作，逐渐调整了个站中英页面的各自侧重。

[英文页面](https://www.yunyitang.me/en/) 有求职相关，主页保持 portfolio 的简洁， 选用了 [Profile Mode](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#profile-mode)：
```yaml
defaultContentLanguage: en # 默认语言
defaultContentLanguageInSubdir: true # 默认语言是否放在子目录中
languages:
    en:
        languageName: English
        languageCode: en
        contentDir: content/English
        menu:
          main:
            - identifier: about
              name: About
              url: /en/about/
              weight: 10
            - identifier: project
              name: Project
              url: /en/project/
              weight: 20
            - identifier: resume
              name: Resume
              url: /en/resume.pdf
              weight: 30
            - identifier: blog
              name: Blog
              url: /en/blog/
              weight: 40
            - identifier: tags
              name: 🕹️
              url: /en/tags/
              weight: 50
            - identifier: search
              name: Search
              url: /en/search/
              weight: 60
        params:
            profileMode:
              enabled: true
              title: Yunyi Tang
              subtitle: Little squirrel Hopping around 
              imageUrl: "img/Avatar.png"
              imageWidth: 150
              imageHeight: 150
              buttons:
                - name: Project
                  url: /en/project/
                - name: Resume
                  url: /en/resume.pdf
                - name: Log
                  url: /en/blog/tech/log/
            socialIcons:
                - name: github
                  url: "https://github.com/yunyit"
                - name: linkedin
                  url: "https://www.linkedin.com/in/yunyitang820/"
                - name: instagram
                  url: "https://www.instagram.com/yunyi_cam/"
                - name: goodreads
                  url: "https://www.goodreads.com/user/show/161105203-yunyi-tang"
                - name: email
                  url: "mailto:yunyi.tang.820@gmail.com"
```

[中文页面](https://www.yunyitang.me/zh/) 则更侧重博客输出，魔改了 [Home-Info Mode](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#home-info-mode)：
```yaml
defaultContentLanguage: en # 默认语言
defaultContentLanguageInSubdir: true # 默认语言是否放在子目录中
languages:
    en: # 参照上节
    zh:
        languageName: 中文
        languageCode: zh
        contentDir: content/Chinese
        menu:
          main:
            - identifier: about
              name: 关于
              url: /zh/about/
              weight: 10
            - identifier: log
              name: 建站
              url: /zh/log/
              weight: 20
            - identifier: blog
              name: 博客
              url: /zh/blog/
              weight: 30
            - identifier: links
              name: 友链
              url: /zh/links/
              weight: 40
            - identifier: tags
              name: 🕹️ 
              url: /zh/tags/
              weight: 50
            - identifier: search
              name: 搜索
              url: /zh/search/
              weight: 60
            - identifier: travellings
              name: 开往
              url: https://www.travellings.cn/go.html
              weight: 70
        params:
            homeInfoParams:
              enabled: true
              Title: Yunyi's Blog
              Content: const desc = "Little squirrel Hopping around";
              imageUrl: "img/Avatar.png"
              imageWidth: 110
              imageHeight: 110   
            socialIcons:
            - name: github
              url: "https://github.com/yunyit"
            - name: instagram
              url: "https://www.instagram.com/yunyi_cam/"
            - name: goodreads
              url: "https://www.goodreads.com/user/show/161105203-yunyi-tang"
            - name: email
              url: "mailto:yunyi.tang.820@gmail.com"  
```

# 创建文章
1. 在终端输入 `hugo new 文章名称.md`，在 `content` 文件夹下创建 markdown 文件；
2. 但我懒，直接在对应 `content` 文件夹下新建 `文章名称.md`；

## 自定义文章 Front Matter 

文章头部信息可以修改这篇文章的属性，建议按照 [Sulv’s Blog ：hugo博客搭建 | PaperMod主题](https://www.sulvblog.cn/posts/blog/build_hugo/) 进行配置。

我的 Front Matter 如下，在 [PaperMod](https://github.com/adityatelange/hugo-PaperMod/) 默认基础上稍加修改，供参考:

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

# 本地预览
1. 在终端输入 `hugo server -D` 启动。
2. 启动服务器后，打开浏览器，本地预览网址为 `localhost:1313`。

# 网站部署
[Github Pages](https://pages.github.com) 发布静态博客 -

优点：
- 仅需一个 github 账号和简单配置即可将静态博客发布到 github pages；
- 没有维护的时间成本, 可以将精力更多的放到博客内容本身上去；
- 无需备案；
- 无需 ssl 证书；

缺点：
- 访问速度较慢
- 访问速度较慢
- 访问速度较慢


# 自定义页面布局 html/css
参考 [PaperMod官方文档](https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/#override-theme-template)：

通过 `Hugo` 的查找顺序，您可以覆盖主题的任何部分。比如，自定义 `footer`，只需复制列表模板即可：
```
your-site/themes/papermod/layouts/partials/footer.html
```
然后粘贴到自己的 `layout` 文件夹下：
```
your-site/layouts/partials/footer.html
```
然后就可以对 `footer` 进行任何修改了。 `Hugo` 创建网站时，将使用 `your-site/layouts/partials/` 里的 `footer.html`，而不是 `your-site/themes/papermod/layouts/partials/` 里的 `footer.html`。

> `git pull` 更新 `your-site/themes/papermod/` 之后，记得也更新对应的自定义 html css，眼瞎 debug 体会！


## Home-Info 主页添加头像
修改在 `layouts/partials/home_info.html`：
```html
{{- with site.Params.homeInfoParams }}
<article class="first-entry home-info">
    {{- with site.Params.homeInfoParams }}
    <div class="profile_inner">
        {{- if .imageUrl -}}
        {{- $img := "" }}
        {{- if not (urls.Parse .imageUrl).IsAbs }}
        {{- $img = resources.Get .imageUrl }}
        {{- end }}
        {{- if $img }}
        {{- $processableFormats := (slice "jpg" "jpeg" "png" "tif" "bmp" "gif") -}}
        {{- if hugo.IsExtended -}}
        {{- $processableFormats = $processableFormats | append "webp" -}}
        {{- end -}}
        {{- $prod := (hugo.IsProduction | or (eq site.Params.env "production")) }}
        {{- if and (in $processableFormats $img.MediaType.SubType) (eq $prod true)}}
        {{- if (not (and (not .imageHeight) (not .imageWidth))) }}
        {{- $img = $img.Resize (printf "%dx%d" .imageWidth .imageHeight) }}
        {{- else if .imageHeight }}
        {{- $img = $img.Resize (printf "x%d" .imageHeight) }}
        {{ else if .imageWidth }}
        {{- $img = $img.Resize (printf "%dx" .imageWidth) }}
        {{ else }}
        {{- $img = $img.Resize "50x50" }}
        {{- end }}
        {{- end }}
        <a href="https://www.yunyitang.me/img/Avatar.png" ><img id="home-info-avatar" draggable="false" src="{{ $img.Permalink }}" alt="{{ .imageTitle | default "profile image" }}" title="{{ .imageTitle }}"
        height="{{ .imageHeight | default 50 }}" width="{{ .imageWidth | default 100 }}" style="border-radius: 50%!important; 
        background-color: #fff; padding: 2px;" /></a>
        {{- else }}
        <a href="https://www.yunyitang.me/img/Avatar.png" ><img id="home-info-avatar" draggable="false" src="{{ .imageUrl | absURL }}" alt="{{ .imageTitle | default "profile image" }}" title="{{ .imageTitle }}"
        height="{{ .imageHeight | default 50 }}" width="{{ .imageWidth | default 100 }}" style="border-radius: 50%!important; 
        background-color: #fff; padding: 2px;" /></a>
        {{- end }}
        {{- end }}
    </div>
    {{- end }}
    <!-- original codes -->
</article>
{{- end -}}
```

# 自定义 hover

主要在 `assets/css/common/header.css` 中修改：

## Home 主页键 hover
为页面左上角的 Home 添加 hover：
```css
.logo a:hover {
    transition: 0.15s;
    color: grey;
}
```

## 社交媒体 hover
以下为本人所标注的 5 个社交媒体标识的自定义颜色，选了各软件的主题色：

```css
svg:hover {
    transition: 0.15s;
}

.social-icons a[href*="github"]:hover svg {
    color: #333 !important;
}

.social-icons a[href*="linkedin"]:hover svg {
    color: #0A66C2 !important;
}

.social-icons a[href*="instagram"]:hover svg {
    color: #d62976 !important;
}

.social-icons a[href*="goodreads"]:hover svg {
    color: #75420e !important;
}

.social-icons a[href^="mailto"]:hover svg {
    color: #f2a60c !important;
}
```

## 黑夜模式和白天模式的 hover
```css
#moon:hover {
    transition: 0.15s;
    color: #1772b4;
}

#sun:hover {
    transition: 0.15s;
    color: #f4a83a;
}
```

## 主页 menu 中链接 hover
```css
#menu a:hover {
    transition: 0.15s;
    color: grey;
}
```

## Profile mode 按钮 hover
在 `/assets/css/common/profile-mode.css` 中修改：
```css
.button:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    /* box-shadow: 0 0 0 1px grey; */
    transform: scale(1.1) translateZ(0) translate3d(0, 0, 0) rotate(0.01deg);
}
```

# 目录栏目放侧边

[Sulv’s Blog：Hugo博客目录放在侧边 | PaperMod主题](https://www.sulvblog.cn/posts/blog/hugo_toc_side/)

# 修改字体
## 修改全局字体
在 [Google Fonts](https://fonts.google.com) 中查询开源字体，我目前的文章字体为 [JetBrains Mono](https://www.jetbrains.com/lp/mono/)。Google Fonts 会生成 HTML 和 css ，将 HTML 插入到 `layouts/partials/extend_head.html` 中，将 CSS 插入到 `assets/css/extended/blank.css`：
```css
body {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
}
```

## 修改代码字体

与全局字体类似，区别为 CSS 代码插入 `assets/css/extended/blank.css` 的位置不同：
```css
.post-content pre, code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13;
    line-height: 1.2;
    max-height: 40rem;
}
```

# 代码外观自定义
## 代码高亮
在两个地方修改 -

一个是 `assets/css/common/post-single.css`：
```css
.post-content pre code {
    display: block;
    margin: auto 0;
    padding: 10px;
    /* 主要代码颜色 */
    color: #c2ccd0;
    font-weight: 200;
    overflow-x: auto;
    word-break: break-all;
}
```

另一个是在 `assets/css/hljs/an-old-hope.min.css`：
```css
/* 注释 */
.hljs-comment,
.hljs-quote {
    font-weight: 200;
    color: #7f848e;
}

/* html标签 */
.hljs-deletion,
.hljs-name,
.hljs-regexp,
.hljs-tag {
    font-weight: 200;
    color: #63071C;
}

/* html属性 */
.hljs-tag {
    font-weight: 200;
    color: #ffa631;
}

/* css类名 */
.hljs-template-variable,
.hljs-variable,
.hljs-selector-class,
.hljs-selector-id {
    font-weight: 200;
    color: #057748;
}

/* 内置函数 */
.hljs-built_in,
.hljs-builtin-name {
    font-weight: 200;
    color: #56b6c2;
}

/* 函数输入 */
.hljs-params {
    font-weight: 200;
    color: #e5c07b;
}

/* 数字 */
.hljs-number {
    font-weight: 200;
    color: #ffa631;
}

/* css属性 */
.hljs-attribute {
    font-weight: 200;
    color: #A7A8DB;
}

/* 字符串 */
.hljs-addition,
.hljs-bullet,
.hljs-symbol,
.hljs-string {
    font-weight: 200;
    color: #4c8dae;
}

/* 函数名称 */
.hljs-section,
.hljs-title {
    font-weight: 200;
    color: #F25A47;
}

/* 关键字 */
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-link,
.hljs-meta,
.hljs-type {
    font-weight: 200;
    color: #D2D97A;
}

.hljs {
    display: block;
    overflow-x: auto;
    background: #1c1d21;
    color: #c2ccd0;
    padding: 0.5em;
}

.hljs-emphasis {
    font-style: italic;
}

.hljs-strong {
    font-weight: 700;
}

/* 选中时的背景颜色 */
.hljs ::selection,
.hljs::selection {
    background-color: #3d4556;
}
```

贪新鲜经常更改代码颜色，主要从 [500 Plus Traditional Colors of China](https://color-term.com/traditional-color-of-china/) 里选。

## 代码边框圆角

在 `/assets/css/common/post-single.css` 中修改：
```css
.post-content .highlight pre {
    background-color: var(--theme) !important;
    margin: 0;
}
```

# 添加评论
一开始基于 [MongoDB](https://www.mongodb.com/cloud/atlas/register) 和 [Vercel](https://vercel.com/signup) 部署 [twikoo](https://twikoo.js.org/en/intro.html) 评论系统，后来更换为 [Disqus](https://disqus.com)：

`Disqus` 在 `Hugo` 有内置选项，但我没有弄好，还是按照 [官方文档](https://disqus.com/admin/install/platforms/universalcode/) ，修改代码到 `layouts/partials/comment.html`：
```html
<div id="disqus_thread"></div>
<script>
    var disqus_config = function () {
        this.page.url = "https://www.yunyitang.me/";  // 域名
        this.page.identifier = PAGE_IDENTIFIER; // 无需更改
    
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://yunyitang-me.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

调用上述 `Disqus` 代码的位置：`layouts/_default/single.html`：
```html
<!-- other codes -->

  {{- if (.Param "comments") }}
  {{ partial "comments.html" . }}
  {{- end }}
</article>

{{- end }}{{/* end main */}}
```

# Shortcodes 扩展功能/插件
- [bilibili、YouTube、豆瓣阅读和电影卡片](https://www.sulvblog.cn/posts/blog/shortcodes/)
- [Spotify](https://gist.github.com/j-un/e7d0b3118556479392bd2269f7059242)

# 添加友链
[Sulv’s Blog：Hugo博客添加友链](https://www.sulvblog.cn/posts/blog/hugo_link/)

# 流量统计
我使用了 [umami](https://analytics.eu.umami.is/share/mNvu6TLrju52UZ97/Yunyi's%20Blog) 流量统计，并添加在页脚 `footer` 。

在 `layouts/partials/footer.html` 中修改：
```html
{{- if not (.Param "hideFooter") }}
<footer class="footer">
    <!-- other codes -->
    <span>
        <a href="https://analytics.eu.umami.is/share/mNvu6TLrju52UZ97/Yunyi's%20Blog" 
        rel="noopener noreferrer" target="_blank">Analytics</a>
    </span>
</footer>
{{- end }}
```

# 知识共享协议

从 [官方指南](https://chooser-beta.creativecommons.org) 选自适合自己的知识共享协议，并在 `layouts/partials/footer.html` 自定义 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans) 页脚：
```html
{{- if not (.Param "hideFooter") }}
<footer class="footer">
    <!-- other codes -->
    <span xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> 
        Licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" 
        rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0 ></a></span>
    <span>
        <a href="https://analytics.eu.umami.is/share/mNvu6TLrju52UZ97/Yunyi's%20Blog" 
        rel="noopener noreferrer" target="_blank">Analytics</a>
    </span>
</footer>
{{- end }}
```