import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/search/search'
import Test from './views/test/test'
import SearchBar from './components/search-bar'
import {routes} from './router/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '/search',
      name: 'Search',
      components: {
        nav: SearchBar,
        default:Search
      }
    },
    {
      path: '/test',
      name: 'Test',
      component:Test
    }
  ]
})
