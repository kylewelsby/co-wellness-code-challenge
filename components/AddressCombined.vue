<template>
  <div class="relative">
    <AddressGroup
      v-for="address in addresses"
      :key="address.place"
      class="mb-4"
    />
    <button
      class="absolute bottom-0 right-0 -mb-2 h-5 w-5 flex items-center justify-center rounded-full bg-white border-none outline-none"
      @click="addNew()"
    >
      ➕
    </button>
  </div>
</template>
<script>
import AddressGroup from './AddressGroup'
export default {
  components: {
    AddressGroup,
  },
  data() {
    return {
      addresses: [{}],
    }
  },
  methods: {
    addNew() {
      this.addresses.push({})
    },
  },
}
</script>
