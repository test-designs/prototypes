<template>
  <div class="offers">
    <header-bar></header-bar>
    <banner
      :headingMobile="mobileHeading"
      :headingDesktop="desktopHeading"
      :headingSub="subHeading"></banner>
    <page></page>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Page from '@/components/Page';

export default {
  name: 'offers',
  components: {
    HeaderBar: Header,
    Banner,
    Page,
  },
  data() {
    return {
      mobileHeading: 'Here\'s your offers',
      desktopHeading: 'Here\'s your offers',
      subHeading: 'Get your estimated loan amount and rate without impacting your credit score.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
