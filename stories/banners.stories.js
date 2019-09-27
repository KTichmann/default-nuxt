import { storiesOf } from "@storybook/vue"
import { withKnobs, text, select } from "@storybook/addon-knobs"

import BBannerV1 from "../components/BBannerV1/BBannerV1"

storiesOf("Banners", module)
  .addDecorator(withKnobs)
  .add(
    "BannerV1",
    () => ({
      components: { BBannerV1 },

      props: {
        text: {
          default: text("Text", "I am a banner")
        },
        size: {
          default: select(
            "Text size",
            {
              overline: "overline",
              caption: "caption",
              body2: "body-2",
              body1: "body-1",
              subtitle2: "subtitle-2",
              subtitle1: "subtitle-1",
              title: "title",
              headline: "headline",
              display1: "display-1",
              display2: "display-2",
              display3: "display-3",
              display4: "display-4"
            },
            "subtitle1"
          )
        }
      },

      template: `
    <v-container>
      <v-layout>
        <v-flex>
          <BBannerV1 :textsize="size">{{ text }}</BBannerV1>
        </v-flex>
      </v-layout>
    </v-container>
  `
    }),
    {
      info: {
        summary: `
      Base component:
      \`\`\`html
      <BBanner></BBanner>

      The BBanner component uses vuetify typography text sizes as a prop.
      https://vuetifyjs.com/en/styles/typography
      \`\`\`

      Example usage with text:
      \`\`\`html
      <BBanner>I am a banner</BBanner>
      \`\`\`

      Example usage with props:
      \`\`\`html
      <BButton :textsize="size"></BButton>
      \`\`\`
    `
      }
    }
  )
