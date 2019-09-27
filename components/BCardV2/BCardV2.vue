<template>
  <v-card
    class="accent--text"
    min-width="280"
    max-width="370"
    :disabled="disabled"
    :elevation="elevation"
    :loading="loading">
    
    <div class="ribbon-corner headline">UK'S LOWEST</div>

    <v-img
      height="230px"
      :src="card.mainImg">
      <v-layout text-center fill-height ma-0>
        <v-flex align-self-end pa-0>
          <span class="headline">{{ card.title }}</span><br>
          <v-divider width="230px" class="mx-auto mt-5 mb-5"></v-divider>
          <span>£</span>
          <span class="display-3">{{ card.price }}</span><br>
        </v-flex>
      </v-layout>
    </v-img>

    <v-card-text class="info--text">
      <v-list disabled>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in card.features"
            :key="i">
            <v-list-item-icon>
              <v-icon color="primary">mdi-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <span class="body-1" v-text="card.features[i]"></span>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>

    <v-list-item>
      <v-list-item-content>
        <span class="body-1 primary--text">{{ card.footerInfo }}</span>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80">
        <v-img :src="card.footerImg"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BCardV2',

  props: {
    disabled: VueTypes.bool.def(false),
    elevation: String || Integer,
    loading: VueTypes.bool.def(false),
    card: Object
  }
}
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
.v-card {
  overflow: hidden;
  border-radius: 1.5rem;
}
.ribbon-corner {
  color: #fff;
  text-align: center;
  transform: rotate(-25deg);
  position: absolute;
  padding: 10px 55px 10px 0px;
  left: -40px;
  top: 10px;
  width: 300px;
  background: linear-gradient(90deg, #1f8ceb 0, #19d5b2 100%);
}
</style>
