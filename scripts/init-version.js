#!/usr/bin/env node

/**
 * 初始化文档版本脚本
 * 用于创建第一个文档版本，以激活版本选择功能
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`当前版本: ${currentVersion}`);
console.log('创建第一个版本将激活版本选择功能。');
rl.question(`确认创建版本 ${currentVersion} 作为第一个文档版本? (y/n): `, (answer) => {
  if (answer.toLowerCase() !== 'y') {
    console.log('操作已取消');
    rl.close();
    return;
  }

  try {
    // 检查是否已经存在版本
    const versionsDir = path.join(__dirname, '..', 'versioned_docs');
    if (fs.existsSync(versionsDir)) {
      console.log('文档版本目录已存在。如果要创建新版本，请使用 yarn docs:version');
      rl.close();
      return;
    }

    // 创建文档版本
    console.log(`创建初始文档版本 ${currentVersion}...`);
    execSync(`yarn docusaurus docs:version ${currentVersion}`, { stdio: 'inherit' });
    
    // 提交更改
    console.log('提交版本更改...');
    execSync('git add .');
    execSync(`git commit -m "docs(versioning): initialize version ${currentVersion}"`);
    
    console.log(`\n✅ 文档初始版本 ${currentVersion} 已创建`);
    console.log('要推送更改到远程仓库，请运行:');
    console.log('git push');
  } catch (error) {
    console.error('创建文档版本时出错:', error.message);
  }

  rl.close();
}); 