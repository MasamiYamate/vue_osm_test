import Vue from 'vue'
import Router from 'vue-router'
import BaseView from '@/components/BaseView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: BaseView
    }
  ]
})
