---
sidebar_position: 2
---

# CRESP协议格式

计算研究环境标准化协议（CRESP）旨在确保跨不同研究领域的计算实验的可复现性。本文档概述了CRESP协议配置文件的格式和结构。

## CRESP配置示例

以下是TOML格式的CRESP配置文件的综合示例：

```toml
###############################################################################
# CRESP协议配置
###############################################################################

# 协议版本和基本信息
cresp_version = "1.0"          # CRESP协议版本
author = "John Smith"
email = "john.smith@example.com"
date = "2025-03-09"            # 配置文件创建日期

###############################################################################
# 实验基本信息
###############################################################################

experiment_name = "图像分类模型训练实验"
description = "在MNIST数据集上训练和评估自定义卷积神经网络进行图像分类。"

###############################################################################
# 硬件配置
###############################################################################

[hardware]
CPU = "Intel Xeon Silver 4114, 2.2GHz, 10 cores"    # 最低硬件要求
GPU = "NVIDIA Tesla V100, 16GB x1"
RAM = "64GB"

###############################################################################
# 软件环境配置
###############################################################################

[software]
os = "Ubuntu 20.04.5 LTS"    # 操作系统版本

[[software.packages]]
name = "Python"
version = "3.8.13"
source = "pip"
hash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"

[[software.packages]]
name = "PyTorch"
version = "1.10.2"
source = "pip"
hash = "3f786850e387550fdab836ed7e6dc881de23001b2c81f"

###############################################################################
# Python项目配置（兼容pyproject.toml）
###############################################################################

[pyproject]
file = "pyproject.toml"  # 指向项目中现有的pyproject.toml文件

[pyproject.build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

[pyproject.tool.poetry]
name = "vision-classifier"
version = "0.1.0"
description = "基于CNN的MNIST数据集图像分类器。"
authors = ["John Smith <john.smith@example.com>"]

[pyproject.tool.poetry.dependencies]
python = "^3.8"
torch = "^1.10.2"
# ...其他依赖项

###############################################################################
# R项目配置（rproject）
###############################################################################

[rproject]
# 指向R项目配置文件，如DESCRIPTION
file = "DESCRIPTION"
name = "r-vision-classifier"
version = "1.0.0"
description = "用R实现的基于CNN的MNIST图像分类项目。"
authors = ["John Smith <john.smith@example.com>"]

###############################################################################
# MATLAB项目配置（matproject）
###############################################################################

[matproject]
# 指向MATLAB项目配置文件，格式可以自定义，如JSON或其他结构
file = "matproject.json"
name = "mat-vision-classifier"
version = "1.0"
description = "基于MATLAB的图像分类项目，使用自定义CNN在MNIST数据集上。"
authors = ["John Smith <john.smith@example.com>"]

###############################################################################
# 全局随机种子设置
###############################################################################

random_seed = 12345

###############################################################################
# 数据集配置
###############################################################################

[[data]]
name = "训练集（MNIST）"
source = "https://storage.googleapis.com/cresp-examples/mnist_train.csv"
sha256 = "3f786850e387550fdab836ed7e6dc881de23001b2c81f0a1b2c3d4e5f67890ab"

###############################################################################
# 实验执行配置
###############################################################################

[execution]
verify_script = "verify_env.py"   # 环境验证脚本
command = "python train_model.py --epochs 5 --output model.pth"  # 启动实验的命令

###############################################################################
# 版本和仓库信息
###############################################################################

[version]
repo = "https://github.com/example-research/vision-classifier.git"
commit = "9f2d3c4b5a6e7f8910da1b2c3d4e5f67890abcde"

###############################################################################
# 虚拟化和部署配置
###############################################################################

[virtualization]
vm_image = "ubuntu-20.04-lts.img"     # 虚拟机镜像文件
startup_script = "init_experiment.sh"  # 虚拟机启动后执行的初始化脚本

[virtualization.resources]
cpu = "8"                   # 分配的CPU数量
memory = "32GB"             # 分配的内存大小
storage = "200GB"           # 分配的存储空间

[virtualization.resources.gpu]
model = "NVIDIA Tesla V100"
count = 1

[virtualization.network]
public_ip = true           # 是否分配公共IP
bandwidth = "1Gbps"        # 网络带宽要求

[virtualization.auto_scaling]
enable = true              # 是否启用自动扩展
max_instances = 5          # 最大虚拟机实例数
scaling_policy = "基于负载的自动扩展"

###############################################################################
# 项目链接（项目主页或仓库入口）
###############################################################################

project_url = "https://github.com/example-research/vision-classifier"
```

## 格式说明

CRESP协议使用TOML格式以标准化方式描述计算实验。配置文件分为几个部分：

1. **基本信息**：协议版本、作者详情和创建日期
2. **实验信息**：实验的名称和描述
3. **硬件配置**：复现实验的最低硬件要求
4. **软件环境**：操作系统和具有特定版本的包依赖
5. **项目配置**：兼容各种特定语言的项目格式
   - Python项目（pyproject.toml）
   - R项目（rproject）
   - MATLAB项目（matproject）
6. **随机种子**：用于可复现性的全局随机种子
7. **数据集配置**：数据集的来源和验证哈希值
8. **执行配置**：运行实验的命令和脚本
9. **版本控制**：仓库和提交信息
10. **虚拟化**：用于云部署的虚拟机配置

## 兼容性

CRESP协议设计为与现有项目配置格式兼容：

- 对于Python项目，它可以引用现有的pyproject.toml文件
- 对于R项目，它可以引用DESCRIPTION文件
- 对于MATLAB项目，它可以引用自定义配置文件

这确保研究人员可以轻松采用CRESP协议，而无需对现有工作流程进行重大更改。 