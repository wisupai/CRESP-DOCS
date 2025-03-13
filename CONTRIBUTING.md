# 贡献指南 (Contributing Guidelines)

感谢您对CRESP文档的关注！本指南将帮助您了解如何为项目做出贡献。

## 开发流程 (Development Process)

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'feat(scope): add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个Pull Request

## 提交信息规范 (Commit Message Guidelines)

我们使用[约定式提交](https://www.conventionalcommits.org/)规范来确保Git历史的可读性。每个提交消息应该遵循以下格式：

```
<类型>(<范围>): <描述>

[可选的正文]

[可选的脚注]
```

### 类型 (Types)

- **build**: 影响构建系统或外部依赖的更改
- **chore**: 不修改src或测试文件的更改
- **ci**: 对CI配置文件和脚本的更改
- **docs**: 仅文档更改
- **feat**: 新功能
- **fix**: 修复bug
- **perf**: 提高性能的代码更改
- **refactor**: 既不修复错误也不添加功能的代码更改
- **revert**: 撤销之前的提交
- **style**: 不影响代码含义的更改（空白、格式化等）
- **test**: 添加缺失的测试或修正现有的测试
- **trans**: 翻译相关的更改

### 范围 (Scope)

范围应该是受影响的文档部分或组件的名称（例如，`python`, `matlab`, `r`, `format`等）。

### 示例 (Examples)

```
docs(python): 更新Python项目文档中的依赖管理部分
```

```
feat(format): 添加对新的MATLAB项目格式的支持
```

## 版本控制 (Versioning)

我们使用[语义化版本控制](https://semver.org/)。版本号格式为：`主版本号.次版本号.修订号`。

- **主版本号**：当进行不兼容的API更改时
- **次版本号**：当以向后兼容的方式添加功能时
- **修订号**：当进行向后兼容的bug修复时

### 创建新版本 (Creating a New Version)

1. 运行 `yarn version` 并按照提示操作
2. 更新 CHANGELOG.md
3. 提交更改
4. 创建文档版本快照：`yarn docs:version`
5. 推送更改和标签：`git push && git push --tags`

## 文档风格指南 (Documentation Style Guide)

- 使用Markdown格式
- 文件名使用kebab-case（例如 `file-name.md`）
- 代码示例应该使用适当的语法高亮
- 中英文混排时，在中文和英文之间添加空格
- 保持文档结构一致性

## 多语言支持 (Multilingual Support)

我们的文档支持多种语言。如果您想贡献翻译，请参考[TRANSLATION.md](TRANSLATION.md)文件。

## 问题和功能请求 (Issues and Feature Requests)

- 使用GitHub Issues提交问题或功能请求
- 清晰描述问题或请求
- 如果报告bug，请提供复现步骤

感谢您的贡献！ 