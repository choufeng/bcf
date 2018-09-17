# README

这是一个简单的Electron封装定制访问的浏览器客户端，适用于解决一些管理端开发需要强制使用统一浏览器内核访问的情况。

## 使用方法
1. npm i -D electron@latest 安装electron
2. npm i -g electron-builder 安装electron-builder
3. 修改package.json中`home`节点路径为强制访问首页路径。
4. npm install 下载关联包。
5. npm run build 生成安装包。

## 资讯

windows下默认生成msi安装文件，可通过调整package.json 的 `build`->`win`->`target`节点内容为`nsis`生成nsis安装包。 

linux下默认生成`tar.gz`压缩包， 解压运行即可。

注意： build过程中需要下载electron相关文件，可能回失败，请让命令行处于翻墙状态，或尝试使用国内源。

