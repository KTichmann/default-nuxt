<template>
  <v-tabs v-model="tab"
    color="primary"
    grow>
    
    <v-tab v-for="(tab, i) in tabs" :key="i">
      <v-icon left>{{ tab.icon }}</v-icon>
      {{ tab.title }}
    </v-tab>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(tab, i) in tabs"
        :key="i">
        <v-card flat>
          <v-card-text>{{ tab.text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BNavbarV1',

  props: ['tabs'],

  data() {
    return {
      tab: null,
    }
  }
}
</script>

<style scoped>

</style>
