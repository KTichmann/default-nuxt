import { storiesOf } from '@storybook/vue'
import AppBar from '../components/AppBar'

storiesOf('AppBar', module).add('with vuetify', () => ({
  components: { AppBar },
  template: '<AppBar />'
}))
