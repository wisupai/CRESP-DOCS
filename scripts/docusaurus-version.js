#!/usr/bin/env node

/**
 * Docusaurus版本化脚本
 * 用于创建文档的新版本快照
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
rl.question(`确认为文档创建版本 ${currentVersion} 的快照? (y/n): `, (answer) => {
  if (answer.toLowerCase() !== 'y') {
    console.log('操作已取消');
    rl.close();
    return;
  }

  try {
    // 创建文档版本
    console.log(`创建文档版本 ${currentVersion}...`);
    execSync(`yarn docusaurus docs:version ${currentVersion}`, { stdio: 'inherit' });
    
    // 提交更改
    console.log('提交版本更改...');
    execSync('git add .');
    execSync(`git commit -m "docs(versioning): create version ${currentVersion}"`);
    
    console.log(`\n✅ 文档版本 ${currentVersion} 已创建`);
    console.log('要推送更改到远程仓库，请运行:');
    console.log('git push');
  } catch (error) {
    console.error('创建文档版本时出错:', error.message);
  }

  rl.close();
}); 