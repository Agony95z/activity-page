import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// @ts-ignore
router.beforeEach((to, from, next) => {
    if(to.meta.title) {
        // @ts-ignore
        document.title = to.meta.title;
    }
    next();
})
const app = createApp(App);
app.use(router);
app.mount('#app');
