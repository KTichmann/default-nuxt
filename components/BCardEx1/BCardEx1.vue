<template>
  <v-card
    class="accent--text"
    min-width="280"
    max-width="380"
    :disabled="disabled"
    :elevation="elevation"
    :loading="loading">

    <div class="ribbon ribbon-top-left"><span>UK's Lowest</span></div>
    <!-- <div class="ribbon ribbon-top-right"><span>UK's Lowest</span></div> -->

    <v-layout text-center fill-height pt-5 mt-5>
      <v-flex align-self-end pt-5 mt-5>
        <span>£</span>
        <span class="display-4">{{ card.price }}</span><br>
        <span class="display-2">{{ card.title }}</span><br>
        <span class="headline strike">{{ card.subTitle }}</span>
      </v-flex>
    </v-layout>

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
  name: 'BCardEx1',

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
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -0;
  content: '';
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background: linear-gradient(90deg, #1f8ceb 0, #19d5b2 100%);
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
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
