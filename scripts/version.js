#!/usr/bin/env node

/**
 * 版本管理脚本
 * 用于更新版本号并创建Git标签
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');

// 读取package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`当前版本: ${currentVersion}`);
console.log('版本类型:');
console.log('1. 主版本 (major) - 不兼容的API变更');
console.log('2. 次版本 (minor) - 向后兼容的功能性新增');
console.log('3. 修订版 (patch) - 向后兼容的问题修正');

rl.question('请选择要更新的版本类型 (1-3): ', (answer) => {
  let newVersion;
  const [major, minor, patch] = currentVersion.split('.').map(Number);

  switch (answer) {
    case '1':
      newVersion = `${major + 1}.0.0`;
      break;
    case '2':
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case '3':
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
    default:
      console.log('无效的选择，退出');
      rl.close();
      return;
  }

  rl.question(`确认更新版本从 ${currentVersion} 到 ${newVersion}? (y/n): `, (confirm) => {
    if (confirm.toLowerCase() !== 'y') {
      console.log('操作已取消');
      rl.close();
      return;
    }

    // 更新package.json
    packageJson.version = newVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    // 提示用户更新CHANGELOG.md
    console.log(`\n请手动更新 CHANGELOG.md 文件，添加 ${newVersion} 的变更记录`);
    console.log('完成后按回车继续...');

    rl.question('', () => {
      // 提交更改
      try {
        execSync('git add package.json CHANGELOG.md');
        execSync(`git commit -m "chore(release): v${newVersion}"`);
        execSync(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
        console.log(`\n✅ 版本已更新至 v${newVersion}`);
        console.log('要推送更改到远程仓库，请运行:');
        console.log('git push && git push --tags');
      } catch (error) {
        console.error('提交更改时出错:', error.message);
      }

      rl.close();
    });
  });
}); 