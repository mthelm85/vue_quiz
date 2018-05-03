import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Questions from '@/components/Questions'
import End from '@/components/End'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Start',
      components: {
        body: Start
      }
    },
    {
      path: '/questions',
      name: 'Questions',
      components: {
        body: Questions
      }
    },
    {
      path: '/end',
      name: 'End',
      components: {
        body: End
      }
    }
  ]
})
