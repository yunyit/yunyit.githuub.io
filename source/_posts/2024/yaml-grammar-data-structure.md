---
title: 'YAML 数据结构和语法'
date: '2024-01-13 23:54:26'
updated: '2024-01-25 23:54:26'
categories: 技术
tags:
  - Data
  - config
---

> 认知始于 Markdown 文件，不知道终于哪儿。

# 定义

> YAML Ain't a Markup Language / Yet Another Markup Language

文件后缀：`.yml` 或 `.yaml`

注释：井号 或 哈希符号 `#`

结构：映射或列表，遵循层次结构，具体取决于缩进以及定义键值的方式。

语法：

- 大小写敏感；
- 使用缩进表示层级关系；
- 缩进时不允许使用 `Tab` 键，只允许使用空格；
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可；

# 应用

配置文件 configuration files -

## YAML / JSON

相比 JSON，因为 YAML 有更好的可读性，对用户更友好，所以通常建议用 YAML 来编写配置文件，尽管它们在大多数情况下可以互换使用。

# 数据类型

- 对象 mapping/hash/dictionary：键值对的集合；
- 数组 sequence/list：一组按次序排列的值；数组和对象可以构成复合结构；
- 纯量：最基本的，不可再分的值；

## 对象

对象的一组键值对，使用冒号结构表示。

```yaml
animal: pets
```

转为 JavaScript 如下：

```JavaScript
{ animal: 'pets' }
```

Yaml 也允许另一种写法，将所有键值对写成一个行内对象。

```yaml
hash: { name: Steve, foo: bar }
```

转为 JavaScript 如下：

```JavaScript
{ hash: { name: 'Steve', foo: 'bar' } }
```

## 数组

一组连词线开头的行，构成一个数组。

```yaml
- Cat
- Dog
- Goldfish
```

转为 JavaScript 如下：

```JavaScript
[ 'Cat', 'Dog', 'Goldfish' ]
```

## 纯量

纯量是最基本的、不可再分的值。

以下数据类型都属于 JavaScript 的纯量：

- 字符串
- 布尔值
- 整数
- 浮点数
- `null`：用 `~` 表示
- 时间
- 日期

# 复合结构

对象和数组可以结合使用，形成复合结构。

## 示例

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

- [Barney](https://hugo.bnblogs.cc) 的 [yaml 语法](https://hugo.bnblogs.cc/yaml语法/) 整理；
- [阮一峰](https://www.ruanyifeng.com/blog/) 的 [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)；
- [YAML 1.2 规格](https://yaml.org/spec/1.2.2/)；
