<script>
import TitleSection from '@/components/TitleSection.vue';
import SaveButton from '@/components/SaveButton.vue';
export default {
  components: {
    TitleSection,
    SaveButton
  }
}
</script>

<template>
  <div class="infoperso">
    <TitleSection title="INFORMATIONS PERSONNELLES"></TitleSection>
    <div class="blockform">
      <h1 class="titleform">INFORMATIONS PERSONNELLES</h1>
      <div>
        <div>
          <input type="text" placeholder="Nom">
          <input type="text" placeholder="Nom de naissance">
          <input type="text" placeholder="Nom langue locale">
          <input type="text" placeholder="Nom officiel">
        </div>
        <div>
          <input type="text" placeholder="Prénom">
          <input type="text" placeholder="Prénom d'usage">
          <input type="text" placeholder="Prénom langue locale">
          <select name="sexe">
            <option value="">Sexe</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="both">Non Binaire</option>
            <option value="not">Ne souhaite pas répondre</option>
          </select>
        </div>
      </div>
      <div>
        <div class="lastCo">
          <select name="nationalite">
            <option value="">Nationalité</option>
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
            <option value="de">Allemand</option>
            <option value="es">Espagnol</option>
          </select>
          <select name="secondNationalite">
            <option value="">Deuxième Nationalité</option>
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
            <option value="de">Allemand</option>
            <option value="es">Espagnol</option>
          </select>
          <select name="handi">
            <option value="">Handicap</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
      <SaveButton></SaveButton>
    </div>
    <div class="blockform">
      <h1 class="titleform">COORDONNÉES</h1>
      <div>
        <div>
          <input type="text" placeholder="Numéro de téléphone perso.">
          <input type="text" placeholder="Numéro de téléphone pro.">
        </div>
        <div>
          <input type="text" placeholder="Adresse domicile">
          <input type="text" placeholder="Piece jointe">
        </div>
      </div>
      <SaveButton></SaveButton>
    </div>

  </div>
</template>

<style lang="scss">

</style>