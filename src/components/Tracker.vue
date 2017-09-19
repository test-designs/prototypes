<template>
  <div class="tracker">
    <div class="progress-lines">
      <div class="past"></div>
      <div class="present"></div>
      <div class="future"></div>
      <div class="future"></div>
      <div class="future"></div>
    </div>
    <div class="progress-text">
      <div class="past"><p>Pre-Qualify</p></div>
      <div class="present"><p>Select Product</p></div>
      <div class="future"><p>Income</p></div>
      <div class="future"><p>Properties</p></div>
      <div class="future"><p>Review &amp; Submit</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tracker',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tracker {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #C9CED2;
  .progress-text {
    display: absolute;
    margin-top: -35px;
    text-align: center;
    div {
      cursor: pointer;
      position: relative;
      top: -15px;
    }
    p {
      font-family: ProximaNova;
      font-weight: 300;
      font-size: 16px;
    }
    .past p {
      display: none;
      color: #011728;
    }
    .present p {
      font-weight: 600;
      color: #273B49;
    }
    .future p {
      display: none;
      color: #AEB5BB;
    }
  }
  .progress-lines {
    height: 100%;
    border-bottom: 1px solid #C9CED2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 2px;
    div {
      margin-bottom: -1px;
    }
    .past {
      border-bottom: 3px solid #018BBB;
    }
    .present {
      border-bottom: 3px solid #0EA218;
    }
  }
}
@media only screen and (min-width: 768px) {
  .tracker {
    .progress-text {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      .past p {
        display: inline-block;
      }
      .future p {
        display: inline-block;
      }
    }
  }
}
</style>
