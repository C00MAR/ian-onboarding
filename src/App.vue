<script>
import HeaderPart from '@/components/Header.vue'
import ProfilePart from '@/components/Profile.vue'
export default {
  name: 'App',
  components: {
    HeaderPart,
    ProfilePart
}
}
</script>

<template>
  <HeaderPart></HeaderPart>
  <ProfilePart></ProfilePart>
    <nav>
    <router-link to="/">
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.6001 8C7.5001 8 6.55843 7.60833 5.7751 6.825C4.99176 6.04167 4.6001 5.1 4.6001 4C4.6001 2.9 4.99176 1.95833 5.7751 1.175C6.55843 0.391667 7.5001 0 8.6001 0C9.7001 0 10.6418 0.391667 11.4251 1.175C12.2084 1.95833 12.6001 2.9 12.6001 4C12.6001 5.1 12.2084 6.04167 11.4251 6.825C10.6418 7.60833 9.7001 8 8.6001 8ZM0.600098 16V13.2C0.600098 12.6333 0.746098 12.1123 1.0381 11.637C1.3301 11.1617 1.71743 10.7993 2.2001 10.55C3.23343 10.0333 4.28343 9.64567 5.3501 9.387C6.41676 9.12833 7.5001 8.99933 8.6001 9C9.7001 9 10.7834 9.12933 11.8501 9.388C12.9168 9.64667 13.9668 10.034 15.0001 10.55C15.4834 10.8 15.8711 11.1627 16.1631 11.638C16.4551 12.1133 16.6008 12.634 16.6001 13.2V16H0.600098Z" fill="black"/>
      </svg>
      information Personelle
    </router-link>
    <router-link to="/information_emploi">
      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.80005 18V17L8.80005 15H2.80005C2.25005 15 1.77905 14.804 1.38705 14.412C0.99505 14.02 0.799384 13.5493 0.800051 13V2C0.800051 1.45 0.996051 0.979002 1.38805 0.587002C1.78005 0.195002 2.25072 -0.000664969 2.80005 1.69779e-06H18.8001C19.35 1.69779e-06 19.8211 0.196002 20.2131 0.588002C20.6051 0.980002 20.8007 1.45067 20.8001 2V13C20.8001 13.55 20.6041 14.021 20.2121 14.413C19.8201 14.805 19.3494 15.0007 18.8001 15H12.8001L14.8001 17V18H6.80005ZM2.80005 10H18.8001V2H2.80005V10Z" fill="black"/>
      </svg>
      Information sur l'emploi
    </router-link>
    <router-link to="/remuneration">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18C10.0333 18 8.28333 17.4417 6.75 16.325C5.21667 15.2083 4.13333 13.7667 3.5 12H0V10H3.05C3 9.6 2.97933 9.229 2.988 8.887C2.99667 8.545 3.01733 8.24933 3.05 8H0V6H3.5C4.13333 4.23333 5.21667 2.79167 6.75 1.675C8.28333 0.558334 10.0333 0 12 0C13.15 0 14.2377 0.204333 15.263 0.613C16.2883 1.02167 17.2007 1.584 18 2.3L16.575 3.7C15.9583 3.16667 15.2627 2.75 14.488 2.45C13.7133 2.15 12.884 2 12 2C10.5833 2 9.31667 2.371 8.2 3.113C7.08333 3.855 6.24167 4.81733 5.675 6H12V8H5.075C5.00833 8.45 4.98333 8.846 5 9.188C5.01667 9.53 5.04167 9.80067 5.075 10H12V12H5.675C6.24167 13.1833 7.08333 14.146 8.2 14.888C9.31667 15.63 10.5833 16.0007 12 16C12.8833 16 13.7127 15.85 14.488 15.55C15.2633 15.25 15.959 14.8333 16.575 14.3L18 15.7C17.2 16.4167 16.2873 16.9793 15.262 17.388C14.2367 17.7967 13.1493 18.0007 12 18Z" fill="black"/>
      </svg>
      Rémunération
    </router-link>
    <router-link to="/profil_carriere">
      <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.2002 21C1.6502 21 1.1792 20.804 0.787197 20.412C0.395197 20.02 0.19953 19.5493 0.200197 19V9C0.200197 8.71667 0.296197 8.479 0.488197 8.287C0.680197 8.095 0.91753 7.99934 1.2002 8C1.48353 8 1.7212 8.096 1.9132 8.288C2.1052 8.48 2.20086 8.71734 2.2002 9V19H18.2002C18.4835 19 18.7212 19.096 18.9132 19.288C19.1052 19.48 19.2009 19.7173 19.2002 20C19.2002 20.2833 19.1042 20.521 18.9122 20.713C18.7202 20.905 18.4829 21.0007 18.2002 21H2.2002ZM6.2002 17C5.6502 17 5.1792 16.804 4.7872 16.412C4.3952 16.02 4.19953 15.5493 4.2002 15V5C4.2002 4.71667 4.2962 4.479 4.4882 4.287C4.6802 4.095 4.91753 3.99934 5.2002 4H9.2002V2C9.2002 1.45 9.3962 0.979002 9.7882 0.587002C10.1802 0.195002 10.6509 -0.000664969 11.2002 1.69779e-06H15.2002C15.7502 1.69779e-06 16.2212 0.196002 16.6132 0.588002C17.0052 0.980002 17.2009 1.45067 17.2002 2V4H21.2002C21.4835 4 21.7212 4.096 21.9132 4.288C22.1052 4.48 22.2009 4.71734 22.2002 5V15C22.2002 15.55 22.0042 16.021 21.6122 16.413C21.2202 16.805 20.7495 17.0007 20.2002 17H6.2002ZM11.2002 4H15.2002V2H11.2002V4Z" fill="black"/>
      </svg>
      Profil Carriere
    </router-link>
    <router-link to="/documents">
      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.40003 18C1.85003 18 1.37903 17.804 0.987026 17.412C0.595026 17.02 0.399359 16.5493 0.400026 16V2C0.400026 1.45 0.596026 0.979002 0.988026 0.587002C1.38003 0.195002 1.85069 -0.000664969 2.40003 1.69779e-06H18.4C18.95 1.69779e-06 19.421 0.196002 19.813 0.588002C20.205 0.980002 20.4007 1.45067 20.4 2V16C20.4 16.55 20.204 17.021 19.812 17.413C19.42 17.805 18.9494 18.0007 18.4 18H2.40003ZM2.40003 16H18.4V2H2.40003V16ZM4.40003 14H16.4V12H4.40003V14ZM4.40003 10H8.40003V4H4.40003V10ZM10.4 10H16.4V8H10.4V10ZM10.4 6H16.4V4H10.4V6Z" fill="black"/>
      </svg>
      Documents
    </router-link>
  </nav>
  <router-view/>
  <button class="TTS">
  </button>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
.TTS{
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 150px;
  border: 0;
  cursor: pointer;
  background-image: url('../src/assets/TextToSpeechNot.png');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #DEDEDE;
  padding: 15px 52px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}

nav a {
  font-weight: bold;
  color: #000000;
  padding: 10px 25px;
  border-radius: 4px;
  border: #000 2px solid;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  text-transform: uppercase;
  width: 20%;
  font-size: 12px;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #000;
  svg{
    filter: invert(1);
  }
}

::placeholder {
  color: #000;
  opacity: 1;  
}

.blockform{
  background-color: #D9D9D9;
  border-radius: 4px;
  padding: 32px 32px 90px 32px;
  width: 66%;
  margin-left: 52px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 50px;
  .titleform{
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    div, .lastCo{
      display: flex;
      flex-direction: column;
      gap: 15px;
      input, select{
        background-color: #ffffff;
        border-radius: 4px;
        width: 350px;
        border: 0;
        height: 40px;
        padding: 0 0 0 15px;
        min-width: 350px;
        color: #000;
      }
      select{
        width: 363px;
      }
    }
  }
}
</style>
