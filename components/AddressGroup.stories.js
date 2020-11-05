import { actions } from '@storybook/addon-actions'

export default {
  title: 'Components/Address/Type Group',
}

export const Default = () => ({
  template: '<AddressGroup @address="address"/>',
  methods: actions('address'),
})
