import Vue from 'vue'
 
// 按需引入：base.css 基础样式必须引入，其它组件样式按需引入
import "element-ui/packages/theme-chalk/lib/base.css";
import "element-ui/packages/theme-chalk/lib/collapse.css";
import "element-ui/packages/theme-chalk/lib/collapse-item.css";
import "element-ui/packages/theme-chalk/lib/select.css";
import "element-ui/packages/theme-chalk/lib/option.css";
 
import { 
    Button,
    Form,
    FormItem,
    Input,
    Menu,
    MenuItem,
    MenuItemGroup,
    Row,
    Col,
    Submenu,
    Message
 } from 'element-ui'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Submenu);
Vue.prototype.$message = Message;