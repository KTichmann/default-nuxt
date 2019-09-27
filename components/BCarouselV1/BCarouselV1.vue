<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src">
      <v-sheet
        class="fill-height"
        :color="slide.color"
        height="100%"
        tile>
        <v-row 
          align="center"
          justify="center"
          class="fill-height">
          <div class="text-center display-1">{{ slide.text }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  name: 'BCarouselV1',

  props: ['slides'],

  data: () => ({})
}
</script>

<style lang="scss" scoped>

</style>
