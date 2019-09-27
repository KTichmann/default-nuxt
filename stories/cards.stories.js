import { boolean, number, object, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BCardV1 from '../components/BCardV1/BCardV1'
import BCardV2 from '../components/BCardV2/BCardV2'

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add(
    'BCardV1',
    () => ({
      components: { BCardV1 },

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
          <BCardV1 :card="card" :disabled="disabled" :elevation="elevation" :loading="loading"></BCardV1>
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
        <BCardV1></BCardV1>
        \`\`\`

        Example usage with data:
        \`\`\`html
        <BCardV1 :card="card"></BCardV1>

        Takes an object with the following properties:
        data() {
          return {
            card: {
              price: '0',
              title: 'Title',
              subTitle: 'Sub Title',
              features: ['Feature 1', 'Feature 2', 'Feature 3'],
              moreInfo: 'Countries included: Spain, Germany, France, Usa, Canada + more',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              footerImg: 'http://lh3.googleusercontent.com/zdXsf_uqbrRFmo1DItXBfAB5L7zi9WmZBMGH0sHmD0jbXJl9EP00PruNWcprvuZ92GXEEHiwN3x7uWzKN11we52Lab-xlbro=s180-c'
            }
          }
        }
        \`\`\`

        Example usage with props:
        \`\`\`html
        <BCardV1 :loading="loading"></BCardV1>
        \`\`\`
      `
      }
    }
  )
  .add(
    'BCardV2',
    () => ({
      components: { BCardV2 },

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
              price: '26.95',
              title: 'Business VoIP',
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
          <BCardV2 :card="card" :disabled="disabled" :elevation="elevation" :loading="loading"></BCardV2>
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
        <BCardV2></BCardV2>
        \`\`\`

        Example usage with data:
        \`\`\`html
        <BCardV2 :card="card"></BCardV2>

        Takes an object with the following properties:
        data() {
          return {
            card: {
              price: '0',
              title: 'Title',
              subTitle: 'Sub Title',
              features: ['Feature 1', 'Feature 2', 'Feature 3'],
              moreInfo: 'Countries included: Spain, Germany, France, Usa, Canada + more',
              img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
              footerImg: 'http://lh3.googleusercontent.com/zdXsf_uqbrRFmo1DItXBfAB5L7zi9WmZBMGH0sHmD0jbXJl9EP00PruNWcprvuZ92GXEEHiwN3x7uWzKN11we52Lab-xlbro=s180-c'
            }
          }
        }
        \`\`\`

        Example usage with props:
        \`\`\`html
        <BCardV2 :loading="loading"></BCardV2>
        \`\`\`
      `
      }
    }
  )
