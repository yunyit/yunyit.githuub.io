---
title: 利用 Obsidian Metadata Menu 插件安排工作档案
date: '2024-02-17 19:59:08'
updated: '2024-02-17 19:59:08'
categories: 技术
tags:
  - Data
  - 工作笔记
  - Obsidian
  - metadata
---

# 提出问题

一开始使用标签 `tag` 管理每日工作笔记的 bug 记录和常用客户信息，在一星期使用后，带有分类的标签变得越来越长，如 `#zapmap/bug/on` ；多了之后，每天的工作笔记变得很冗长，就开始琢磨其他办法。

# 解决问题过程

管理 bugs 记录，相当于个人工作笔记中的 ticket system：

- 简化 daily note，bug 单页 跟进 bug 的进度，`[[]]` 回链 daily note；
- `[[]]` entry 方便回溯；
- 每页 metadata（yaml格式）定义进度 `status` 和 `assignee` 跟进人；

fileClass 文件如下：
```yaml
---
limit: 50
mapWithTag: true
icon: bug
tagNames:
  - zapmap/bug
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews:
  - name: default
    children: []
    sorters:
      - id: bugs____status
        name: status
        direction: desc
        priority: 1
        customOrder: []
    filters:
      - id: bugs____file
        name: file
        query: ""
      - id: bugs____status
        name: status
        query: ""
      - id: bugs____assignee
        name: assignee
        query: ""
    columns:
      - id: bugs____file
        name: file
        hidden: false
        position: 0
      - id: bugs____status
        name: status
        hidden: false
        position: 1
      - id: bugs____assignee
        name: assignee
        hidden: false
        position: 2
favoriteView: 
fieldsOrder:
  - pmbe79
  - ZwwpKP
version: "2.32"
fields:
  - name: status
    type: Select
    options:
      valuesList:
        "1": open
        "2": escalated
        "3": close
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: ""
    id: pmbe79
  - name: assignee
    type: Multi
    options:
      valuesList:
        "1": "[[DM]]"
        "2": "[[DM]]"
        "3": "[[DM]]"
        "4": "[[DM]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: ""
    id: ZwwpKP
---

```

# 总结和提升

启动一个 workflow/管理系统不用考虑太多，有个初步想法、先做起来最重要！迭代可以慢慢来， Metadata Menu 管理常用客户信息之后，才迭代了自己工作笔记的 track。

# 相关阅读

- [官方文档](https://mdelobelle.github.io/metadatamenu/)
- [fileclasses 官方文档](https://mdelobelle.github.io/metadatamenu/fileclasses/ )
- 相关博文：[Obsidian 自定义工作笔记](https://www.yunyitang.me/Obsidian-work-note/) 