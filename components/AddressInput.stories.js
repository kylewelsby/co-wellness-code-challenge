import { actions } from '@storybook/addon-actions'

export default {
  title: 'Components/Address/Autocomplete',
}

export const Default = () => ({
  template: '<AddressInput @place="place"/>',
  methods: actions('place'),
})
