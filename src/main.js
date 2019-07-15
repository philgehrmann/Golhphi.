import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Impressum from './components/impressum.vue'
import Home from './components/home.vue'
import Blog from './components/blog.vue'
import Videos from './components/videos.vue'
import Kontakt from './components/kontakt.vue'

Vue.config.productionTip = false
Vue.component('home', Home);
Vue.component('blog', Blog);


Vue.use(VueRouter);
const Router = new VueRouter({
  routes: [
    {path: '', component: Home},
    {path: '/impressum', component: Impressum},
    {path: '/blog', component: Blog},
    {path: '/videos', component: Videos},
    {path: '/kontakt', component: Kontakt},
  ],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
