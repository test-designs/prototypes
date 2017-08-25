<template>
  <div class="banner">
    <div>
      <h1 class="mobile">Here's your offers!</h1>
      <h1 class="desktop">You can get up to {{offerAmount}}</h1>
      <h2>Choose which home equity solution works best for you.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      offerAmount: 8888888,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  height: 140px;
  background: linear-gradient( rgba(39, 59, 73, 0.4),
  rgba(39, 59, 73, 0.4)),
  // url("../assets/GettyImages-554992459.png");
  url("../assets/background.jpg");
  background-repeat: no-repeat;
  // background-size: cover;
  background-size: 175% auto;
  background-position: 60% 50%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: 10px;
}

h1 {
  font-family: ProximaNova;
  font-weight: 200;
  font-size: 30px;
  color: #fff;
  line-height: 36px;
  margin: 0;
}

h2 {
  font-family: ProximaNova;
  font-weight: 200;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}

.desktop {
  display: none;
}

@media only screen and (min-width: 768px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: inline;
  }
  .banner {
    height: 107px;
    padding: 120px 0 95px 0;
  }
  h1 {
    font-size: 64px;
    line-height: 78px;
  }
  h2 {
    font-size: 24px;
    line-height: 29px;
  }
}
</style>
