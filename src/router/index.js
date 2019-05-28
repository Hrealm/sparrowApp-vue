import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Find from '../components/find/find'

import Three from '../components/three'
import Me from '../components/me'

//导入插件axios 挂载属性 vue.prototype
import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:6789/'
Vue.prototype.$ajax = Axios

//导入jQuery
import $ from 'jquery'
Vue.prototype.$ = $

// 安装mint-ui组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//图片预览插件+扩展
import vuePicturePreview from 'vue-picture-preview-extend'
Vue.use(vuePicturePreview)

Vue.use(Router)

export default new Router({
    linkActiveClass: 'tbActive',   //激活class
    routes: [
        {
            path: '/',
            redirect: { name: 'index' }
        },
        {
            path: '/ ',
            name: 'index',
            component: Index
        },
        {
            path: '/find',
            name: 'find',
            component: Find
        },
        {
            path: '/three',
            name: 'three',
            component: Three
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
    ]
})
