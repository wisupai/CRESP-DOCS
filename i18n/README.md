# CRESP文档国际化

本目录包含CRESP文档的国际化(i18n)文件。

## 支持的语言

目前支持以下语言：

- 英文 (en) - 默认语言
- 简体中文 (zh-CN)

## 如何贡献翻译

我们使用[Crowdin](https://crowdin.com/)来管理翻译。如果您想贡献翻译，请按照以下步骤操作：

1. 访问[CRESP Crowdin项目](https://crowdin.com/project/cresp-docs)（需要项目管理员提供链接）
2. 注册或登录Crowdin账户
3. 选择您想要翻译的语言
4. 开始翻译！

## 翻译工作流程

1. 开发者在`docs/`目录中更新英文文档
2. 当更改推送到main分支时，GitHub Actions会自动将更新的文件上传到Crowdin
3. 翻译人员在Crowdin平台上进行翻译
4. 每周日或通过手动触发，GitHub Actions会下载最新的翻译
5. GitHub Actions会创建一个包含新翻译的Pull Request
6. 审核并合并PR后，翻译会发布到网站上

## 本地测试翻译

如果您想在本地测试翻译，可以按照以下步骤操作：

1. 安装Crowdin CLI：
   ```bash
   npm install -g @crowdin/cli
   ```

2. 设置环境变量：
   ```bash
   export CROWDIN_PERSONAL_TOKEN=your_token
   export CROWDIN_PROJECT_ID=your_project_id
   ```

3. 上传源文件：
   ```bash
   crowdin upload sources
   ```

4. 下载翻译：
   ```bash
   crowdin download
   ```

5. 启动本地开发服务器：
   ```bash
   npm run start -- --locale zh-CN
   ```

## 翻译指南

为确保翻译质量和一致性，请遵循以下指南：

1. 保持专业术语的一致性
2. 尊重原文的格式和标记
3. 适应目标语言的语法和表达习惯
4. 保留原文中的代码示例不变
5. 如有疑问，请在Crowdin上添加评论或在GitHub上提出issue

## 文件结构

```
i18n/
├── zh-CN/                           # 简体中文翻译
│   ├── code.json                    # UI字符串翻译
│   └── docusaurus-plugin-content-docs/
│       └── current/                 # 当前版本的文档翻译
│           ├── intro.md
│           └── ...
└── README.md                        # 本文件
``` 