<script>
export default {
    name: 'HeaderPart'
}
</script>

<template>
    <div class="header">
        <div><img src="../assets/logo_header.png" alt=""></div>
        <div class="tools">
            <div class="search">
                <input type="text" placeholder="Rechercher des actions ou des personnes ...">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z" fill="white"/>
                </svg>
            </div>
            <div class="icons">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20V2C0 1.45 0.196 0.979002 0.588 0.587002C0.98 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196002 19.413 0.588002C19.805 0.980002 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14Z" fill="white"/>
                </svg>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 17V15H2V8C2 6.61667 2.41667 5.38734 3.25 4.312C4.08333 3.23667 5.16667 2.53267 6.5 2.2V1.5C6.5 1.08334 6.646 0.729002 6.938 0.437002C7.23 0.145002 7.584 -0.000664389 8 2.2779e-06C8.41667 2.2779e-06 8.771 0.146002 9.063 0.438002C9.355 0.730002 9.50067 1.084 9.5 1.5V2.2C10.8333 2.53334 11.9167 3.23767 12.75 4.313C13.5833 5.38834 14 6.61734 14 8V15H16V17H0ZM8 20C7.45 20 6.979 19.804 6.587 19.412C6.195 19.02 5.99933 18.5493 6 18H10C10 18.55 9.804 19.021 9.412 19.413C9.02 19.805 8.54933 20.0007 8 20Z" fill="white"/>
                </svg>
            </div>
            <div class="profil">
                BR
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 45px;
    background-color: #080808;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    height: 50px;
    .tools{
        display: flex;
        justify-content: space-around;
        width: 40%;
        div{
            display: flex;
            align-items: center;
        }
        .search{
            input{
                padding: 10px;
                width: 300px;
                border-radius: 4px;
                outline: none;
                border: 1px solid #fff;
                background-color: transparent;
                color: #fff;
            }
            svg{
                margin-left: -30px;}
        }
        .icons{
            gap: 15px;
        }
        .profil{
            background-color: #fff;
            color: #000;
            justify-content: center;
            padding: 8px;
            border-radius: 100%;
            width: 30px;
            height: 30px;
        }
    }

}
</style>