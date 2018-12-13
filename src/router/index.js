import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/category'
import FilterModal from '@/components/FilterModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'category',
      component: Category
    },
    {
      path: '/FilterModal',
      name: 'FilterModal',
      component: FilterModal
    }
  ]
})
