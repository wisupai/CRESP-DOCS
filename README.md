# CRESP Documentation

![CRESP Protocol](./static/img/cresp_banner_3000x1000_dark_bg.png)

[![Website](https://img.shields.io/badge/Website-cresp.resciencelab.ai-blue)](https://cresp.resciencelab.ai)

This repository contains the documentation for the **Computational Research Environment Standardization Protocol (CRESP)**, an open standard designed to ensure reproducibility in computational research across various disciplines.

## About CRESP

CRESP is part of the Rescience Lab product by Wisup AI Ltd. The protocol is designed to support researchers in computational science and cross-disciplinary fields, including bioinformatics, medical informatics, geoinformatics, quantitative finance, computational physics, computational chemistry, and more.

Our goal is to address the challenges faced by researchers who use computational methods but may lack strong programming backgrounds. By standardizing computational environments, CRESP helps researchers focus on their domain expertise rather than struggling with technical configuration issues.

## License

CRESP is open source and released under the [MIT License](LICENSE). This permissive license allows for maximum flexibility in using, modifying, and distributing the protocol.

## Documentation Website

**Visit our documentation at: [https://cresp.resciencelab.ai](https://cresp.resciencelab.ai)**

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Supported Languages

- English (default)
- Chinese (Simplified)

For information on how to contribute to translations, please see [TRANSLATION.md](TRANSLATION.md).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

We welcome contributions to the CRESP documentation! Please feel free to submit issues or pull requests to help improve the documentation.

## License

This documentation is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
