# storybook
```javascript
// yarn clear, 清掉node_modules
```
- 初始化storybook
```json
npx -p @storybook/cli sb --type vue
```
- 运行storybook
```json
yarn storybook
```
#### lerna
- 项目中安装lerna，并初始化
```javascript
npm i lerna -g
lerna init
```
- 会在项目根目录下，生成 lerna.json文件
```json
lerna publish // 发布包，未成功过，报git无法连接
```
