import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

//
Vue.component('VueSlickCarousel', VueSlickCarousel)
//
const datepickerOptions = {}
//
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
