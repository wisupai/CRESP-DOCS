---
sidebar_position: 2
---

# CRESP Protocol Format

The Computational Research Environment Standardization Protocol (CRESP) is designed to ensure reproducibility of computational experiments across different research domains. This document outlines the format and structure of the CRESP protocol configuration file.

## CRESP Configuration Example

Below is a comprehensive example of a CRESP configuration file in TOML format:

```toml
###############################################################################
# CRESP Protocol Configuration
###############################################################################

# Protocol version and basic information
cresp_version = "1.0"          # CRESP protocol version
author = "John Smith"
email = "john.smith@example.com"
date = "2025-03-09"            # Configuration file creation date

###############################################################################
# Experiment Basic Information
###############################################################################

experiment_name = "Image Classification Model Training Experiment"
description = "Training and evaluation of a custom convolutional neural network for image classification on the MNIST dataset."

###############################################################################
# Hardware Configuration
###############################################################################

[hardware]
CPU = "Intel Xeon Silver 4114, 2.2GHz, 10 cores"    # Minimum hardware requirements
GPU = "NVIDIA Tesla V100, 16GB x1"
RAM = "64GB"

###############################################################################
# Software Environment Configuration
###############################################################################

[software]
os = "Ubuntu 20.04.5 LTS"    # Operating system version

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
# Python Project Configuration (compatible with pyproject.toml)
###############################################################################

[pyproject]
file = "pyproject.toml"  # Points to an existing pyproject.toml file in the project

[pyproject.build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

[pyproject.tool.poetry]
name = "vision-classifier"
version = "0.1.0"
description = "A CNN-based image classifier for MNIST dataset."
authors = ["John Smith <john.smith@example.com>"]

[pyproject.tool.poetry.dependencies]
python = "^3.8"
torch = "^1.10.2"
# ...other dependencies

###############################################################################
# R Project Configuration (rproject)
###############################################################################

[rproject]
# Points to the R project configuration file, such as DESCRIPTION
file = "DESCRIPTION"
name = "r-vision-classifier"
version = "1.0.0"
description = "CNN-based MNIST image classification project implemented in R."
authors = ["John Smith <john.smith@example.com>"]

###############################################################################
# MATLAB Project Configuration (matproject)
###############################################################################

[matproject]
# Points to the MATLAB project configuration file, format can be self-defined, such as JSON or other structures
file = "matproject.json"
name = "mat-vision-classifier"
version = "1.0"
description = "MATLAB-based image classification project using custom CNN on MNIST dataset."
authors = ["John Smith <john.smith@example.com>"]

###############################################################################
# Global Random Seed Setting
###############################################################################

random_seed = 12345

###############################################################################
# Dataset Configuration
###############################################################################

[[data]]
name = "Training Set (MNIST)"
source = "https://storage.googleapis.com/cresp-examples/mnist_train.csv"
sha256 = "3f786850e387550fdab836ed7e6dc881de23001b2c81f0a1b2c3d4e5f67890ab"

###############################################################################
# Experiment Execution Configuration
###############################################################################

[execution]
verify_script = "verify_env.py"   # Environment verification script
command = "python train_model.py --epochs 5 --output model.pth"  # Command to start the experiment

###############################################################################
# Version and Repository Information
###############################################################################

[version]
repo = "https://github.com/example-research/vision-classifier.git"
commit = "9f2d3c4b5a6e7f8910da1b2c3d4e5f67890abcde"

###############################################################################
# Virtualization and Deployment Configuration
###############################################################################

[virtualization]
vm_image = "ubuntu-20.04-lts.img"     # Virtual machine image file
startup_script = "init_experiment.sh"  # Initialization script to execute after VM startup

[virtualization.resources]
cpu = "8"                   # Allocated CPU count
memory = "32GB"             # Allocated memory size
storage = "200GB"           # Allocated storage space

[virtualization.resources.gpu]
model = "NVIDIA Tesla V100"
count = 1

[virtualization.network]
public_ip = true           # Whether to allocate a public IP
bandwidth = "1Gbps"        # Network bandwidth requirement

[virtualization.auto_scaling]
enable = true              # Whether to enable auto-scaling
max_instances = 5          # Maximum number of VM instances
scaling_policy = "Load-based auto-scaling"

###############################################################################
# Project Links (project homepage or repository entry)
###############################################################################

project_url = "https://github.com/example-research/vision-classifier"
```

## Format Explanation

The CRESP protocol uses TOML format to describe computational experiments in a standardized way. The configuration file is divided into several sections:

1. **Basic Information**: Protocol version, author details, and creation date
2. **Experiment Information**: Name and description of the experiment
3. **Hardware Configuration**: Minimum hardware requirements for reproducing the experiment
4. **Software Environment**: OS and package dependencies with specific versions
5. **Project Configuration**: Compatible with various language-specific project formats
   - Python projects (pyproject.toml)
   - R projects (rproject)
   - MATLAB projects (matproject)
6. **Random Seed**: Global random seed for reproducibility
7. **Dataset Configuration**: Sources and verification hashes for datasets
8. **Execution Configuration**: Commands and scripts for running the experiment
9. **Version Control**: Repository and commit information
10. **Virtualization**: VM configuration for cloud deployment

## Compatibility

The CRESP protocol is designed to be compatible with existing project configuration formats:

- For Python projects, it can reference an existing pyproject.toml file
- For R projects, it can reference a DESCRIPTION file
- For MATLAB projects, it can reference a custom configuration file

This ensures that researchers can easily adopt the CRESP protocol without significant changes to their existing workflows. 