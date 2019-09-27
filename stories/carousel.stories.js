import { array, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BCarouselV1 from '../components/BCarouselV1/BCarouselV1'

storiesOf('Carousels', module)
  .addDecorator(withKnobs)
  .add(
    'BCarouselV1',
    () => ({
      components: { BCarouselV1 },

      props: {
        slides: {
          default: array('Slides', [
            {
              color: 'primary',
              text: 'I am a carousel with text and colour',
              src: ''
            },
            {
              color: 'transparent',
              text: 'I am a carousel with text and image',
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
              color: 'yellow darken-2',
              text: 'I am a carousel with text and colour',
              src: ''
            },
            {
              color: 'transparent',
              text: 'I am a carousel with text and image',
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
              color: 'orange',
              text: 'I am a carousel with text and colour',
              src: ''
            }
          ])
        }
      },

      template: `
    <v-container fluid grid-list-xl>
      <v-layout xs12>
        <v-flex>
          <v-toolbar flat dense>
            <v-toolbar-title>CAROUSELS</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>

      <v-layout xs12>
        <v-flex>
          <BCarouselV1 :slides="slides"></BCarouselV1>
        </v-flex>
      </v-layout>
    </v-container>
    
  `
    }),
    {
      info: {
        summary: `
  
    `
      }
    }
  )
