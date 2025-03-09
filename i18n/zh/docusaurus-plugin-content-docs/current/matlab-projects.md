---
sidebar_position: 5
---

# CRESP for MATLAB Projects

This document explains how to use the CRESP protocol with MATLAB projects, introducing the `matproject` format for standardizing MATLAB computational environments.

## Introduction to matproject

MATLAB traditionally lacks a standardized project configuration format. The CRESP protocol introduces the `matproject` format to fill this gap, ensuring reproducibility of MATLAB-based computational research.

## Example Configuration

Here's an example of how to configure a MATLAB project in your CRESP file:

```toml
###############################################################################
# MATLAB Project Configuration
###############################################################################

[matproject]
file = "matproject.json"  # Optional: Points to an external configuration file

# If no external file is referenced, you can include the configuration directly:
name = "my-matlab-research-project"
version = "1.0.0"
description = "A reproducible research project using MATLAB"
authors = ["Researcher Name <researcher@example.com>"]

[matproject.matlab]
version = "R2022a"  # MATLAB version
license_type = "Academic"  # License type

[matproject.toolboxes]
"Signal Processing Toolbox" = "9.1"
"Statistics and Machine Learning Toolbox" = "12.3"
"Image Processing Toolbox" = "11.4"
"Deep Learning Toolbox" = "14.3"
```

## Toolbox Management

MATLAB functionality is extended through toolboxes. Specify required toolboxes and their versions:

```toml
[matproject.toolboxes]
"Signal Processing Toolbox" = "9.1"
"Statistics and Machine Learning Toolbox" = "12.3"
"Image Processing Toolbox" = "11.4"
```

## External Dependencies

For external MATLAB packages (e.g., from File Exchange or GitHub), specify them as follows:

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

## MEX Files and Compiled Code

For projects using MEX files or other compiled code, specify the compiler requirements:

```toml
[matproject.compiler]
name = "MinGW-w64 C/C++"  # Compiler name
version = "8.1.0"  # Compiler version
```

## Execution Configuration

Specify how to run your MATLAB project:

```toml
[execution]
verify_script = "verify_env.m"  # Script to verify the environment
command = "matlab -nodisplay -nosplash -nodesktop -r \"run('main.m'); exit;\""  # Command to run the experiment
```

## Best Practices

1. **Version Pinning**: Always specify exact MATLAB and toolbox versions
2. **Path Management**: Use proper path management in your MATLAB scripts
3. **Random Seed Control**: Set global and local random seeds
4. **Documentation**: Include detailed documentation on how to run the experiment
5. **Startup Scripts**: Include startup.m files to configure the MATLAB environment

## Example Project Structure

A typical MATLAB project using CRESP might have the following structure:

```
my-matlab-research-project/
├── cresp.toml              # CRESP configuration file
├── matproject.json         # MATLAB project configuration (optional)
├── README.md               # Project documentation
├── data/                   # Data directory
│   ├── raw/                # Raw data
│   └── processed/          # Processed data
├── src/                    # Source code
│   ├── +utils/             # MATLAB package for utilities
│   ├── data_processing.m
│   ├── models.m
│   └── visualization.m
├── lib/                    # External libraries
│   └── export_fig/         # External MATLAB package
├── mex/                    # MEX files
│   └── fast_algorithm.c    # C source for MEX file
├── tests/                  # Tests
│   └── test_models.m
├── verify_env.m            # Environment verification script
├── startup.m               # MATLAB startup script
└── main.m                  # Main experiment script
```

## Converting Existing MATLAB Projects

To convert an existing MATLAB project to use the CRESP protocol:

1. Create a `cresp.toml` file in your project root
2. Specify MATLAB version and required toolboxes
3. List external dependencies
4. Add execution configuration
5. Add hardware requirements
6. Add dataset information

## matproject.json Format

If you prefer to keep MATLAB-specific configuration separate, you can use a `matproject.json` file:

```json
{
  "name": "my-matlab-research-project",
  "version": "1.0.0",
  "description": "A reproducible research project using MATLAB",
  "authors": ["Researcher Name <researcher@example.com>"],
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

By following these guidelines, you can ensure that your MATLAB-based computational research is fully reproducible using the CRESP protocol.