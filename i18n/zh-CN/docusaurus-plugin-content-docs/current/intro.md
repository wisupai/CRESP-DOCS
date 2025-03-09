---
sidebar_position: 1
---

# CRESP 简介

CRESP（计算研究环境标准化协议）是一个开源协议，旨在解决计算实验的可复现性问题。

## 什么是CRESP？

CRESP是Computational Research Environment Standardization Protocol的缩写，它提供了一种标准化的方式来描述计算实验的环境、依赖和过程，确保实验可以被完全复现。

## 为什么需要CRESP？

随着计算科学与传统学科的深度融合，几乎所有学科领域都在不同程度上依赖计算机进行实验和分析。然而，由于以下原因，计算实验的复现往往面临挑战：

- 计算资源差异（GPU型号、运行内存等）
- 系统依赖问题
- 编程框架和工具版本不一致
- 插件缺失
- 随机数控制
- 文档不完整
- 路径问题
- 数据可访问性

CRESP协议通过提供一个全面的标准，解决了这些复现性问题，使科研成果更容易被验证和构建。

## CRESP的主要特点

- **标准化描述**：使用TOML格式描述实验环境和过程
- **多语言支持**：支持Python、R、MATLAB等多种编程语言
- **兼容性**：与现有项目结构兼容，如pyproject.toml
- **可扩展性**：可以根据不同学科的需求进行扩展
- **易于集成**：可以轻松集成到现有的科研工作流程中

## 如何使用CRESP

CRESP协议使用TOML格式的配置文件来描述实验环境。根据使用的编程语言，可以创建不同的配置文件：

- Python项目：`pyproject.toml`
- R语言项目：`rproject.toml`
- MATLAB项目：`matproject.toml`

这些配置文件包含了实验所需的所有信息，从系统依赖到数据路径，确保实验可以被完全复现。

## 开始使用

请查看以下文档，了解如何为您的项目创建CRESP配置文件：

- [为什么使用CRESP](./why-cresp.md)
- [CRESP格式规范](./cresp-format.md)
- [Python项目配置](./python-projects.md)
- [R语言项目配置](./r-projects.md)
- [MATLAB项目配置](./matlab-projects.md)

## 贡献

CRESP是一个开源项目，我们欢迎社区贡献。如果您有任何建议或想要参与开发，请访问我们的[GitHub仓库](https://github.com/wisupai/CRESP-DOCS)。

## 许可证

CRESP协议采用[MIT许可证](./license.md)。 