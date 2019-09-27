import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  number,
  boolean,
  color,
  select
} from '@storybook/addon-knobs'

import BButton from '../components/BButton/BButton'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'BButton',
    () => ({
      components: { BButton },

      props: {
        elevation: {
          default: number(
            'Elevation',
            '0',
            { range: true, min: 0, max: 24, step: 1 },
            ''
          )
        },
        disabled: {
          default: boolean('Disabled', true)
        },
        loading: {
          default: boolean('Loading', true)
        },
        text: {
          default: text('Text', 'Button')
        },
        colorPrimary: {
          default: color('Primary Color', '#1f8ceb')
        },
        colorSecondary: {
          default: color('Secondary Color', '#19d5b2')
        }
      },

      methods: {
        log: action('Click event listener has fired')
      },

      template: `
    <v-container fluid grid-list-xl>
      <v-layout xs12>
        <v-flex>
          <v-toolbar flat dense>
            <v-toolbar-title>BUTTONS</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorPrimary" :loading="loading" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorPrimary" :disabled="disabled" @click.native="log">{{ text }}</BButton></v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorSecondary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorSecondary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorSecondary" :loading="loading"  @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" :elevation="elevation" :color="colorSecondary" :disabled="disabled" @click.native="log">{{ text }}</BButton></v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm3 md3><BButton outlined :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton outlined :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton outlined :elevation="elevation" :color="colorPrimary" :loading="loading" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton outlined :elevation="elevation" :color="colorPrimary" :disabled="disabled" @click.native="log">{{ text }}</BButton></v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm3 md3><BButton class="white--text" rounded :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" rounded :elevation="elevation" :color="colorPrimary" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" rounded :elevation="elevation" :color="colorPrimary" :loading="loading" @click.native="log">{{ text }}</BButton></v-flex>
        <v-flex xs12 sm3 md3><BButton class="white--text" rounded :elevation="elevation" :color="colorPrimary" :disabled="disabled" @click.native="log">{{ text }}</BButton></v-flex>
      </v-layout>
    </v-container>
  `
    }),
    {
      info: {
        summary: `
        Base component:
        \`\`\`html
        <BButton></BButton>
        \`\`\`

        Example usage with text:
        \`\`\`html
        <BButton>Button</BButton>
        \`\`\`

        Example usage with props:
        \`\`\`html
        <BButton :loading="loading"></BButton>
        \`\`\`
      `
      }
    }
  )
