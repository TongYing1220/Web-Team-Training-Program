// 简历核心数据
export const resumeData = {
  personalInfo: {
    name: "时渝童",
    title: "中国科学技术大学大二在读学生",
    contact: {
      email: "syt2108155403@mail.ustc.edu.cn",
      github: "https://github.com/zhangsan",
      phone: "18788844759"
    }
  },
  about: {
    title: "关于我",
    content: "大学计算机专业大二学生，热衷前端开发。课堂夯实数据结构等专业基础，课后深耕C、C++、Java等编程语言，通过线上课程补充工程化知识。性格严谨，注重代码质量与用户体验，擅长独立解决技术问题，也乐于团队合作。计划通过更多实战提升协作与复杂应用开发能力。"
  },
  hobby: {
    title: "兴趣爱好",
    list: [
      {
        name: "绘画",
        desc: "水彩，电子绘画",
        images: [
          "images/D238ECF50E1C4631092C65B99BC420AA.jpg",
          "images/psc.webp"
        ]
      },
      { name: "书法", desc: "软笔，硬笔", images: [] },
      { name: "游戏", desc: "崩坏：星穹铁道、绝区零", images: [] }
    ]
  },
  skills: {
    title: "技能",
    list: [
      { name: "编程 &#x1F4BB", value: 85, desc: "C，C++，Java" },
      { name: "工具 &#x1F680", value: 75, desc: "Git, VS Code" },
      { name: "设计 &#x2728", value: 90, desc: "Photoshop，画世界pro" }
    ]
  },
  education: {
    title: "教育经历",
    list: [
      {
        school: "中国科学技术大学",
        major: "计算机科学与技术",
        period: "2024 - 至今",
        courses: "主修课程：数据结构、算法、图论"
      }
    ]
  },
  projects: {
    title: "项目经验",
    list: [
      {
        name: "宠物管理系统",
        period: "2025.05 - 2025.06",
        desc: "使用Java构造出的宠物店管理系统",
        features: [
          "实现了管理员与用户的功能区分",
          "支持管理员管理宠物信息、账号创建与销毁",
          "实现了GUI界面"
        ],
        delay: 0
      },
      {
        name: "个人博客系统",
        period: "2025.03 - 2025.04",
        desc: "使用HTML/CSS/JavaScript开发的个人博客前端",
        features: [
          "实现响应式布局，适配多端显示",
          "添加文章分类、标签筛选功能",
          "集成Markdown编辑器"
        ],
        delay: 200
      }
    ]
  }
};