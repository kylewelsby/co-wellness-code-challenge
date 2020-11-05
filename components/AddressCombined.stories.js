import { actions } from '@storybook/addon-actions'

export default {
  title: 'Components/Address/Combined',
}

export const Default = () => ({
  template: '<AddressCombined @form="form"/>',
  methods: actions('form'),
})
