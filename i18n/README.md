# CRESP文档国际化

本目录包含CRESP文档的国际化(i18n)文件。

## 支持的语言

目前支持以下语言：

- 英文 (en) - 默认语言
- 简体中文 (zh-CN)

## 如何贡献翻译

如果您想贡献翻译，请按照以下步骤操作：

1. 克隆仓库：
   ```bash
   git clone https://github.com/wisupai/CRESP-DOCS.git
   cd CRESP-DOCS
   ```

2. 安装依赖：
   ```bash
   yarn install
   ```

3. 如果需要生成最新的翻译文件：
   ```bash
   yarn write-translations
   ```

4. 编辑`i18n/zh-CN`目录下的翻译文件
5. 提交您的更改并创建Pull Request

## 翻译工作流程

1. 开发者在`docs/`目录中更新英文文档
2. 使用`yarn write-translations`生成翻译文件
3. 翻译人员在`i18n/`目录中进行翻译
4. 提交翻译更改并创建Pull Request
5. 审核并合并PR后，翻译会发布到网站上

## 本地测试翻译

如果您想在本地测试翻译，可以按照以下步骤操作：

1. 克隆仓库：
   ```bash
   git clone https://github.com/wisupai/CRESP-DOCS.git
   cd CRESP-DOCS
   ```

2. 安装依赖：
   ```bash
   yarn install
   ```

3. 启动中文版本的开发服务器：
   ```bash
   yarn start:zh
   ```

4. 在浏览器中访问 http://localhost:3000/zh-CN/ 查看中文版本

## 翻译指南

为确保翻译质量和一致性，请遵循以下指南：

1. 保持专业术语的一致性
2. 尊重原文的格式和标记
3. 适应目标语言的语法和表达习惯
4. 保留原文中的代码示例不变
5. 如有疑问，请在GitHub上提出issue

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