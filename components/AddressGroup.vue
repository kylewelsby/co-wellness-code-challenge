<template>
  <div class="flex flex-row">
    <select
      v-model="selectedType"
      class="border-b-2 border-gray-400 focus-within:border-teal-500 mr-2 outline-none"
    >
      <option v-for="type in types" :key="type">{{ type }}</option>
    </select>
    <AddressInput class="flex-grow" @place="onPlace" />
  </div>
</template>
<script>
import AddressInput from './AddressInput'
export default {
  components: {
    AddressInput,
  },
  data() {
    return {
      selectedType: 'Residential',
      types: ['Residential', 'Domicile', 'Legal', 'Operational'],
    }
  },
  methods: {
    onPlace(place) {
      this.$emit('address', {
        type: this.selectedType,
        place,
      })
    },
  },
}
</script>
