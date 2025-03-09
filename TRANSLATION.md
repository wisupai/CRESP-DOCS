# CRESP文档翻译指南

本文档提供了关于如何参与CRESP文档翻译的指南。

## 翻译工作流程

CRESP文档使用Docusaurus的内置国际化功能进行翻译管理。翻译工作流程如下：

1. 开发者在`docs/`目录中更新英文文档
2. 使用`yarn write-translations`生成翻译文件
3. 翻译人员在`i18n/`目录中进行翻译
4. 提交翻译更改并创建Pull Request
5. 审核并合并PR后，翻译会发布到网站上

## 如何参与翻译

### 直接编辑翻译文件

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

### 本地测试翻译

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

1. **保持专业术语的一致性**：对于专业术语，请参考已有的翻译或行业标准
2. **尊重原文的格式和标记**：保留原文中的Markdown标记、链接和其他格式
3. **适应目标语言的语法和表达习惯**：翻译应该符合中文的语法和表达习惯
4. **保留原文中的代码示例不变**：代码示例通常不需要翻译
5. **保持文档结构一致**：不要更改文档的结构，如标题层级、列表等

## 术语表

为了保持翻译的一致性，以下是一些常用术语的推荐翻译：

| 英文 | 中文 |
|------|------|
| CRESP | CRESP（不翻译） |
| Computational Research Environment Standardization Protocol | 计算研究环境标准化协议 |
| reproducibility | 可复现性 |
| dependency | 依赖 |
| environment | 环境 |
| configuration | 配置 |
| TOML | TOML（不翻译） |

## 问题和帮助

如果您在翻译过程中遇到任何问题，或者对某些术语的翻译有疑问，请：

1. 在GitHub上提出issue
2. 联系项目维护者

感谢您对CRESP文档翻译的贡献！ 