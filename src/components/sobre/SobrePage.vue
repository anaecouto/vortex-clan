<template>
  <HeaderPage />
  <div class="flex flex-row flex-1 self-center items-center content">
    <ClanLogo />
    <section class="basis-1/2 funcionamento">
      <p class="text-center text-xl leading-loose">
        Bem-vindo ao nosso clã no emocionante mundo do recém-lançado MMORPG Throne And Liberty!
        Nosso clã é dedicado a
        oferecer uma experiência de jogo envolvente e descontraída, embora também abracemos a competitividade. <br>
        Valorizamos
        a diversidade e damos as boas-vindas a jogadores de todas as habilidades. Aceitamos membros com mais de 18 anos, 
        garantindo um ambiente maduro e respeitoso para todos.
        Seja você um jogador casual ou alguém que busca desafios competitivos, você encontrará seu lugar em nosso clã.<br><br>
        Junte-se a nós e embarque nesta jornada épica em Throne And Liberty.
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
.funcionamento {
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
  