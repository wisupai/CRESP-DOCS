---
sidebar_position: 0
---

# CRESP 简介

## 什么是CRESP？

**CRESP**（计算研究环境标准化协议，Computational Research Environment Standardization Protocol）是一个开源标准，旨在确保各学科计算研究的可复现性。它提供了一个全面的框架来描述计算实验，使其更容易被复现、分享和进一步发展。

## CRESP解决的问题

计算研究面临着显著的可复现性挑战。尽管计算实验本质上是数字化的，但由于以下原因，从已发表研究中复现计算实验通常很困难：

- 环境配置不一致
- 复杂的依赖链
- 文档不完整
- 随机种子管理不当
- 数据可用性有限

CRESP通过标准化计算环境和实验的描述方式来解决这些挑战。

## 框架架构

CRESP基于分层架构构建，为计算可复现性提供了全面的解决方案：

![CRESP框架架构](/img/CRESP%20Framework%20Architecture.svg)

该架构由五个主要层组成：

1. **核心层**：处理协议解析、验证、配置管理和API接口
2. **环境层**：分析需求、构建和验证环境，以及管理随机性以确保可复现性
3. **容器层**：提供对Docker和Singularity等容器化技术的支持
4. **执行层**：管理工作流执行，监控资源使用和执行状态
5. **适配层**：为Python、R、MATLAB、Julia提供特定语言的适配器，以及用于扩展的插件系统

这种分层方法确保CRESP能够处理计算实验的完整生命周期，同时保持灵活性和可扩展性。

## 主要特点

- **跨语言支持**：适用于Python、R、MATLAB和其他计算环境
- **全面的环境描述**：捕获硬件、软件和数据依赖
- **执行标准化**：提供明确的实验运行指南
- **虚拟化支持**：便于在虚拟环境和容器中部署
- **兼容性**：与现有项目结构和配置文件兼容
- **开源**：采用宽松的[MIT许可证](./license)，允许广泛采用和修改

## 快速开始

CRESP使用TOML格式描述计算实验。基本的CRESP配置文件包括：

```toml
# 基本CRESP配置
cresp_version = "1.0"
author = "研究者姓名"
email = "researcher@example.com"

experiment_name = "我的计算实验"
description = "实验的简要描述"

[hardware]
CPU = "Intel Core i7, 3.2GHz, 8核"
GPU = "NVIDIA RTX 3080, 10GB"
RAM = "32GB"

[software]
os = "Ubuntu 20.04 LTS"

# ... 其他配置 ...
```

## 如何使用本文档

本文档提供了关于CRESP协议的全面信息：

1. **[为什么使用CRESP](./why-cresp)**：了解计算研究中可复现性的重要性
2. **[CRESP格式](./cresp-format)**：了解CRESP协议的结构和组件
3. **特定语言指南**：
   - **[Python项目](./python-projects)**：将CRESP用于Python
   - **[R项目](./r-projects)**：将CRESP用于R
   - **[MATLAB项目](./matlab-projects)**：将CRESP用于MATLAB
4. **[许可证](./license)**：关于CRESP发布的MIT许可证的信息

## 关于项目

CRESP是Wisup AI Ltd的Rescience Lab产品的一部分。该协议旨在支持计算科学和跨学科领域的研究人员，包括生物信息学、医学信息学、地理信息学、量化金融、计算物理学、计算化学等领域。

我们的目标是解决使用计算方法但可能缺乏强大编程背景的研究人员面临的挑战。通过标准化计算环境，CRESP帮助研究人员专注于他们的领域专业知识，而不是在技术配置问题上挣扎。

加入我们，让计算研究更具可复现性、可访问性和影响力。 