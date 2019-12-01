import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import service from '@/components/service'
import doctors from '@/components/doctors'
import gallery from '@/components/gallery'
import contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/service',
      name: 'service',
      component: service
    }, {
      path: '/doctors',
      name: 'doctors',
      component: doctors
    }, {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    }, {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
