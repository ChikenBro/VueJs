import Vue from 'vue'
import Router from 'vue-router'

// import About from '../components/About.vue'
// import Home from '../components/Home.vue'
// import User from '../components/User.vue'

// 懒加载
const About = () => import('../components/About.vue')
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')


// 解决重复点击路由保错问题
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2. 创建路由对象
const routes = [{
    path: '',
    //  redirect重定向 设置默认路径
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [{
        path: '',
        redirect: 'news'
      },
      {
        // 子路由就不用加/
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    meta: {
      title: '首页'
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log('index++++++');
      next();
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:aaa',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes,
  // 切换hash模式和histor模式
  mode: 'history',
  //重新命名.router-link-active
  linkActiveClass: 'active'
})

// 前置钩子(守卫) 路由跳转之前执行 
router.beforeEach((to, from, next) => {
  // 从from跳转到to next必须调用
  // matched可以解决子组件无meta的问题
  document.title = to.matched[0].meta.title;
  // console.log('先调用');
  next();
})

// 后置钩子
router.afterEach((to, from) => {
  // console.log('后调用');
})
// 3.将router对象导出并传入到Vue实例
export default router
