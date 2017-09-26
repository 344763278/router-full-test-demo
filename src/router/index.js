import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import recomand from '@/components/recomand'
import singer from '@/components/singer'
import song from '@/components/song'
import like from '@/components/like'
import recomandDetail from '@/components/recomandDetail'
import singerDetail from '@/components/singerDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'recomand', redirect: '/recomand' },
    {
      path: '/recomand',
      name: 'recomand',
      component: recomand,
      children: [{
        path: ':id',
        component: recomandDetail
      }]
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [{
        path: ':id',
        component: singerDetail
      }]
    },
    { path: '/song', name: 'song', component: song },
    { path: '/like', name: 'like', component: like }
  ]
})
