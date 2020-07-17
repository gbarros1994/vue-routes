import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Error404Contatos from './views/contatos/Error404Contatos.vue'
import Home from './views/Home.vue'
import Error404 from './views/Error404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/meus-contatos',
      component:  Contatos,
      children: [
        {
          path: ':id',
          component: ContatoDetalhes,
          name: 'contato',
          props: true
        },
        {
          path:':id/editar',
          alias: ':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },
        { path: '', component: ContatosHome },
      ]
    },
    { path:'/contatos', redirect: '/meus-contatos' },
    { path: '/', component:  Home },
    { path: '/contatos*', component: Error404Contatos },
    { path: '*', component: Error404 }
  ]
})