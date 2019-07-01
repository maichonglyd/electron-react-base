### electron-react-base
******
基于`electron` + `react` + `redux` + `saga`的基础项目配置

#### 项目结构：
- app 最终要打包的目录
- build 调试项目时打包的目录
- flow flow语法定义目录
- img 图片目录
- scss 界面样式目录
- src 界面代码目录
- webpack webpack打包配置目录

##### src下目录结构：
- components 界面组件目录
- pages 界面目录
- redux 数据组织目录
- sagas 数据请求目录
- App.jsx 页面路由配置
- main-dev.js 项目调试入口
- main.js 项目打包后的入口
- renderer.jsx 页面启动文件
***

项目的调试：
```js
npm init
npm run webpack-renderer-watch
npm run start-dev
```
> 调试时如果需要使用图片，可以放入`img`目录下，在需要打包的时候请把`img`目录下的图片复制到`app`的`img`目录下

项目打包成exe：
>如果有图片或别的文件，请复制到`app`目录下。
```js
npm run build //默认打包成exe，别的系统打包需要另行配置
```
或者
```js
npm run webpack-main
npm run webpack-renderer
npm run electron-builder
```