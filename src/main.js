//注册Mint-UI
import Vue from 'vue';
import Mint from 'mint-ui';
//导入Mint-UI样式库(所有的组件)
import 'mint-ui/lib/style.css'
//导入mui
import './lib/mui/css/mui.css'
//注册到Vue上
Vue.use(Mint);
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import app from './App.vue';

const vm = new Vue({
    el: '#app',
    render: c => c(app)
});