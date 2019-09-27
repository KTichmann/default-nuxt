<template>
  <v-container fluid grid-list-lg>
    <v-layout row>
      <v-flex xs4 v-for="(item, i) in colors" :key="i">
        <v-card
          height="250px"
          :color="item"
          dark>
          <v-card-text class="white--text">
            <div class="headline mb-2">{{ item }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="(item, i) in gradients" :key="i">
        <v-card
          height="250px"
          :class="item.gradient"
          dark>
          <v-card-text class="white--text">
            <div class="headline mb-2">{{ item.rgba }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BTypography',
  data() {
    return {
      colors: ['#1F8CEB', '#F3F3F3', '#F9F9F9', '#2E2D7F', '#7D8A95', '#19D5B2', '#7771FF', '#EE405B', '#FFD013'],
      gradients: [
        { gradient: 'gradient1', rgba: 'linear-gradient(90deg, #1F8CEB 0%, #1CB1CF 51.04%, #19D5B2 100%' }, 
        { gradient: 'gradient2', rgba: 'linear-gradient(90deg, #7771FF 0%, #19D5B2 100%)' }, 
        { gradient: 'gradient3', rgba: 'linear-gradient(90deg, #7771FF 0%, #EE405B 100%)' }, 
        { gradient: 'gradient4', rgba: 'linear-gradient(90deg, #7771FF 0%, #2E2D7F 100%)' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient1 {
  background: linear-gradient(90deg, #1F8CEB 0%, #1CB1CF 51.04%, #19D5B2 100%);
}
.gradient2 {
  background: linear-gradient(90deg, #7771FF 0%, #19D5B2 100%);
}
.gradient3 {
  background: linear-gradient(90deg, #7771FF 0%, #EE405B 100%);
}
.gradient4 {
  background: linear-gradient(90deg, #7771FF 0%, #2E2D7F 100%);
}
</style>
