import VueRouter from "vue-router";
import Vue from 'vue';

// import Home from '../components/Home';
// import About from "../components/About";
// import User from '../components/User';

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(VueRouter);
const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
          title: "首页"
        },
        children: [
            // {
            //     path: '',
            //     redirect: 'news',
            //     meta: {
            //         title: "新闻"
            //     }
            // },
            {
                path: 'news',
                component: HomeNews,
                meta: {
                    title: "新闻"
                },
                beforeEnter: (to, from, next) => {
                    document.title = to.meta.title;
                    next();
                }
            },{
                path: 'message',
                component: HomeMessage,
                meta: {
                    title: "消息"
                },
                beforeEnter: (to, from, next) => {
                    document.title = to.meta.title;
                    next();
                }
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: "关于"
        },
    },
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: "用户"
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: "档案"
        },
    }
]
const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: 'active',

})
//guard
router.beforeEach((to, from, next) => {
    console.log('--guard--');
    document.title = to.matched[0].meta.title;
    next()
})
//hook
router.afterEach(((to, from) => {
    console.log('--hook--');
}))

export default router