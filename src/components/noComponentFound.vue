<template>
  <div id="main-div" class="single-chat-area chat-height blank-chat-section">
    <div id="container">
      <!-- to increase performance, we change the opacity of shadow instead of changing the text-shadow directly -->

      <p id="text">404 ERROR</p>

      <p id="shadow">
        <span id="glow">40</span><span id="blink">4 E</span
        ><span id="glow">RR</span><span id="blink">OR</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-found",
  data() {
    return {};
  },
  mounted() {
    document.title =
      "PNC Work Bench - " + this.$router.app._route.meta.pageTitle;
  }
};
</script>
<style scoped>
#main-div {
  margin-top: 0;
  margin-bottom: 0;
  height: calc(100vh - (114px + 112px));
  background-color: #112;
  background-image: url(https://images.weserv.nl?url=i.imgur.com/6QJjYMe.jpg);
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

#text,
#shadow {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7em;
  letter-spacing: 20px;
  font-family: Bad Script;
  color: #fff;
}

#text {
  color: #333;
}

#shadow {
  text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff, 0 0 70px #228dff,
    0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
}

#glow {
  /* Animation Time: 3s  /  Delay: 1s */
  animation: neon1 linear infinite 3s 1.5s;
  will-change: opacity;
}

#blink {
  /* Animation Time: 2s  /  Delay: 0s */
  animation: blink linear infinite 2s 0s;
}

@keyframes neon1 {
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0.6;
  }
}

@keyframes blink {
  70% {
    opacity: 1;
  }
  79% {
    opacity: 0;
  }
  81% {
    opacity: 1;
  }
  82% {
    opacity: 0;
  }
  83% {
    opacity: 1;
  }
  92% {
    opacity: 0;
  }
  92.5% {
    opacity: 1;
  }
}

/* Copy-right by ARiyou2000 in May2020*/
</style>
