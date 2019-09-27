<template>
  <v-footer min-width="100%" color="white">
    <v-container>
      <v-row>
        <v-col>
          <v-card
            flat
            tile
            class="white white--text text-center">
            <v-card-text>
              <v-btn
                v-for="icon in footerIcons"
                :key="icon"
                class="mx-4 white--text"
                :to="icon.to"
                icon>
                <v-icon color="primary" size="30px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
            </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(item, i) in footerNav" :key="i">
          <v-list>
            <v-subheader class="title accent--text mt-0 mb-5">{{ item.title }}</v-subheader>

            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in item.items" :key="i">
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1" v-html="item.title" :to="item.to"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>

          </v-list>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container fluid>
      <v-divider class="pa-0 ma-0"></v-divider>
      <v-row>
        <v-col>
          <p class="body-2 text-center"> {{ new Date().getFullYear() }} bOnline Limited, all rights reserved. Registered in England No. 7710947. VAT Reg. 121 4707 49. bOnline is a registered trademark of bOnline. <br> bOnline Ltd. Studio 2.02 Canterbury Court 1 - 3 Brixton Road London SW9 6DE</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>

export default {
  name: 'BFooterV1',

  props: ['footerNav', 'footerIcons'],

  data: () => ({
    
  })
}
</script>

<style lang="scss" scoped>

.v-list-item {
  min-height: 0px !important;

  .v-list-item__content {
    padding: 7px 0px !important;
  }
}
</style>
