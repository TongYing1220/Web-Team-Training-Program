# 详细操作指南

## 🎓 Git 基础知识

### 什么是 Fork？
Fork 是在 GitHub 上复制一份仓库到你自己账号下的操作。这样你就可以自由地修改代码而不影响原始仓库。

### 什么是 Pull Request？
Pull Request（PR）是你向原仓库提交代码更改的请求。管理员会审查你的更改，决定是否合并到主仓库。

### 基本 Git 命令

```bash
# 查看当前状态
git status

# 查看修改内容
git diff

# 添加文件到暂存区
git add 文件名
git add .  # 添加所有修改

# 提交更改
git commit -m "提交说明"

# 推送到远程仓库
git push origin main

# 拉取远程更新
git pull origin main

# 查看提交历史
git log
```

## 📝 详细工作流程

### 首次提交完整流程

#### 步骤1：Fork 仓库
1. 打开主仓库页面
2. 点击右上角 "Fork" 按钮
3. 等待 Fork 完成（几秒钟）

#### 步骤2：Clone 到本地
```bash
# 打开终端/命令行
cd 你的工作目录
git clone https://github.com/你的用户名/team-roster-26wiki.git
cd team-roster-26wiki
```

#### 步骤3：创建个人目录
```bash
# Windows PowerShell
New-Item -ItemType Directory -Path "members\你的名字"

# Linux/Mac
mkdir -p members/你的名字
```

#### 步骤4：复制并编辑模板
```bash
# 复制模板
# Windows
Copy-Item templates\member-template.md members\你的名字\work-log.md

# Linux/Mac
cp templates/member-template.md members/你的名字/work-log.md

# 用你喜欢的编辑器打开文件
# 推荐使用 VS Code, Notepad++, Vim 等
code members/你的名字/work-log.md
```

#### 步骤5：填写内容
参考模板，填写：
- 个人信息（姓名、学号、联系方式）
- 工作记录（日期、内容、时长）
- 其他相关信息

#### 步骤6：提交到 Git
```bash
# 查看修改
git status

# 添加你的文件
git add members/你的名字/

# 提交
git commit -m "Add: 添加 [你的名字] 的工作记录"

# 推送到你的 Fork
git push origin main
```

#### 步骤7：创建 Pull Request
1. 打开你 Fork 的仓库页面（GitHub网站）
2. 看到提示 "Compare & pull request"，点击它
3. 填写 PR 信息：
   - **标题**：`[新成员] 你的名字 - 工作记录提交`
   - **描述**：简要说明你提交的内容
4. 点击 "Create pull request"
5. 等待管理员审核

### 后续更新流程

#### 步骤1：同步主仓库（重要！）
```bash
# 首次需要添加上游仓库（只需执行一次）
git remote add upstream https://github.com/主仓库地址/team-roster-26wiki.git

# 每次更新前先同步
git fetch upstream
git checkout main
git merge upstream/main

# 如果有冲突，需要解决冲突
# 解决后继续
git add .
git commit -m "Merge: 同步主仓库"
git push origin main
```

#### 步骤2：更新你的工作记录
```bash
# 编辑你的 work-log.md 文件
code members/你的名字/work-log.md

# 添加新的工作内容
# 保存文件
```

#### 步骤3：提交更新
```bash
git add members/你的名字/work-log.md
git commit -m "Update: 更新 2024-01-20 工作记录"
git push origin main
```

#### 步骤4：创建新的 PR
重复首次提交的步骤7，但 PR 标题改为：`[更新] 你的名字 - 2024-01-20 工作记录`

## 🛠️ 常见问题解决

### 问题1：提交时提示冲突
```bash
# 查看冲突文件
git status

# 打开冲突文件，手动解决冲突
# 冲突标记：
# <<<<<<< HEAD
# 你的更改
# =======
# 别人的更改
# >>>>>>> upstream/main

# 解决后
git add 冲突文件
git commit -m "Fix: 解决合并冲突"
git push origin main
```

### 问题2：不小心修改了其他文件
```bash
# 查看修改了哪些文件
git status

# 撤销对某个文件的修改（还未 commit）
git checkout -- 文件路径

# 如果已经 commit，回退到上一个版本
git reset --soft HEAD^
```

### 问题3：忘记同步主仓库
```bash
# 先同步
git fetch upstream
git merge upstream/main

# 解决可能的冲突
# 然后再推送你的更改
git push origin main
```

### 问题4：PR 被拒绝了
1. 查看管理员的反馈意见
2. 在本地修改文件
3. 重新提交：
```bash
git add .
git commit -m "Fix: 根据反馈修改内容"
git push origin main
```
4. 不需要创建新的 PR，原 PR 会自动更新

## 📚 推荐工具

### Git 客户端
- **GitHub Desktop**：图形界面，适合新手
- **GitKraken**：功能强大的图形界面
- **命令行**：最灵活，推荐熟悉后使用

### 文本编辑器
- **VS Code**：功能强大，支持 Markdown 预览
- **Typora**：专业的 Markdown 编辑器
- **Notepad++**：轻量级编辑器

### Markdown 语法参考
- [Markdown 官方文档](https://www.markdownguide.org/)
- [GitHub Markdown 语法](https://docs.github.com/en/get-started/writing-on-github)

## 💻 命令行速查表

```bash
# === 基本操作 ===
git status              # 查看状态
git log                 # 查看历史
git log --oneline       # 简洁历史

# === 分支操作 ===
git branch              # 查看分支
git branch 分支名       # 创建分支
git checkout 分支名     # 切换分支
git checkout -b 分支名  # 创建并切换

# === 远程操作 ===
git remote -v           # 查看远程仓库
git fetch origin        # 获取远程更新
git pull origin main    # 拉取并合并
git push origin main    # 推送更改

# === 撤销操作 ===
git checkout -- 文件    # 撤销工作区修改
git reset HEAD 文件     # 取消暂存
git reset --soft HEAD^  # 撤销最后一次提交

# === 查看差异 ===
git diff                # 查看工作区变化
git diff --staged       # 查看暂存区变化
git diff HEAD           # 查看所有变化
```

## 🎯 最佳实践

### 1. 频繁同步
- 每次开始工作前先同步主仓库
- 避免产生大量冲突

### 2. 清晰的提交信息
- 使用规范的前缀：Add、Update、Fix
- 简洁描述做了什么

### 3. 小步提交
- 不要一次提交太多更改
- 每完成一个小功能就提交一次

### 4. 定期备份
- 重要内容可以保存多份
- 利用 Git 的版本管理功能

### 5. 仔细检查
- 提交前使用 `git status` 和 `git diff` 检查
- 确保只提交自己的文件

## 📧 获取帮助

遇到问题？
1. 查看本文档
2. 搜索 Git 相关教程
3. 在仓库 Issue 中提问
4. 联系管理员

---

*祝你使用愉快！ Happy Coding! 🚀*
