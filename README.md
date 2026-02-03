# 🐍 贪吃蛇游戏 - Windows EXE 版本

这是一个使用 Electron 开发的贪吃蛇游戏，可以打包成 Windows .exe 安装包！

## 📁 项目结构

```
SnakeGame-EXE/
├── package.json      # 项目配置
├── main.js          # Electron 主进程
├── preload.js        # 进程通信
├── index.html       # 游戏界面
├── icon.ico         # Windows 图标
└── README.md        # 说明文档
```

## 🚀 在本机运行

```bash
# 1. 进入项目目录
cd SnakeGame-EXE

# 2. 安装依赖
npm install

# 3. 运行游戏
npm start
```

## 📦 打包成 Windows EXE

### 方式一：在本机打包（需要 Windows 或虚拟机）

```bash
# 安装打包工具
npm install -g electron-builder

# 打包 Windows 版本
npm run build:win
```

打包完成后，在 `dist/` 目录下会生成：
- `SnakeGame_Setup_1.0.0.exe` - 安装包
- `SnakeGame-1.0.0.exe` - 便携版

### 方式二：使用 GitHub Actions 打包（推荐）

1. Fork 这个项目到你的 GitHub
2. 打开 GitHub Actions
3. 运行 Windows Build workflow
4. 下载生成的 exe 文件

### 方式三：在 Windows 电脑上打包

在 Windows 电脑上：

```bash
# 克隆项目
git clone https://github.com/你的用户名/SnakeGame-EXE.git
cd SnakeGame-EXE

# 安装依赖
npm install

# 打包
npm run build:win
```

## 🎮 游戏操作

- **方向键** ↑ ↓ ← → 控制蛇的移动
- 吃到红色食物得分
- 不要撞墙或撞到自己
- 分数越高，速度越快

## 🎨 自定义修改

### 修改游戏名称

编辑 `package.json`：

```json
{
  "productName": "你的游戏名称",
  "name": "your-game-name"
}
```

### 修改图标

1. 准备一个 256x256 的图标文件
2. 命名为 `icon.ico`
3. 替换项目中的 `icon.ico`

## 📝 系统要求

- Windows 10+
- macOS 10.15+ (用于开发)
- Node.js 18+

## 🔧 技术栈

- Electron - 桌面应用框架
- HTML5 Canvas - 游戏渲染
- JavaScript - 游戏逻辑

## 📄 许可证

MIT License

---

**祝游戏愉快！** 🐍
