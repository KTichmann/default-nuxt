<template>
  <v-layout class="banner">
    <v-flex class="pa-5 white--text" text-center xs12>
      <span :class="textsize"><slot></slot></span>
    </v-flex>
  </v-layout>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BBannerV1',

  props: ['textsize']
}
</script>

<style scoped>
.banner {
  background: linear-gradient(90deg, #1f8ceb 0, #19d5b2 100%);
}
</style>
