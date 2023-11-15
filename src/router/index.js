import { createRouter, createWebHashHistory } from 'vue-router'
import InfoPersonnelleView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Information Personnelle',
    component: InfoPersonnelleView
  },
  {
    path: '/information_emploi',
    name: 'Information Emploi',
    component: () => import('../views/InformationPosteView.vue')
  },
  {
    path: '/remuneration',
    name: 'Remuneration',
    component: () => import('../views/RemunerationView.vue')
  },
  {
    path: '/documents',
    name: 'Docuemnts',
    component: () => import('../views/DocumentsView.vue')
  },
  {
    path: '/profil_carriere',
    name: 'Profil Carriere',
    component: () => import('../views/ProfilProfessionnelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
