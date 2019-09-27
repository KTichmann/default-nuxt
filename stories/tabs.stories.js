import { array, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BTabsV1 from '../components/BTabsV1/BTabsV1'

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('BTabsV1', () => ({
    components: { BTabsV1 },

    props: {
      tabs: {
        default: array(
          'Tabs',
          [
            {
              title: 'Tab 1',
              text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur?',
              icon: ''
            },

            {
              title: 'Tab 2',
              text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur?',
              icon: ''
            },

            {
              title: 'Tab 3',
              text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum a natus suscipit officia velit rerum sapiente cumque pariatur magnam laboriosam, praesentium perspiciatis voluptas fugit? Obcaecati beatae accusamus error pariatur?',
              icon: ''
            }
          ],
          ''
        )
      }
    },

    template: `
    <v-container>
      <v-layout xs12>
        <v-flex>
          <v-toolbar flat dense>
            <v-toolbar-title>TABS</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <BTabsV1 :tabs="tabs"/>
        </v-flex>
      </v-layout>
    </v-container>
  `
  }))
