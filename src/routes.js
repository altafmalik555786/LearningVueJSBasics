import {
    createWebHistory,
    createRouter
} from 'vue-router'
import home from './components/home.vue'
import Profile from './components/profile.vue'
import Login from './components/login.vue'
import PageNotFound from './components/PageNotFound'
const routes = [
    {
    name: 'home',
    path: '/',
    component: home
    },
    {
    name: 'Profile',
    path: '/profile/:name',
    component: Profile
    },
    {
    name: 'Login',
    path: '/login',
    component: Login
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;