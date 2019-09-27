import { storiesOf } from '@storybook/vue'
import BColours from '../components/Welcome/BColours'
import BTypography from '../components/Welcome/BTypography'
import BWelcome from '../components/Welcome/BWelcome'

storiesOf('Styleguide', module)
  .add('Installation', () => ({
    components: { BWelcome },
    template: '<BWelcome/>'
  }))
  .add('Typography', () => ({
    components: { BTypography },
    template: '<BTypography/>'
  }))
  .add('Colour Scheme', () => ({
    components: { BColours },
    template: '<BColours/>'
  }))
  .add('Icons', () => ({
    components: { BWelcome },
    template: '<BWelcome/>'
  }))
