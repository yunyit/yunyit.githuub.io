---
title: macos-dev-setup
date: '2024-06-16 14:35:30'
updated: '2024-06-16 14:35:30'
categories: 技术
tags:
  - MacOS
  - 开发
  - Data
---

<!--
reference:
https://www.chrisatmachine.com/posts/01-macos-developer-setup
-->

前几周开始了新工作，主要负责数据库，本磨美美地换了一个磨，配置各种乱七八糟的就是第一周主线任务。

以下是数据女工的 Mac 配置，主要分为：
- 终端
- 文本编辑器
- package 管理
- 数据库工具
- API 工具

本文会在发出一年内根据使用情况进行小幅度修改，作为工作菜鸟存档。

## 终端

一开始还是用的苹果自带，后来秉持着“终端帅最重要”的原则，上了 iTerm2 和 ohmyzsh，改了半天颜色字体，最后配置为：

- https://github.com/icewind/everforest.iterm2 > nvim 也有对应配色，就很美丽～～
- https://github.com/icewind/everforest.iterm2
- `.zshrc`: `ZSH_THEME='random'` `ZSH_THEME_RANDOM_CANDIDATES=( "crunch" "gozilla" "cypher" "dpoggi" "eastwood" "emotty" "jbergantine" "josh" "kennethreitz" "minimal" "muse" "sorin" )` `plugins=(git bundler dotenv brew compleat command-not-found gh history iterm2 macos node rake rbenv ruby ssh ssh-agent tmux tmux-cssh yarn zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting zsh-autocomplete)`

配置如上之后基本就能顺利使用了！当然，我对终端的开发还不到百分之一，继续捣鼓工具们就是摸鱼时候的不二之选（此条老板不可见）。


