<template>
  <div class="personal-info">
    <header-bar></header-bar>
    <banner heading-mobile="Let's get you qualified." heading-desktop="Let's get you qualified."></banner>
    <page></page>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Page from '@/components/Page';

export default {
  name: 'personal-info',
  components: {
    HeaderBar: Header,
    Banner,
    Page,
  },
  data() {
    return {
      msg: 'OOGABOOGA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
