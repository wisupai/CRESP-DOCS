---
sidebar_position: 3
---

# CRESP for Python Projects

This document explains how to use the CRESP protocol with Python projects, leveraging the compatibility with `pyproject.toml`.

## Integration with pyproject.toml

The CRESP protocol is designed to work seamlessly with Python projects by extending the standard `pyproject.toml` format. You can either:

1. Reference an existing `pyproject.toml` file in your CRESP configuration
2. Include the Python project configuration directly within your CRESP file

## Example Configuration

Here's an example of how to configure a Python project in your CRESP file:

```toml
###############################################################################
# Python Project Configuration
###############################################################################

[pyproject]
file = "pyproject.toml"  # Optional: Points to an existing pyproject.toml file

# If no external pyproject.toml is referenced, you can include the configuration directly:
[pyproject.build-system]
requires = ["setuptools>=42", "wheel"]
build-backend = "setuptools.build_meta"

[pyproject.tool.poetry]
name = "my-research-project"
version = "0.1.0"
description = "A reproducible research project using Python"
authors = ["Researcher Name <researcher@example.com>"]
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

## Environment Management

For Python projects, CRESP supports multiple environment management approaches:

### Using Poetry

If you're using Poetry for dependency management, the CRESP configuration can directly use the Poetry sections from `pyproject.toml`:

```toml
[pyproject.tool.poetry]
# Poetry configuration as shown above
```

### Using pip

For pip-based projects, you can specify dependencies in the software packages section:

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

### Using Conda

For Conda-based environments, you can specify the environment file:

```toml
[software.conda]
environment_file = "environment.yml"
```

## Execution Configuration

Specify how to run your Python project:

```toml
[execution]
verify_script = "verify_env.py"  # Script to verify the environment
command = "python main.py --config config.json"  # Command to run the experiment
```

## Best Practices

1. **Version Pinning**: Always pin exact versions of dependencies to ensure reproducibility
2. **Hash Verification**: Include hashes for critical packages
3. **Environment Isolation**: Use virtual environments (Poetry, venv, conda)
4. **Random Seed Control**: Set global and local random seeds
5. **Documentation**: Include detailed documentation on how to run the experiment

## Example Project Structure

A typical Python project using CRESP might have the following structure:

```
my-research-project/
├── cresp.toml              # CRESP configuration file
├── pyproject.toml          # Python project configuration
├── README.md               # Project documentation
├── data/                   # Data directory
│   ├── raw/                # Raw data
│   └── processed/          # Processed data
├── src/                    # Source code
│   ├── __init__.py
│   ├── data_processing.py
│   ├── models.py
│   └── visualization.py
├── notebooks/              # Jupyter notebooks
│   └── analysis.ipynb
├── tests/                  # Tests
│   └── test_models.py
├── verify_env.py           # Environment verification script
└── main.py                 # Main experiment script
```

By following these guidelines, you can ensure that your Python-based computational research is fully reproducible using the CRESP protocol.