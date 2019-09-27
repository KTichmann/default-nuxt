import {
  boolean,
  number,
  object,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BBannerEx1 from '../components/BBannerEx1/BBannerEx1'
import BCardEx1 from '../components/BCardEx1/BCardEx1'
import BCardEx2 from '../components/BCardEx2/BCardEx2'

storiesOf('Experimental', module)
  .addDecorator(withKnobs)
  .add(
    'BCardEx1',
    () => ({
      components: { BCardEx1 },

      props: {
        elevation: {
          default: number(
            'Elevation',
            '2',
            { range: true, min: 0, max: 24, step: 1 },
            'Style'
          )
        },
        disabled: {
          default: boolean('Disabled', false, 'Style')
        },
        loading: {
          default: boolean('Loading', false, 'Style')
        },
        card: {
          default: object(
            'Content',
            {
              mainImg: '',
              price: '9',
              title: 'Business VoIP',
              subTitle: 'Was £14',
              features: [
                'Unlimited UK calls',
                'Unlimited UK mobile',
                'Unlimited calls to 36 international destinations'
              ],
              footerInfo:
                'Countries included: Spain, Germany, France, Usa, Canada + more',
              footerImg:
                'http://lh3.googleusercontent.com/zdXsf_uqbrRFmo1DItXBfAB5L7zi9WmZBMGH0sHmD0jbXJl9EP00PruNWcprvuZ92GXEEHiwN3x7uWzKN11we52Lab-xlbro=s180-c'
            },
            'Content'
          )
        }
      },

      template: `
    <v-container fluid grid-list-xl>
      <v-layout xs12>
        <v-flex>
          <v-toolbar flat dense>
            <v-toolbar-title>SALE CARDS</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>

      <v-layout xs12>
        <v-flex>
          <BCardEx1 :card="card" :disabled="disabled" :elevation="elevation" :loading="loading"></BCardEx1>
        </v-flex>
      </v-layout>
    </v-container>
  `
    }),
    {
      info: {
        summary: `
        Card with a elevated ribbon.

        Base component:
        \`\`\`html
        <BCardEx1></BCardEx1>
        \`\`\`

        Example usage with data:
        \`\`\`html
        <BCardEx1 :card="card"></BCardEx1>

        Takes an object with the following properties:
        data() {
          return {
            card: {
              price: '0',
              title: 'Title',
              subTitle: 'Sub Title',
              features: ['Feature 1', 'Feature 2', 'Feature 3'],
              moreInfo: 'Countries included: Spain, Germany, France, Usa, Canada + more',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            }
          }
        }
        \`\`\`

        Example usage with props:
        \`\`\`html
        <BCardEx1 :loading="loading"></BCardEx1>
        \`\`\`
      `
      }
    }
  )
  .add(
    'BCardEx2',
    () => ({
      components: { BCardEx2 },

      props: {
        elevation: {
          default: number(
            'Elevation',
            '2',
            { range: true, min: 0, max: 24, step: 1 },
            'Style'
          )
        },
        disabled: {
          default: boolean('Disabled', false, 'Style')
        },
        loading: {
          default: boolean('Loading', false, 'Style')
        },
        card: {
          default: object(
            'Content',
            {
              mainImg: '',
              price: '9',
              title: 'Business VoIP',
              subTitle: 'Was £14',
              features: [
                'Unlimited UK calls',
                'Unlimited UK mobile',
                'Unlimited calls to 36 international destinations'
              ],
              footerInfo:
                'Countries included: Spain, Germany, France, Usa, Canada + more',
              footerImg:
                'http://lh3.googleusercontent.com/zdXsf_uqbrRFmo1DItXBfAB5L7zi9WmZBMGH0sHmD0jbXJl9EP00PruNWcprvuZ92GXEEHiwN3x7uWzKN11we52Lab-xlbro=s180-c'
            },
            'Content'
          )
        }
      },

      template: `
    <v-container fluid grid-list-xl>
      <v-layout xs12>
        <v-flex>
          <v-toolbar flat dense>
            <v-toolbar-title>SALE CARDS</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>

      <v-layout xs12>
        <v-flex>
          <BCardEx2 :card="card" :disabled="disabled" :elevation="elevation" :loading="loading"></BCardEx2>
        </v-flex>
      </v-layout>
    </v-container>
  `
    }),
    {
      info: {
        summary: `
        Card with a elevated ribbon and changing gradient background colour.

        Base component:
        \`\`\`html
        <BCardEx2></BCardEx2>
        \`\`\`

        Example usage with data:
        \`\`\`html
        <BCardEx2 :card="card"></BCardEx2>

        Takes an object with the following properties:
        data() {
          return {
            card: {
              price: '0',
              title: 'Title',
              subTitle: 'Sub Title',
              features: ['Feature 1', 'Feature 2', 'Feature 3'],
              moreInfo: 'Countries included: Spain, Germany, France, Usa, Canada + more',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            }
          }
        }
        \`\`\`

        Example usage with props:
        \`\`\`html
        <BCardEx2 :loading="loading"></BCardEx2>
        \`\`\`
      `
      }
    }
  )
  .add(
    'BannerEx1',
    () => ({
      components: { BBannerEx1 },

      props: {
        text: {
          default: text('Text', 'I am a banner')
        },
        size: {
          default: select(
            'Text size',
            {
              overline: 'overline',
              caption: 'caption',
              body2: 'body-2',
              body1: 'body-1',
              subtitle2: 'subtitle-2',
              subtitle1: 'subtitle-1',
              title: 'title',
              headline: 'headline',
              display1: 'display-1',
              display2: 'display-2',
              display3: 'display-3',
              display4: 'display-4'
            },
            'subtitle1'
          )
        }
      },

      template: `
    <v-container>
      <v-layout>
        <v-flex>
          <BBannerEx1 :textsize="size">{{ text }}</BBannerEx1>
        </v-flex>
      </v-layout>
    </v-container>
  `
    }),
    {
      info: {
        summary: `
      Banner with a changing gradient background colour.

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
