import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// require("./directives/CustomDirective")

import imageLazyLoading from "./directives/CustomDirective.js"

createApp(App).directive('img-lazy-loading',imageLazyLoading)
.use(store).use(router).mount('#app')
