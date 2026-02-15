# ⚡ 快速开始指南

## 🎯 第一次提交（5步走）

### 1️⃣ Fork 这个仓库
点击页面右上角的 **Fork** 按钮

### 2️⃣ Clone 到你的电脑
```bash
git clone https://github.com/mogoo7zn/team-roster-26wiki
cd team-roster-26wiki
```

### 3️⃣ 创建你的目录并复制模板
```bash
# Windows PowerShell
mkdir members\你的名字
copy templates\member-template.md members\你的名字\work-log.md

# Linux/Mac
mkdir members/你的名字
cp templates/member-template.md members/你的名字/work-log.md
```

### 4️⃣ 填写并提交
1. 用编辑器打开 `members/你的名字/work-log.md`
2. 按照模板填写你的信息
3. 保存文件
```bash
git add members/你的名字/
git commit -m "Add: 添加 [你的名字] 的工作记录"
git push origin main
```

### 5️⃣ 创建 Pull Request
1. 回到你的 GitHub 仓库页面
2. 点击 "Compare & pull request"
3. 标题填写：`[新成员] 你的名字 - 工作记录提交`
4. 点击 "Create pull request"
5. ✅ 完成！等待管理员审核

## 🔄 更新工作记录（3步走）

### 1️⃣ 同步主仓库
```bash
# 第一次需要添加上游仓库
git remote add upstream https://github.com/主仓库地址/team-roster-26wiki.git

# 同步更新
git fetch upstream
git merge upstream/main
```

### 2️⃣ 更新文件并提交
```bash
# 编辑你的 work-log.md
git add members/你的名字/work-log.md
git commit -m "Update: 更新工作记录"
git push origin main
```

### 3️⃣ 创建 Pull Request
标题：`[更新] 你的名字 - 2024-01-20 工作记录`

## 📺 视频教程

> 推荐观看 GitHub 官方的 Fork & PR 教程

## ❓ 需要帮助？

- 📖 详细文档：[README.md](README.md)
- 📚 操作指南：[docs/guidelines.md](docs/guidelines.md)
- 💬 提问：在 Issues 中提出你的问题

---

**记住**：只修改你自己的目录，不要动其他人的文件！ 🎯
