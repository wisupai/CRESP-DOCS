---
sidebar_position: 4
---

# CRESP用于R项目

本文档说明如何将CRESP协议与R项目一起使用，介绍用于标准化R计算环境的`rproject`格式。

## rproject简介

虽然R传统上使用DESCRIPTION文件来存储包元数据，但CRESP协议引入了更全面的`rproject`格式，扩展了这一功能，以确保基于R的计算研究的可复现性。

## 配置示例

以下是如何在CRESP文件中配置R项目的示例：

```toml
###############################################################################
# R项目配置
###############################################################################

[rproject]
file = "DESCRIPTION"  # 可选：指向现有的DESCRIPTION文件

# 如果没有引用外部DESCRIPTION文件，您可以直接包含配置：
name = "my-r-research-project"
version = "0.1.0"
description = "使用R的可复现研究项目"
authors = ["研究者姓名 <researcher@example.com>"]

[rproject.dependencies]
R = "^4.1.0"
tidyverse = "^1.3.1"
ggplot2 = "^3.3.5"
dplyr = "^1.0.7"
caret = "^6.0.90"
randomForest = "^4.6.14"
```

## 环境管理

对于R项目，CRESP支持多种环境管理方法：

### 使用renv

[renv](https://rstudio.github.io/renv/)是R项目的依赖管理工具。您可以在CRESP配置中指定renv.lock文件：

```toml
[rproject.renv]
lockfile = "renv.lock"
```

### 使用packrat

对于使用[packrat](https://rstudio.github.io/packrat/)的项目，您可以指定packrat目录：

```toml
[rproject.packrat]
directory = "packrat"
```

### 直接依赖项规范

您也可以直接在CRESP文件中指定依赖项：

```toml
[rproject.dependencies]
R = "^4.1.0"
tidyverse = "^1.3.1"
ggplot2 = "^3.3.5"
```

## CRAN和Bioconductor仓库

指定用于包安装的仓库：

```toml
[rproject.repositories]
CRAN = "https://cloud.r-project.org"
Bioconductor = "https://bioconductor.org/packages/release/bioc"
```

## 执行配置

指定如何运行您的R项目：

```toml
[execution]
verify_script = "verify_env.R"  # 验证环境的脚本
command = "Rscript main.R --config config.json"  # 运行实验的命令
```

## 最佳实践

1. **版本固定**：始终固定R包的确切版本以确保可复现性
2. **环境隔离**：使用renv或packrat进行环境隔离
3. **随机种子控制**：设置全局和局部随机种子
4. **文档**：包含关于如何运行实验的详细文档
5. **会话信息**：在文档中包含R会话信息

## 项目结构示例

使用CRESP的典型R项目可能具有以下结构：

```
my-r-research-project/
├── cresp.toml              # CRESP配置文件
├── DESCRIPTION             # R包描述文件
├── README.md               # 项目文档
├── data/                   # 数据目录
│   ├── raw/                # 原始数据
│   └── processed/          # 处理后的数据
├── R/                      # R源代码
│   ├── data_processing.R
│   ├── models.R
│   └── visualization.R
├── analysis/               # 分析脚本
│   └── analysis.Rmd        # R Markdown分析
├── tests/                  # 测试
│   └── testthat/           # testthat测试
├── renv/                   # renv目录（如果使用renv）
│   └── renv.lock           # renv锁定文件
├── verify_env.R            # 环境验证脚本
└── main.R                  # 主实验脚本
```

## 转换现有R项目

要将现有R项目转换为使用CRESP协议：

1. 在项目根目录中创建`cresp.toml`文件
2. 引用现有的DESCRIPTION文件或直接指定依赖项
3. 添加执行配置
4. 添加硬件和软件要求
5. 添加数据集信息

通过遵循这些指南，您可以确保基于R的计算研究使用CRESP协议完全可复现。 