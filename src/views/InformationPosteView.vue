<script>
import TitleSection from '@/components/TitleSection.vue';
import SaveButton from '@/components/SaveButton.vue';
export default {
  name: 'PosteView',
  components: {
    TitleSection,
    SaveButton
  }
}
</script>

<template>
  <div class="infoposte">
    <TitleSection title="INFORMATIONS SUR L’EMPLOI"></TitleSection>
    <div class="blockform">
      <h1 class="titleform">DÉTAILS DU POSTE</h1>
      <div>
        <div>
          <input type="text" placeholder="Date d’embauche ">
          <input type="text" placeholder="Date du contrat">
        </div>
        <div>
          <input type="text" placeholder="Date de début dans le groupe">
        </div>
      </div>
      <SaveButton></SaveButton>
    </div>
    <div class="blockform">
      <h1 class="titleform">INFORMATIONS SUR L’ORGANISATION</h1>
      <div>
        <div>
          <input type="text" placeholder="Poste">
          <input type="text" placeholder="Société">
          <input type="text" placeholder="Area">
          <input type="text" placeholder="Unité commercial">
          <input type="text" placeholder="Division">
        </div>
        <div>
          <input type="text" placeholder="Date de prise de poste">
          <input type="text" placeholder="Service">
          <input type="text" placeholder="Site">
          <input type="text" placeholder="Fuseau horaire">
          <input type="text" placeholder="Centre de coûts">
        </div>
      </div>
      <SaveButton></SaveButton>
    </div>
  </div>
</template>

<style lang="scss">
.infoposte{

}
</style>