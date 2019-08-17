import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Impressum from './components/impressum.vue'
import Home from './components/home.vue'
import Blog from './components/blog.vue'
import Videos from './components/videos.vue'
import Podcast from './components/podcast.vue'
import Kontakt from './components/kontakt.vue'
import ContentfulVue from 'contentful-vue';

Vue.config.productionTip = false

Vue.component('home', Home);
Vue.component('blog', Blog);
Vue.component('videos', Videos);
Vue.component('podcast', Podcast);
Vue.component('kontakt', Kontakt);

Vue.use(ContentfulVue, {
  space: "45sv8t6c27w7",
  accessToken: "cf3c0af14e99b19664271dc8a120f489a1e310d5cae4f60566bfd6737863f5ce"
});

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
