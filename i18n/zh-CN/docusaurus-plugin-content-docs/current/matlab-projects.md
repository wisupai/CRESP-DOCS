---
sidebar_position: 5
---

# CRESP用于MATLAB项目

本文档说明如何将CRESP协议与MATLAB项目一起使用，介绍用于标准化MATLAB计算环境的`matproject`格式。

## matproject简介

MATLAB传统上缺乏标准化的项目配置格式。CRESP协议引入了`matproject`格式来填补这一空白，确保基于MATLAB的计算研究的可复现性。

## 配置示例

以下是如何在CRESP文件中配置MATLAB项目的示例：

```toml
###############################################################################
# MATLAB项目配置
###############################################################################

[matproject]
file = "matproject.json"  # 可选：指向外部配置文件

# 如果没有引用外部文件，您可以直接包含配置：
name = "my-matlab-research-project"
version = "1.0.0"
description = "使用MATLAB的可复现研究项目"
authors = ["研究者姓名 <researcher@example.com>"]

[matproject.matlab]
version = "R2022a"  # MATLAB版本
license_type = "Academic"  # 许可证类型

[matproject.toolboxes]
"Signal Processing Toolbox" = "9.1"
"Statistics and Machine Learning Toolbox" = "12.3"
"Image Processing Toolbox" = "11.4"
"Deep Learning Toolbox" = "14.3"
```

## 工具箱管理

MATLAB功能通过工具箱扩展。指定所需的工具箱及其版本：

```toml
[matproject.toolboxes]
"Signal Processing Toolbox" = "9.1"
"Statistics and Machine Learning Toolbox" = "12.3"
"Image Processing Toolbox" = "11.4"
```

## 外部依赖

对于外部MATLAB包（例如，来自File Exchange或GitHub），按如下方式指定：

```toml
[[matproject.external_packages]]
name = "export_fig"
source = "https://github.com/altmany/export_fig"
version = "3.21"
sha256 = "3f786850e387550fdab836ed7e6dc881de23001b2c81f0a1b2c3d4e5f67890ab"

[[matproject.external_packages]]
name = "gramm"
source = "https://github.com/piermorel/gramm"
commit = "9f2d3c4b5a6e7f8910da1b2c3d4e5f67890abcde"
```

## MEX文件和编译代码

对于使用MEX文件或其他编译代码的项目，指定编译器要求：

```toml
[matproject.compiler]
name = "MinGW-w64 C/C++"  # 编译器名称
version = "8.1.0"  # 编译器版本
```

## 执行配置

指定如何运行您的MATLAB项目：

```toml
[execution]
verify_script = "verify_env.m"  # 验证环境的脚本
command = "matlab -nodisplay -nosplash -nodesktop -r \"run('main.m'); exit;\""  # 运行实验的命令
```

## 最佳实践

1. **版本固定**：始终指定确切的MATLAB和工具箱版本
2. **路径管理**：在MATLAB脚本中使用适当的路径管理
3. **随机种子控制**：设置全局和局部随机种子
4. **文档**：包含关于如何运行实验的详细文档
5. **启动脚本**：包含startup.m文件以配置MATLAB环境

## 项目结构示例

使用CRESP的典型MATLAB项目可能具有以下结构：

```
my-matlab-research-project/
├── cresp.toml              # CRESP配置文件
├── matproject.json         # MATLAB项目配置（可选）
├── README.md               # 项目文档
├── data/                   # 数据目录
│   ├── raw/                # 原始数据
│   └── processed/          # 处理后的数据
├── src/                    # 源代码
│   ├── +utils/             # MATLAB工具包
│   ├── data_processing.m
│   ├── models.m
│   └── visualization.m
├── lib/                    # 外部库
│   └── export_fig/         # 外部MATLAB包
├── mex/                    # MEX文件
│   └── fast_algorithm.c    # MEX文件的C源代码
├── tests/                  # 测试
│   └── test_models.m
├── verify_env.m            # 环境验证脚本
├── startup.m               # MATLAB启动脚本
└── main.m                  # 主实验脚本
```

## 转换现有MATLAB项目

要将现有MATLAB项目转换为使用CRESP协议：

1. 在项目根目录中创建`cresp.toml`文件
2. 指定MATLAB版本和所需工具箱
3. 列出外部依赖项
4. 添加执行配置
5. 添加硬件要求
6. 添加数据集信息

## matproject.json格式

如果您希望将MATLAB特定配置保持分离，可以使用`matproject.json`文件：

```json
{
  "name": "my-matlab-research-project",
  "version": "1.0.0",
  "description": "使用MATLAB的可复现研究项目",
  "authors": ["研究者姓名 <researcher@example.com>"],
  "matlab": {
    "version": "R2022a",
    "license_type": "Academic"
  },
  "toolboxes": {
    "Signal Processing Toolbox": "9.1",
    "Statistics and Machine Learning Toolbox": "12.3",
    "Image Processing Toolbox": "11.4"
  },
  "external_packages": [
    {
      "name": "export_fig",
      "source": "https://github.com/altmany/export_fig",
      "version": "3.21"
    }
  ]
}
```

通过遵循这些指南，您可以确保基于MATLAB的计算研究使用CRESP协议完全可复现。 