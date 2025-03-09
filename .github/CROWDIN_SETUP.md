# Crowdin集成设置指南

本文档介绍如何设置Crowdin与GitHub的集成，以实现CRESP文档的自动翻译。

## 前提条件

1. 在[Crowdin](https://crowdin.com/)上创建账户和项目
2. 获取Crowdin API令牌和项目ID

## 设置GitHub Secrets

为了使GitHub Actions能够与Crowdin通信，需要设置以下Secrets：

1. 登录GitHub，进入CRESP-DOCS仓库
2. 点击"Settings" > "Secrets and variables" > "Actions"
3. 点击"New repository secret"按钮
4. 添加以下Secrets：

   - **CROWDIN_PROJECT_ID**: 您的Crowdin项目ID
   - **CROWDIN_PERSONAL_TOKEN**: 您的Crowdin API令牌

## 获取Crowdin项目ID

1. 登录Crowdin
2. 进入您的项目
3. 项目ID可以在URL中找到：`https://crowdin.com/project/<project-id>`

## 获取Crowdin API令牌

1. 登录Crowdin
2. 点击右上角的个人头像，选择"Settings"
3. 在左侧菜单中选择"API"
4. 生成一个新的个人访问令牌（Personal Access Token）
5. 为令牌设置适当的权限（至少需要"Projects"权限）
6. 复制生成的令牌

## 验证设置

设置完成后，您可以通过以下方式验证集成是否正常工作：

1. 手动触发GitHub Actions工作流（在Actions标签页中找到"Crowdin Translation"工作流，点击"Run workflow"）
2. 检查工作流是否成功完成
3. 在Crowdin项目中查看是否有文件被上传

## 故障排除

如果集成不正常工作，请检查以下几点：

1. 确保GitHub Secrets已正确设置
2. 检查Crowdin API令牌是否有足够的权限
3. 查看GitHub Actions工作流的日志以获取详细错误信息
4. 确保crowdin.yml配置文件格式正确

## 本地测试

您也可以在本地测试Crowdin集成：

```bash
# 安装Crowdin CLI
npm install -g @crowdin/cli

# 设置环境变量
export CROWDIN_PERSONAL_TOKEN=your_token
export CROWDIN_PROJECT_ID=your_project_id

# 上传源文件
crowdin upload sources

# 下载翻译
crowdin download
```