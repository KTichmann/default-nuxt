import { storiesOf } from '@storybook/vue'

import BNavbarV1 from '../components/BNavbarV1/BNavbarV1'
import { withKnobs, array } from '@storybook/addon-knobs'

import phonlineIcon from '../assets/Icons/Nav_Phoneline_icon.svg'
import fibreIcon from '../assets/Icons/Nav_Fibre_icon.svg'
import voipIcon from '../assets/Icons/Nav_VoIP_icon.svg'
import websiteIcon from '../assets/Icons/Nav_Websites_icon.svg'
import broadbandIcon from '../assets/Icons/Nav_Broadband_icon.svg'

storiesOf('Navbars', module)
  .addDecorator(withKnobs)
  .add('BNavbarV1', () => ({
    components: { BNavbarV1 },

    props: {
      navbar: {
        default: array(
          'Navbar Items',
          [
            {
              title: 'Products',
              subnav: [
                { title: 'Phoneline', path: '#', icon: phonlineIcon },
                { title: 'Broadband', path: '#', icon: broadbandIcon },
                { title: 'Fibre', path: '#', icon: fibreIcon },
                { title: 'VoIP', path: '#', icon: voipIcon },
                { title: 'Website', path: '#', icon: websiteIcon }
              ]
            },
            {
              title: 'Solutions',
              subnav: [
                { title: 'sub6', path: '#' },
                { title: 'sub7', path: '#' },
                { title: 'sub8', path: '#' }
              ]
            },
            {
              title: 'Customers',
              subnav: [
                { title: 'sub9', path: '#' },
                { title: 'sub10', path: '#' }
              ]
            },
            {
              title: 'Pricing',
              subnav: [
                { title: 'sub11', path: '#' },
                { title: 'sub12', path: '#' },
                { title: 'sub13', path: '#' },
                { title: 'sub14', path: '#' },
                { title: 'sub15', path: '#' },
                { title: 'sub16', path: '#' }
              ]
            },
            { title: 'Resources', to: '#' },
            { title: 'Partners', to: '#' }
          ],
          ''
        )
      }
    },
    template: `
    <BNavbarV1 :navbar="navbar"/>   
  `
  }))
