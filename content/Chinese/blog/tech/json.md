---
Tags:
- Data
- JSON
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
date: "2024-01-06"
description: ""
disableShare: true
draft: true
hidemeta: false
lastmod: "2024-01-08"
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

网络传输中常使用的格式：节省内存和传输所用的网络带宽
```JavaScript
{"key":"value","key2":"value2"}
```

# 数据类型和访问内容

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
弱类型语言：没有长度限制

强类型语言：根据取数类型

## 对象 Objects
```JavaScript
{
  "key": {
    "key2": "value2",
    "key3": "value3"
  }
}
```

## 数组
```JavaScript
{
  "key": [123, 456, 7.89]; //数字
  "key2": ["今天", "天气", "不错"]; //字符串
  "key3":  [
    {
      "name": "0",
      "age": "1"
    },{
      "name": "0",
      "age": "1"
    },{
      "name": "0",
      "age": "1"
    }
  ] //对象
} 
```

