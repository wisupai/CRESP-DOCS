---
sidebar_position: 0
---

# Introduction to CRESP

## What is CRESP?

**CRESP** (Computational Research Environment Standardization Protocol) is an open standard designed to ensure reproducibility in computational research across various disciplines. It provides a comprehensive framework for describing computational experiments, making them easier to reproduce, share, and build upon.

## The Problem CRESP Solves

Computational research faces a significant reproducibility challenge. Despite being digital in nature, reproducing computational experiments from published research is often difficult due to:

- Inconsistent environment configurations
- Complex dependency chains
- Incomplete documentation
- Poor random seed management
- Limited data availability

CRESP addresses these challenges by standardizing how computational environments and experiments are described.

## Framework Architecture

CRESP is built on a layered architecture that provides a comprehensive solution for computational reproducibility:

![CRESP Framework Architecture](/img/CRESP%20Framework%20Architecture.svg)

The architecture consists of five main layers:

1. **Core Layer**: Handles protocol parsing, validation, configuration management, and API interfaces
2. **Environment Layer**: Analyzes requirements, builds and verifies environments, and manages randomness for reproducibility
3. **Container Layer**: Provides support for containerization technologies like Docker and Singularity
4. **Execution Layer**: Manages workflow execution and monitors resource usage and execution status
5. **Adaptation Layer**: Offers language-specific adapters for Python, R, MATLAB, Julia, and a plugin system for extensions

This layered approach ensures that CRESP can handle the complete lifecycle of computational experiments while maintaining flexibility and extensibility.

## Key Features

- **Cross-Language Support**: Works with Python, R, MATLAB, and other computational environments
- **Comprehensive Environment Description**: Captures hardware, software, and data dependencies
- **Execution Standardization**: Provides clear instructions for running experiments
- **Virtualization Support**: Facilitates deployment in virtual environments and containers
- **Compatibility**: Works with existing project structures and configuration files
- **Open Source**: Licensed under the permissive [MIT License](./license), allowing for broad adoption and modification

## Getting Started

CRESP uses the TOML format to describe computational experiments. A basic CRESP configuration file includes:

```toml
# Basic CRESP configuration
cresp_version = "1.0"
author = "Researcher Name"
email = "researcher@example.com"

experiment_name = "My Computational Experiment"
description = "A brief description of the experiment"

[hardware]
CPU = "Intel Core i7, 3.2GHz, 8 cores"
GPU = "NVIDIA RTX 3080, 10GB"
RAM = "32GB"

[software]
os = "Ubuntu 20.04 LTS"

# ... additional configuration ...
```

## How to Use This Documentation

This documentation provides comprehensive information about the CRESP protocol:

1. **[Why CRESP?](./why-cresp)**: Understand the importance of reproducibility in computational research
2. **[CRESP Format](./cresp-format)**: Learn about the structure and components of the CRESP protocol
3. **Language-specific guides**:
   - **[Python Projects](./python-projects)**: Using CRESP with Python
   - **[R Projects](./r-projects)**: Using CRESP with R
   - **[MATLAB Projects](./matlab-projects)**: Using CRESP with MATLAB
4. **[License](./license)**: Information about the MIT License that CRESP is released under

## About the Project

CRESP is part of the Rescience Lab product by Wisup AI Ltd. The protocol is designed to support researchers in computational science and cross-disciplinary fields, including bioinformatics, medical informatics, geoinformatics, quantitative finance, computational physics, computational chemistry, and more.

Our goal is to address the challenges faced by researchers who use computational methods but may lack strong programming backgrounds. By standardizing computational environments, CRESP helps researchers focus on their domain expertise rather than struggling with technical configuration issues.

Join us in making computational research more reproducible, accessible, and impactful.
