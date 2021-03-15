// 配置路由相关信息
import vueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载方式
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use(插件) 安装插件
Vue.use(vueRouter)
// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
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

const router = new vueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to);
  next()
})

// 3.将router对象传入Vue实例
export default router
