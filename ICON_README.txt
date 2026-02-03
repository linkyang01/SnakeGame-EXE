# 图标说明

为了打包 Windows EXE，你需要准备一个图标文件：

## 1. 创建图标

1. 访问 https://icoconvert.com
2. 上传一张图片（建议 256x256）
3. 转换为 ICO 格式
4. 下载生成的 icon.ico

## 2. 放置图标

将生成的 `icon.ico` 放到项目根目录

## 3. 重新打包

```bash
npm run build:win
```

## 在线图标生成工具

- https://icoconvert.com
- https://favicon.io
- https://www.flaticon.com
