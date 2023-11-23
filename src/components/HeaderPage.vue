<template>
  <header class="flex bg-black justify-between">
    <ul class="flex flex-row text-2xl list-none">
      <li class="px-8">
        <i class="fa fa-home" aria-hidden="true"></i>
        <router-link :to="'/home'" class="menu-item bar3 no-underline">Início</router-link>
      </li>
      <li class="px-8">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
        <router-link :to="'/about'" class="menu-item bar3 no-underline">Sobre</router-link>
      </li>
      <li class="px-8">
        <i class="fa fa-star" aria-hidden="true"></i>
        <router-link :to="'/recruit'" class="menu-item bar3 no-underline">Recrutamento</router-link>
      </li>
    </ul>
    <a class="discord flex items-center px-8" href="https://discord.gg/hUPGBGbjMv">
      <img src="https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png" alt="Ícone do Discord">
    </a>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin&family=Josefin+Sans:wght@200&family=Lavishly+Yours&family=Lora&family=Montserrat:wght@100;200;400&display=swap');

li {
  font-family: 'Cabin', sans-serif;
  position: relative;
}

.fa {
  margin-right: 5px;
  color: rgb(0, 87, 174);
}

.discord {
  width: 80px;
  height: 80px;
}

/* .menu-item {
  position: relative;
  transition: border 1s ease;
} */

.menu-item:hover {
  border: 2px solid rgba(00,160,80,0);
  color: #FFF;
}

.menu-item::before, .menu-item::after {
  width: 100%;
  height:100%;
  z-index: 3;
  content:'';
  position: absolute;
  top:0;
  left:0;
  box-sizing: border-box;
  -webkit-transform: scale(0);
  transition: 0.5s;
}

.bar3::before {
  border-bottom: 1px solid #328ba8;
  border-left: 1px solid #328ba8;
  -webkit-transform-origin: 0% 100%;
}

.bar3::after {
  border-top: 1px solid #328ba8;
  border-right: 1px solid #328ba8;
  -webkit-transform-origin: 100% 0%;
}


.menu-item:hover::after, .menu-item:hover::before {
  -webkit-transform: scale(1);
}

.menu-item:hover::after, .menu-item:hover::before {
  -webkit-transform: scale(1);
}

.menu-item:link,
.menu-item:visited {
  text-decoration: none;
  color: white;
}
</style>

<script>
export default {
  name: 'HeaderPage'
}
</script>
