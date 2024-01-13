---
Tags:
- Data
- JSON
- 数据格式
- Database
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date: "2024-01-06"
description: ""
disableShare: true
draft: false
hidemeta: false
lastmod: "2024-01-09"
showToc: true
showbreadcrumbs: true
slug: ""
title: JSON
weight: null
---


> 在实习公司的数据岗位还挺常用的。

# 定义

JavaScript Object Notation -

```JavaScript
{
  "key": "value",
  "key2": "value2"
}
```

网络传输中常使用的格式：以节省内存和传输所用的网络带宽
```JavaScript
{"key":"value","key2":"value2"}
```

# 数据类型

## 文本/字符串 Strings
```JavaScript
{
  "key": "value"
}
```

## 数字 Numbers
```JavaScript
{
  "key": 123. 456
}
```

- 弱类型语言：没有长度限制
- 强类型语言：根据取数类型

## 对象 Objects
```JavaScript
{
  "key": {
    "key2": "value2",
    "key3": "value3"
  }
}
```

## 数组 Arrays
```JavaScript
{
  "key": [123, 456, 7.89]; //数字
  "key2": ["今天", "天气", "不错"]; //字符串
  "key3":  [
    {
      "name": "0",
      "age": "1"
    },{
      "name": "a",
      "age": "2"
    },{
      "name": "b",
      "age": "3"
    }
  ] //对象
} 
```

## null
```JavaScript
{
  "key": null
}
```

# 取值方式
根据不同编程语言具体不同：
相应 function 后加
```JavaScript
key.key3
```
或
```JavaScript
key[0].name
```

# 应用
1. 广泛应用于前后端的数据交换；
2. 配置文件的格式，如VS Code；

## 类似的其他数据交换格式
- YMAL
- XML
- PROPERTIES
- ...

## JSON的优点
1. 语法简单，易读易写；
2. 简洁，易于计算机解析；