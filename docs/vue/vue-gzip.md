---
sticky: 10
description: 使用gzip压缩vue项目打包之后的产物，提升性能
tag:
 - VUE
---

# gzip压缩实践
## 实验目的：使用gzip压缩vue项目打包之后的产物，提升性能
## 实验环境
- OS 名称: Microsoft Windows 10 专业版
- OS 版本: 10.0.19044 暂缺 Build 19044
- 具体环境：wsl2 ubuntu20.04
- 开发环境：vite4.0 + vue3.2.45 + vite-plugin-compression0.5.1

## 步骤1
- ```pnpm create vite```初始化项目
- ```pnpm add  vite-plugin-compression```安装压缩插件
    - [github文档](https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md)
- ```pnpm run build```打包

## 步骤2
- 需要开启nginx的gzip压缩,在/etc/nginx/nginx.conf修改启用gzip即可。