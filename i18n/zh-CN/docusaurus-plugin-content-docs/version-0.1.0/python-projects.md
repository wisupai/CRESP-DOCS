---
sidebar_position: 3
---

# CRESP用于Python项目

本文档说明如何将CRESP协议与Python项目一起使用，利用与`pyproject.toml`的兼容性。

## 与pyproject.toml集成

CRESP协议通过扩展标准的`pyproject.toml`格式，设计为与Python项目无缝协作。您可以：

1. 在CRESP配置中引用现有的`pyproject.toml`文件
2. 直接在CRESP文件中包含Python项目配置

## 配置示例

以下是如何在CRESP文件中配置Python项目的示例：

```toml
###############################################################################
# Python项目配置
###############################################################################

[pyproject]
file = "pyproject.toml"  # 可选：指向现有的pyproject.toml文件

# 如果没有引用外部pyproject.toml，您可以直接包含配置：
[pyproject.build-system]
requires = ["setuptools>=42", "wheel"]
build-backend = "setuptools.build_meta"

[pyproject.tool.poetry]
name = "my-research-project"
version = "0.1.0"
description = "使用Python的可复现研究项目"
authors = ["研究者姓名 <researcher@example.com>"]
readme = "README.md"
packages = [{include = "my_package"}]

[pyproject.tool.poetry.dependencies]
python = "^3.8"
numpy = "^1.22.0"
pandas = "^1.4.0"
scikit-learn = "^1.0.2"
matplotlib = "^3.5.1"
torch = "^1.10.0"

[pyproject.tool.poetry.group.dev.dependencies]
pytest = "^7.0.0"
black = "^22.1.0"
```

## 环境管理

对于Python项目，CRESP支持多种环境管理方法：

### 使用Poetry

如果您使用Poetry进行依赖管理，CRESP配置可以直接使用`pyproject.toml`中的Poetry部分：

```toml
[pyproject.tool.poetry]
# 如上所示的Poetry配置
```

### 使用pip

对于基于pip的项目，您可以在软件包部分指定依赖项：

```toml
[[software.packages]]
name = "numpy"
version = "1.22.0"
source = "pip"

[[software.packages]]
name = "pandas"
version = "1.4.0"
source = "pip"
```

### 使用Conda

对于基于Conda的环境，您可以指定环境文件：

```toml
[software.conda]
environment_file = "environment.yml"
```

## 执行配置

指定如何运行您的Python项目：

```toml
[execution]
verify_script = "verify_env.py"  # 验证环境的脚本
command = "python main.py --config config.json"  # 运行实验的命令
```

## 最佳实践

1. **版本固定**：始终固定依赖项的确切版本以确保可复现性
2. **哈希验证**：包含关键包的哈希值
3. **环境隔离**：使用虚拟环境（Poetry、venv、conda）
4. **随机种子控制**：设置全局和局部随机种子
5. **文档**：包含关于如何运行实验的详细文档

## 项目结构示例

使用CRESP的典型Python项目可能具有以下结构：

```
my-research-project/
├── cresp.toml              # CRESP配置文件
├── pyproject.toml          # Python项目配置
├── README.md               # 项目文档
├── data/                   # 数据目录
│   ├── raw/                # 原始数据
│   └── processed/          # 处理后的数据
├── src/                    # 源代码
│   ├── __init__.py
│   ├── data_processing.py
│   ├── models.py
│   └── visualization.py
├── notebooks/              # Jupyter笔记本
│   └── analysis.ipynb
├── tests/                  # 测试
│   └── test_models.py
├── verify_env.py           # 环境验证脚本
└── main.py                 # 主实验脚本
```

通过遵循这些指南，您可以确保基于Python的计算研究使用CRESP协议完全可复现。 