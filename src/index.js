// JS - ./js/index.js
import './js/'
// SCSS
import './scss/main.scss'
// CSS (example)
import './css/main.css'
// swiper
import 'swiper/dist/css/swiper.css'
// fontawesome
import '@fortawesome/fontawesome-free/js/all.js'

window.Vue = require('vue')
import store from './store'

const app = new Vue({
    props: {
        active: 'menu__link_a'
    },
  data () {
    return {
      menu: false,
      date: null,
      activeMenu: 0,
    }
  },
  mounted () {
      this.Date()
  },
  methods: {
      falseMenu() {
          if (document.body.clientWidth < 1024){
              this.menu = false
          }
      },
      makeActive: function (item) {
          this.activeMenu = item
          this.falseMenu()
      },
      openMenu() {
          if (this.menu === false) {
              this.menu = true
          }
          else {
              this.menu = false
          }
      },
      OpenHome() {
          this.activeMenu = 0
          this.menu = false
      },
      Date: function () {
          let dateFull = new Date()
          this.date = dateFull.getFullYear()
      },
  },
  store: store,
  el: '#app'
})

