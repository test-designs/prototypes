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
      <div class="past"></div>
      <div class="present"><p>Select Product</p></div>
      <div class="future"></div>
      <div class="future"></div>
      <div class="future"></div>
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
  height: 52px;
  border-bottom: 1px solid #C9CED2;
  .progress-text {
    display: absolute;
    margin-top: -35px;
    .past {
      display: none;
    }
    .present {
      p {
        font-family: ProximaNova;
        font-weight: 600;
        font-size: 16px;
        color: #273B49;
        margin: 0 auto;
        text-align: center;
      }
    }
    .future {
      display: none;
    }
  }
  .progress-lines {
    height: 100%;
    border-bottom: 1px solid #C9CED2;
    white-space: nowrap;
    div {
      display: inline-block;
      width: 19%;
      height: 100%;
      margin-right: 1px;
      position: relative;
      bottom: 3px;
      &:last-child {
        margin-right: 0;
      }
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

  }
}
</style>
