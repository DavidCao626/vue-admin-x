<template>
  <div class="app-customltem" >

  </div>
</template>

<script>
export default {
  name: 'app-items',
  componentName: 'app-items',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: String,
    label: {
      type: String,
      default: ''
    },
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
