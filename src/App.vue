<template>
  <div id="app">
    <grid></grid>
    <router-view></router-view>
  </div>
</template>

<script>
import Grid from '@/components/Grid';

export default {
  name: 'app',
  components: {
    Grid,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
