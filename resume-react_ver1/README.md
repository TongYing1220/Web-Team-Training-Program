# Team Roster - 工作记录系统

本仓库用于记录团队成员的工作提交情况。每个成员独立维护自己的工作记录，互不干扰

## 📋 项目简介

这是一个团队协作工作记录系统，通过 Git 的 Fork + Pull Request 工作流程，实现：
- ✅ 每个成员独立记录自己的工作内容
- ✅ 统一的提交格式，方便管理员检查
- ✅ 支持动态增减成员
- ✅ 完整的提交历史追踪

## 🚀 新成员加入流程

### 1. Fork 本仓库
点击页面右上角的 "Fork" 按钮，将本仓库 Fork 到你的个人账号下

### 2. Clone 到本地
```bash
git clone https://github.com/你的用户名/team-roster-26wiki.git
cd team-roster-26wiki
```

### 3. 创建你的个人目录
在 `members/` 目录下创建以你的 `名字-学号` 命名的文件夹：
```bash
# 命名格式示例：姓名拼音 或 学号
mkdir members/WangZining-PB23111626
```

### 4. 复制模板文件
将模板文件复制到你的个人目录：
```bash
# Windows PowerShell
Copy-Item templates/member-template.md members/你的目录名/work-log.md

# Linux/Mac
cp templates/member-template.md members/你的目录名/work-log.md
```

### 5. 填写你的工作记录
编辑 `members/你的目录名/work-log.md`，按照模板填写你的个人信息和工作内容

### 6. 提交更改
```bash
git add members/你的目录名/
git commit -m "Add: 添加 [你的名字] 的工作记录"
git push origin main
```

### 7. 创建 Pull Request
1. 回到你 Fork 的仓库页面
2. 点击 "Pull Request" 按钮
3. 填写 PR 标题：`[新成员] 你的名字 - 工作记录提交`
4. 在描述中简要说明你提交的内容
5. 提交 PR 等待审核

## 📝 更新工作记录流程

当你需要更新工作记录时：

### 1. 同步主仓库（重要！）
```bash
# 首次需要添加上游仓库
git remote add upstream https://github.com/mogoo7zn/team-roster-26wiki

# 同步主仓库最新内容
git fetch upstream
git merge upstream/main
```

### 2. 更新你的工作记录
编辑 `members/你的目录名/work-log.md`，添加新的工作内容

### 3. 提交并推送
```bash
git add members/你的目录名/work-log.md
git commit -m "Update: 更新 [日期] 工作记录"
git push origin main
```

### 4. 创建新的 Pull Request
- PR 标题：`[更新] 你的名字 - YYYY-MM-DD 工作记录`

## 📁 项目结构

```
team-roster-26wiki/
├── README.md                    # 本说明文档
├── .gitignore                   # Git 忽略文件配置
├── templates/                   # 模板文件夹
│   └── member-template.md       # 工作记录模板
├── members/                     # 所有成员的工作记录目录
│   ├── example-member/          # 示例成员（供参考）
│   │   └── work-log.md
│   ├── zhangsan/                # 成员1的目录
│   │   └── work-log.md
│   ├── lisi/                    # 成员2的目录
│   │   └── work-log.md
│   └── ...                      # 更多成员目录
└── docs/                        # 其他文档（可选）
    └── guidelines.md            # 详细指南
```

## ✅ 提交规范

### 目录命名规范
- 使用英文字母、数字和连字符
- 推荐格式：`姓名拼音` 或 `学号`
- 示例：`ZhangSan`、`PB25000000`

### Commit 信息规范
- **新增记录**：`Add: 添加 [姓名] 的工作记录`
- **更新记录**：`Update: 更新 [日期] 工作记录`
- **修复错误**：`Fix: 修正工作记录中的错误`

### Pull Request 标题规范
- **新成员**：`[新成员] 姓名 - 工作记录提交`
- **更新记录**：`[更新] 姓名 - YYYY-MM-DD 工作记录`
- **修复内容**：`[修复] 姓名 - 修正工作记录`

## ❓ 常见问题

### Q: 我不小心修改了其他成员的文件怎么办？
A: 在提交前使用 `git status` 检查，只添加你自己的文件。如果已经提交，可以使用 `git reset` 撤销

### Q: 如何查看其他成员的工作记录？
A: 直接在 GitHub 上浏览 `members/` 目录，或者 clone 主仓库到本地查看

### Q: 我的 PR 被拒绝了怎么办？
A: 查看管理员的反馈意见，修改后重新提交。同一个 PR 可以继续添加新的 commit

### Q: 可以添加图片或其他文件吗？
A: 可以！在你的个人目录下创建子文件夹，如 `images/`、`files/` 等

## 📧 联系方式

如有任何问题，请在 QQ 网页组群 联系 $王书贤$ 或 $王子宁$ 或者在 Issue 中提出
