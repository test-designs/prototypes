<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    HeaderBar: Header,
  },
};
</script>

<style>
#app {
  
}
</style>
