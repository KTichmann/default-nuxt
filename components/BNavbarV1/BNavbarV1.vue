<template>
  <div id="btoolbar">
    <v-app-bar app fixed flat clipped-left height="76px">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/">
          <v-img contain width="145px" src="http://lh3.googleusercontent.com/7HeGY6eAZREb0kcxK6t9KMN30vpbndzIIVCo0HK9K8HLZSh3tf2LnqsSRgcvJWSv-tV3UMRLjsBEV25hCzvRzHk3LZ7auZqeUQ=s550 ">
        </v-img></router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu transition="slide-y-transition" min-width="100%"  offset-y v-for="(item, index) in navbar" :key="index">
          <template v-slot:activator="{ on }">
            <v-btn class="body-1 text-none"
              v-if="item.subnav"
              text
              @click="expand = !expand"
              v-on="on">
                {{ item.title }}
            </v-btn>

            <v-btn class="body-1 text-none" v-else text  @click="expand = !expand">
              {{ item.title }}
            </v-btn>
          </template>

          <v-expand-transition>
            <v-toolbar flat>
              <v-toolbar-items class="mx-auto">
                <v-btn class="pa-5 body-1 text-none" text v-for="(item, i) in item.subnav"
                  :key="i">
                  <v-img class="mr-2" width="30px" :src="item.icon"></v-img>
                  {{ item.title }}
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-expand-transition>

          <v-divider></v-divider>
        </v-menu>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class="text-none body-1 primary--text" to="/portal">MY bOnline - Sign In</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      class="hidden-md-and-up"
      app
      v-model="drawer"
      left
      clipped
      mobile-break-point=0
      width="100%">
      <v-list>
        <v-list-group
          append-icon=""
          v-for="item in navbar"
          :key="item.title">

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" :to="item.to"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item ,i) in item.subnav"
            :key="i"
            :to="item.path" 
            @click="drawer =! drawer">

            <v-list-item-avatar tile size="30px" v-if="item.icon">
              <v-img :src="item.icon"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          <v-divider color="#1f8ceb"></v-divider>
        </v-list-group>
      </v-list>

      <v-list>
        <v-list-item to="/portal">
          <v-list-item-content>
            <v-list-item-title>My bOnline - Sign In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'BNavbarV1',

  props: ['navbar'],

  data: () => ({
    drawer: false,
    expand: false
  })
}
</script>

<style scoped>
.v-toolbar {
  text-transform: none !important;
}
#btoolbar .v-toolbar:nth-child(1)::after {
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 3px;
  background: #1f8ceb;
  background: -moz-linear-gradient(0deg, #1f8ceb 0%, #19d5b2 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #1f8ceb), color-stop(100%, #19d5b2));
  background: -webkit-linear-gradient(0deg, #1f8ceb 0%, #19d5b2 100%);
  background: -o-linear-gradient(0deg, #1f8ceb 0%, #19d5b2 100%);
  background: -ms-linear-gradient(0deg, #1f8ceb 0%, #19d5b2 100%);
  background: linear-gradient(90deg, #1f8ceb 0%, #19d5b2 100%);
}

.v-menu__content {
  box-shadow: none;
}
.v-navigation-drawer {
  box-shadow: none;
}
</style>
