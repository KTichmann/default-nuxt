import { configure, addDecorator } from "@storybook/vue"
import { vuetify } from "../nuxt.config.js"
import Vuetify from "vuetify"
import Vue from "vue"
import "vuetify/dist/vuetify.css"
import "@mdi/font/css/materialdesignicons.css"

Vue.use(Vuetify)

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

addDecorator(
  () => ({
    vuetify: new Vuetify({
      ...vuetify,
      icons: {
        iconfont: "mdi"
      }
    }),
    template: `
    <v-app>
      <v-content>
        <story/>
      </v-content>
    </v-app>
  `
  }),
  { info: true }
)

configure(loadStories, module)
