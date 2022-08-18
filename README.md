# storybook
- 查看[文档](https://www.yuque.com/u25493014/dg2lxu/rps0at/edit)
```javascript
// yarn clear, 清掉node_modules
```
- 初始化storybook
```javascript
npx -p @storybook/cli sb --type vue
```
- 运行storybook
```javascript
yarn storybook
```
#### lerna
- 项目中安装lerna，并初始化
```javascript
npm i lerna -g
lerna init
```
- 会在项目根目录下，生成 lerna.json文件
```javascript
lerna publish // 发布包，未成功过，报git无法连接
```
