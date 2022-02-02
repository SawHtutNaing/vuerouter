import { createApp} from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) 
import Home from './Page/Home'; 
import About from './Page/About';

const routes =[
    {
        path:'/home',
        name:"home",
        component:Home,
    },
    {
        path:'/about',
        name:"about",
        component:About,
    }

];

const router = new VueRouter({
    mode:"history",
    routes,
});


createApp(App).mount('#app');
new Vue({
    router,
    render:(h) => h(App),
}).$mount(`#app`);