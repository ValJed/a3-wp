<template>
  <div>
    <h3>{{ field.name }}</h3>
    <input v-model="next" type="text">
  </div>
</template>

<script>
import AposInputMixin from 'Modules/@apostrophecms/schema/mixins/AposInputMixin';

export default {
  name: 'AposInputTest',
  mixins: [AposInputMixin],
  mounted() {
    if (this.field.name === '_followed') {
      console.log('=====> "updating data <=====')
      this.value.data = 'tutu'
    }
  },

  watch: {
    followingValues: {
      handler(val, oldVal = {}) {
        if (this.field.name === 'test') {
          console.log('val', val._followed)
          console.log('oldVal._followed', oldVal._followed)
        }
      }
    }
  },
  methods: {
    validate() {
      return false
    },
    /* change(val) { */
    /*   this.next = val */
    /* } */
  }
}
  
</script>

<style lang="scss">

</style>
