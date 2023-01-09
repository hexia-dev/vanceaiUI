# 快速开始

### 安装组件库
```bash
npm i vanceai-ui
```

### 引用组件库
> 在 plugins/global_import.js 中引用组件库
```javascript
//全部引入
import 'vanceai-ui/dist/css/index.css'
import VanceUI from 'vanceai-ui'
vue.use(VanceUI)

//按需引入
import 'vanceai-ui/dist/css/demo.css'
import { DemoTest } from 'vanceai-ui'
Vue.use(DemoTest)
```
