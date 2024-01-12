---
Tags:
- Data
- YAML
- 数据格式
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date: "2024-01-12"
description: ""
disableShare: true
draft: true
hidemeta: false
lastmod: "2024-01-12"
showToc: true
showbreadcrumbs: true
slug: ""
title: YAML
weight: null
---


> 认知始于 Markdown 文件，不知道终于哪儿。

# 定义
YAML Ain't a Markup Language / Yet Another Markup Language

文件后缀为 .yml 或 .yaml

# 应用
- 配置文件 configuration files；
- 表达或编辑数据结构；

# 数据类型
- 对象 mapping/hash/dictionary：键值对的集合
- 数组 sequence/list：一组按次序排列的值；数组和对象可以构成复合结构；
- 纯量：最基本的，不可再分的值；

## 对象

## 数组

## 纯量

# 示例
选自 [Red Hat](https://www.redhat.com/en/topics/automation/what-is-yaml) 的学生信息例子：

```yaml
#Comment: Student record
#Describes some characteristics and preferences
---
name: Martin D'vloper #key-value
age: 26
hobbies: 
  - painting #first list item
  - playing_music #second list item
  - cooking #third list item
programming_languages:
  java: Intermediate
  python: Advanced
  javascript: Beginner
favorite_food: 
  - vegetables: tomatoes 
  - fruits: 
      citrics: oranges 
      tropical: bananas
      nuts: peanuts
      sweets: raisins
```

使用 Python 的 PyYAML 库，可转化为：
```python
[
    {
        "name": "Martin D'vloper",
        "age": 26,
        "hobbies": ["painting", "playing_music", "cooking"],
        "programming_languages": {
            "java": "Intermediate",
            "python": "Advanced",
            "javascript": "Beginner",
        },
        "favorite_food": [
            {"vegetables": "tomatoes"},
            {
                "fruits": {
                    "citrics": "oranges",
                    "tropical": "bananas",
                    "nuts": "peanuts",
                    "sweets": "raisins",
                }
            },
        ],
    }
]
```

# 相关阅读
[Barney](https://hugo.bnblogs.cc) 的 [yaml语法](https://hugo.bnblogs.cc/yaml语法/) 整理。