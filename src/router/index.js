import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'category',
      component: Category
    }
  ]
})
