<template>
  <div class="offers">
    <banner></banner>
    <page></page>
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Page from '@/components/Page';

export default {
  name: 'offers',
  components: {
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
