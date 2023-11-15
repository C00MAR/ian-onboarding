<script>
import HeaderPart from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    HeaderPart
  }
}
</script>

<template>
  <nav>
    <HeaderPart></HeaderPart>

    <router-link to="/">Home</router-link> |
    <router-link to="/information_personelle">Information Personnelle</router-link> |
    <router-link to="/coordonnees">Coordonnées</router-link> |
    <router-link to="/information_biographique">Information Biographique</router-link> |
    <router-link to="/information_poste">Information Poste</router-link> |
    <router-link to="/remuneration">Rémunération</router-link> |
    <router-link to="/profil_profesionnel">Profil Profesionnel</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0;
  background-color: #080808;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
