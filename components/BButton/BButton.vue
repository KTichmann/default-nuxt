<template>
  <v-btn
    :absolute="absolute"
    :active-class="activeClass"
    :append="append"
    :block="getClientWidth || block"
    :bottom="bottom"
    :color="color"
    :dark="dark"
    :depressed="depressed"
    :disabled="disabled"
    :elevation="elevation"
    :exact="exact"
    :exact-active-class="exactActiveClass"
    :fab="fab"
    :fixed="fixed"
    :height="height"
    :href="href"
    :icon="icon"
    :input-value="inputValue"
    :large="large"
    :left="left"
    :light="light"
    :link="link"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :nuxt="nuxt"
    :outlined="outlined"
    :replace="replace"
    :right="right"
    :ripple="ripple"
    :rounded="rounded"
    :small="small"
    :tag="tag"
    :target="target"
    :text="text"
    :tile="tile"
    :to="to"
    :top="top"
    :type="type"
    :value="value"
    :width="width"
    :x-large="xLarge"
    :x-small="xSmall">
    <slot></slot>
  </v-btn>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BButton',

  props: {
    absolute: VueTypes.bool.def(false),
    activeClass: String,
    append: VueTypes.bool.def(false),
    block: VueTypes.bool.def(false),
    bottom: VueTypes.bool.def(false),
    color: String,
    dark: VueTypes.bool.def(false),
    depressed: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false),
    elevation: String || Number,
    exact: VueTypes.bool.def(false),
    exactActiveClass: String,
    fab: VueTypes.bool.def(false),
    fixed: VueTypes.bool.def(false),
    height: String || Number,
    href: String,
    icon: VueTypes.bool.def(false),
    inputValue: String,
    large: VueTypes.bool.def(false),
    left: VueTypes.bool.def(false),
    light: VueTypes.bool.def(false),
    link: VueTypes.bool.def(false),
    loading: VueTypes.bool.def(false),
    maxHeight: String || Number,
    maxWidth: String || Number,
    minHeight: String || Number,
    minWidth: String || Number,
    nuxt: VueTypes.bool.def(false),
    outlined: VueTypes.bool.def(false),
    replace: VueTypes.bool.def(false),
    right: VueTypes.bool.def(false),
    ripple: VueTypes.bool.def(false),
    rounded: VueTypes.bool.def(false),
    small: VueTypes.bool.def(false),
    tag: String,
    target: String,
    text: String,
    tile: VueTypes.bool.def(false),
    to: String,
    top: VueTypes.bool.def(false),
    type: String,
    value: String,
    width: String || Number,
    xLarge: VueTypes.bool.def(false),
    xSmall: VueTypes.bool.def(false),
  },

  data() {
    return {
      clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    }
  },
  
  computed: {
    getClientWidth() {
      return (this.clientWidth <= 600) ? true : false;
    }
  }
}
</script>

<style scoped>

</style>
