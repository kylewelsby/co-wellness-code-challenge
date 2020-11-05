<template>
  <div class="relative border-b-2 border-gray-400 focus-within:border-teal-500">
    <label
      class="absolute text-gray-800 uppercase bottom-0 right-0 mr-8 -mb-3 bg-white px-2"
    >
      Address
    </label>
    <input
      ref="addressSearch"
      type="search"
      placeholder="Sport interest"
      class="px-4 py-2 w-full outline-none"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loaded: false,
      key: process.env.NUXT_ENV_GOOGLE_MAPS_KEY,
    }
  },
  mounted() {
    window.VueGoogleMapsLoaded = this.setLoaded.bind(this)
    this.loadGoogleMaps()
  },
  beforeDestroy() {
    this.autocomplete.unbindAll()
  },
  methods: {
    loadGoogleMaps() {
      if (!window.google || !window.google.maps) {
        const script = document.createElement('SCRIPT')
        const url = new URL('https://maps.googleapis.com/maps/api/js')
        url.searchParams.set('key', process.env.NUXT_ENV_GOOGLE_MAPS_KEY)
        url.searchParams.set('libraries', 'places')
        url.searchParams.set('callback', 'VueGoogleMapsLoaded')
        script.setAttribute('src', url)
        script.setAttribute('async', '')
        script.setAttribute('defer', '')
        document.body.appendChild(script)
      } else {
        this.setLoaded()
      }
    },
    addListener() {
      this.autocomplete = new window.google.maps.places.Autocomplete(
        this.$refs.addressSearch,
        {
          types: ['establishment'],
        }
      )
      this.autocomplete.addListener('place_changed', (p) => {
        const place = this.autocomplete.getPlace()
        this.$emit('place', place)
      })
    },
    setLoaded() {
      this.loaded = true
      this.addListener()
    },
  },
}
</script>
