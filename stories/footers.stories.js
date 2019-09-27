import { array, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BFooterV1 from '../components/BFooterV1/BFooterV1'

storiesOf('Footers', module)
  .addDecorator(withKnobs)
  .add(
    'BFooterV1',
    () => ({
      components: { BFooterV1 },

      props: {
        footerIcons: {
          default: array('Footer icons', [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-youtube',
            'mdi-pinterest',
            'mdi-instagram'
          ])
        },
        footerNav: {
          default: array('Footer Items', [
            {
              title: 'Products',
              items: [
                { title: 'VoIP', to: '#' },
                { title: 'Business broadband & fibre', to: '#' },
                { title: 'Domain & emails', to: '#' },
                { title: 'Website design', to: '#' },
                { title: 'SEO & Google Ads', to: '#' },
                { title: 'Pricing', to: '#' }
              ]
            },
            {
              title: 'Solutions',
              items: [
                { title: 'Mobile workers', to: '#' },
                { title: 'Start-ups', to: '#' },
                { title: 'SMEs', to: '#' }
              ]
            },
            {
              title: 'Customers',
              items: [
                { title: 'Reviews', to: '#' },
                { title: 'Help', to: '#' },
                { title: 'How to return my router', to: '#' },
                { title: 'Website clients', to: '#' },
                { title: 'SEO clients', to: '#' },
                { title: 'SEO case studies', to: '#' }
              ]
            },
            {
              title: 'About',
              items: [
                { title: 'Company', to: '#' },
                { title: 'Partners', to: '#' },
                { title: 'Blog', to: '#' },
                { title: 'Contact', to: '#' },
                { title: 'Terms & conditions', to: '#' },
                { title: 'Privacy policy', to: '#' },
                { title: 'Cookie policy', to: '#' }
              ]
            }
          ])
        }
      },

      template: `
    <BFooterV1 :footerNav="footerNav" :footerIcons="footerIcons"></BFooterV1>
  `
    }),
    {
      info: {
        summary: `
  
    `
      }
    }
  )
