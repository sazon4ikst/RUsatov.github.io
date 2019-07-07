// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('header_menu', require('./components/Header.vue').default)
Vue.component('main_page', require('./components/Main.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
