import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/information_personelle',
    name: 'Information Personnelle',
    component: () => import('../views/InfoPersoView.vue')
  },
  {
    path: '/coordonnees',
    name: 'Coordonnées',
    component: () => import('../views/CoordonneesView.vue')
  },
  {
    path: '/information_biographique',
    name: 'Information Biographique',
    component: () => import('../views/InformationBiographiqueView.vue')
  },
  {
    path: '/information_poste',
    name: 'Information Poste',
    component: () => import('../views/InformationPosteView.vue')
  },
  {
    path: '/remuneration',
    name: 'Remuneration',
    component: () => import('../views/RemunerationView.vue')
  },
  {
    path: '/profil_profesionnel',
    name: 'Profil Professionnel',
    component: () => import('../views/ProfilProfessionnelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
