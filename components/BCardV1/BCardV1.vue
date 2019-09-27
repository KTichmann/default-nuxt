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
      <v-layout text-center fill-height mt-5>
        <v-flex align-self-end>
          <span>£</span>
          <span class="display-4">{{ card.price }}</span><br>
          <span class="display-2">{{ card.title }}</span><br>
          <span class="headline strike">{{ card.subTitle }}</span>
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
  name: 'BCardV1',

  props: {
    disabled: VueTypes.bool.def(false),
    elevation: String || Integer,
    loading: VueTypes.bool.def(false),
    card: Object
  }
}
</script>

<style lang="scss" scoped>
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
@media(max-width: 320px) {
  .v-card {
    .display-2 {
      font-size: 2.4rem !important;
    }
    .display-4 {
      font-size: 5.0rem !important;
    }
  }
}
</style>