import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home'
import HelloWorld from "./components/HelloWorld";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/helloword',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./components/About.vue'),
    },
];

export default routes;