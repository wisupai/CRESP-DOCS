---
sidebar_position: 4
---

# CRESP for R Projects

This document explains how to use the CRESP protocol with R projects, introducing the `rproject` format for standardizing R computational environments.

## Introduction to rproject

While R traditionally uses the DESCRIPTION file for package metadata, the CRESP protocol introduces a more comprehensive `rproject` format that extends this functionality to ensure reproducibility of R-based computational research.

## Example Configuration

Here's an example of how to configure an R project in your CRESP file:

```toml
###############################################################################
# R Project Configuration
###############################################################################

[rproject]
file = "DESCRIPTION"  # Optional: Points to an existing DESCRIPTION file

# If no external DESCRIPTION file is referenced, you can include the configuration directly:
name = "my-r-research-project"
version = "0.1.0"
description = "A reproducible research project using R"
authors = ["Researcher Name <researcher@example.com>"]

[rproject.dependencies]
R = "^4.1.0"
tidyverse = "^1.3.1"
ggplot2 = "^3.3.5"
dplyr = "^1.0.7"
caret = "^6.0.90"
randomForest = "^4.6.14"
```

## Environment Management

For R projects, CRESP supports multiple environment management approaches:

### Using renv

[renv](https://rstudio.github.io/renv/) is a dependency management tool for R projects. You can specify the renv.lock file in your CRESP configuration:

```toml
[rproject.renv]
lockfile = "renv.lock"
```

### Using packrat

For projects using [packrat](https://rstudio.github.io/packrat/), you can specify the packrat directory:

```toml
[rproject.packrat]
directory = "packrat"
```

### Direct Dependency Specification

You can also specify dependencies directly in the CRESP file:

```toml
[rproject.dependencies]
R = "^4.1.0"
tidyverse = "^1.3.1"
ggplot2 = "^3.3.5"
```

## CRAN and Bioconductor Repositories

Specify the repositories to use for package installation:

```toml
[rproject.repositories]
CRAN = "https://cloud.r-project.org"
Bioconductor = "https://bioconductor.org/packages/release/bioc"
```

## Execution Configuration

Specify how to run your R project:

```toml
[execution]
verify_script = "verify_env.R"  # Script to verify the environment
command = "Rscript main.R --config config.json"  # Command to run the experiment
```

## Best Practices

1. **Version Pinning**: Always pin exact versions of R packages to ensure reproducibility
2. **Environment Isolation**: Use renv or packrat for environment isolation
3. **Random Seed Control**: Set global and local random seeds
4. **Documentation**: Include detailed documentation on how to run the experiment
5. **Session Info**: Include R session information in your documentation

## Example Project Structure

A typical R project using CRESP might have the following structure:

```
my-r-research-project/
├── cresp.toml              # CRESP configuration file
├── DESCRIPTION             # R package description file
├── README.md               # Project documentation
├── data/                   # Data directory
│   ├── raw/                # Raw data
│   └── processed/          # Processed data
├── R/                      # R source code
│   ├── data_processing.R
│   ├── models.R
│   └── visualization.R
├── analysis/               # Analysis scripts
│   └── analysis.Rmd        # R Markdown analysis
├── tests/                  # Tests
│   └── testthat/           # testthat tests
├── renv/                   # renv directory (if using renv)
│   └── renv.lock           # renv lock file
├── verify_env.R            # Environment verification script
└── main.R                  # Main experiment script
```

## Converting Existing R Projects

To convert an existing R project to use the CRESP protocol:

1. Create a `cresp.toml` file in your project root
2. Reference your existing DESCRIPTION file or specify dependencies directly
3. Add execution configuration
4. Add hardware and software requirements
5. Add dataset information

By following these guidelines, you can ensure that your R-based computational research is fully reproducible using the CRESP protocol.