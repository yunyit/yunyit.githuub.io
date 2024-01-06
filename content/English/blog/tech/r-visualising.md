---
Tags:
- R
- Data
TocOpen: true
author:
- Yunyi
comments: true
cover:
  alt: ""
  caption: ""
  image: ""
  relative: false
date: "2024-01-05"
disableShare: true
draft: false
hidemeta: false
lastmod: "2024-01-06"
showToc: true
showbreadcrumbs: true
slug: ""
title: R Visualising
weight: null
---

> Reviewing visualing data with R with this [exmaple project](https://app.datacamp.com/workspace/w/980fb8cc-bfa9-4071-aea3-ca8b1e3a95a8/edit)。

# Import libraries

```R
library(readr)
library(ggplot2)
library(dplyr)
```

# Import data
## From csv to dataset

```R
Read datasets/confirmed_cases_worldwide.csv into confirmed_cases_worldwide
```

## Select/filter data

```R
# Filter for China, from Feb 15

china_after_feb15 <- confirmed_cases_china_vs_world %>%
  filter(is_china == "China", date >= "2020-02-15")
```

# Plot

## One line
```R
# Draw a line plot of cumulative cases vs. date
# Label the y-axis

ggplot(confirmed_cases_worldwide, aes(date, cum_cases)) +
  geom_line() +
  ylab("Cumulative confirmed cases")
```

## Multiple lines

```R
# Using confirmed_cases_top7_outside_china, draw a line plot of
# cum_cases vs. date, colored by country

ggplot(confirmed_cases_top7_outside_china, aes(date, cum_cases, color = country)) +
  geom_line() +
  ylab("Cumulative confirmed cases")
```

## Scale

```R
# Modify the plot to use a logarithmic scale on the y-axis

plt_not_china_trend_lin +
  scale_y_log10()

`geom_smooth()` using formula 'y ~ x'
```
