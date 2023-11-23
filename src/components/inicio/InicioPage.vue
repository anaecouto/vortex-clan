<template>
  <HeaderPage />
  <div class="flex flex-row flex-1 self-center items-center content">
    <ClanLogo />
    <section class="historia basis-1/2">
      <p class="text-center text-3xl leading-loose">
        O Clã Vortex surgiu como uma ideia forjada pela amizade improvável de dois pioneiros. Cada membro é acolhido com
        calor e respeito, independentemente de sua experiência no jogo. A missão do clã é clara: construir uma
        comunidade
        onde a diversão e o respeito são os pilares fundamentais.
      </p>
    </section>
  </div>
  <FooterPage />
</template>

<script>
import HeaderPage from '../HeaderPage.vue'
import ClanLogo from '../ClanLogo.vue'
import FooterPage from '../FooterPage.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    HeaderPage,
    ClanLogo,
    FooterPage,
  }
}
</script>

<style scoped>
.historia {
  font-family: 'Josefin Sans', sans-serif;
}

p {
  /* text-shadow: 3px 2px 3px rgba(20, 44, 252, 1); */
  color: white
}

.content {
  margin: 40px;
  position: relative;
  background: linear-gradient(0deg, #000, #000000);
}

.content:before,
.content:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(45deg, #0004fb, #000, #fff, #00c6f7);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.content:after {
  filter: blur(20px);
}
</style>
