import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({

})

// components
import MobileSlider from "../components/MobileSlider.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import Gallery from "../components/Gallery.vue";
import Button from '../components/Button.vue'
import Field from '../components/Field.vue'
import Textarea from '../components/Textarea.vue'
import Form from '../components/Form.vue'
import Contact from "../components/Contact.vue";

Vue.component('mobile-slider-component', MobileSlider)
Vue.component('about-component', About)
Vue.component('services-component', Services)
Vue.component('gallery-component', Gallery)
Vue.component('v-button', Button)
Vue.component('field', Field)
Vue.component('v-textarea', Textarea)
Vue.component('v-form', Form)
Vue.component('contact-component', Contact)

// pluguns
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
Vue.use(VueAwesomeSwiper)




