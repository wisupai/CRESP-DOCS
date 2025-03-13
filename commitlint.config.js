module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',    // 构建相关的修改
        'chore',    // 构建过程或辅助工具的变动
        'ci',       // CI相关的修改
        'docs',     // 文档修改
        'feat',     // 新功能   
        'fix',      // 修复bug
        'perf',     // 性能优化
        'refactor', // 重构（既不是新增功能，也不是修改bug的代码变动）
        'revert',   // 回滚到上一个版本
        'style',    // 不影响代码含义的修改（空白、格式化、缺少分号等）
        'test',     // 增加测试
        'trans',    // 翻译相关
      ],
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower'],
    'header-max-length': [2, 'always', 72],
  },
}; 