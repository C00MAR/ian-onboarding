<script>
export default {
    name: 'TitleSection',
    props: {
        title: {
            type: String,
            default: 'Titre'
        }
    }
}
</script>

<template>
  <div class="title">
    <h1>
      {{ title }}
    </h1>
    <div>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 18.5C7.4 18.5 5.54167 17.8623 3.925 16.587C2.30834 15.3117 1.25834 13.6827 0.775004 11.7C0.708337 11.45 0.758337 11.221 0.925003 11.013C1.09167 10.805 1.31667 10.684 1.6 10.65C1.86667 10.6167 2.10834 10.6667 2.325 10.8C2.54167 10.9333 2.69167 11.1333 2.775 11.4C3.175 12.9 4 14.125 5.25 15.075C6.5 16.025 7.91667 16.5 9.5 16.5C11.45 16.5 13.1043 15.8207 14.463 14.462C15.8217 13.1033 16.5007 11.4493 16.5 9.5C16.5 7.55 15.8207 5.89567 14.462 4.537C13.1033 3.17833 11.4493 2.49933 9.5 2.5C8.35 2.5 7.275 2.76667 6.275 3.3C5.275 3.83333 4.43334 4.56667 3.75 5.5H5.5C5.78334 5.5 6.021 5.596 6.213 5.788C6.405 5.98 6.50067 6.21733 6.5 6.5C6.5 6.78333 6.404 7.021 6.212 7.213C6.02 7.405 5.78267 7.50067 5.5 7.5H1.5C1.21667 7.5 0.979003 7.404 0.787003 7.212C0.595003 7.02 0.499337 6.78267 0.500003 6.5V2.5C0.500003 2.21667 0.596004 1.979 0.788004 1.787C0.980004 1.595 1.21734 1.49933 1.5 1.5C1.78334 1.5 2.021 1.596 2.213 1.788C2.405 1.98 2.50067 2.21733 2.5 2.5V3.85C3.35 2.78333 4.38767 1.95833 5.613 1.375C6.83834 0.791667 8.134 0.5 9.5 0.5C10.75 0.5 11.921 0.737667 13.013 1.213C14.105 1.68833 15.055 2.32967 15.863 3.137C16.671 3.94567 17.3127 4.89567 17.788 5.987C18.2633 7.07833 18.5007 8.24933 18.5 9.5C18.5 10.75 18.2623 11.921 17.787 13.013C17.3117 14.105 16.6703 15.055 15.863 15.863C15.0543 16.671 14.1043 17.3127 13.013 17.788C11.9217 18.2633 10.7507 18.5007 9.5 18.5ZM10.5 9.1L13 11.6C13.1833 11.7833 13.275 12.0167 13.275 12.3C13.275 12.5833 13.1833 12.8167 13 13C12.8167 13.1833 12.5833 13.275 12.3 13.275C12.0167 13.275 11.7833 13.1833 11.6 13L8.8 10.2C8.7 10.1 8.625 9.98767 8.575 9.863C8.525 9.73833 8.5 9.609 8.5 9.475V5.5C8.5 5.21667 8.596 4.979 8.788 4.787C8.98 4.595 9.21734 4.49933 9.5 4.5C9.78334 4.5 10.021 4.596 10.213 4.788C10.405 4.98 10.5007 5.21733 10.5 5.5V9.1Z" fill="black"/>
      </svg>
      <p>Dernière modification : J / M / AAAA à HH:MM</p>
    </div>
    <div>
      <button class="prece">
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1.05491L1.0182 5.45973C1.00663 5.46996 1 5.47556 1 5.491V5.491C1 5.50645 1.00663 5.53026 1.0182 5.54049L6 9.94531" stroke="#878787" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Page précédente
      </button>
      <button class="suiv">
        Page suivante
        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 9.94509L6.4818 5.54027C6.49337 5.53004 6.5 5.52444 6.5 5.509V5.509C6.5 5.49355 6.49337 5.46974 6.4818 5.45951L1.5 1.05469" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 52px;
  font-size: 16px;
  h1{
    text-align: left;
    min-width: 45%;
  }
  div{
    display: flex;
    align-items: center;
    gap: 10px;
    p,button{
      font-weight: bold;
      font-size: 14px;
    }
    button{
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
    }
    .prece{
      background-color: #F0F0F0;
      color: #878787;
    }
    .suiv{
      background-color: #000;
      color: #fff;
    }
  }
}
</style>