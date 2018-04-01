<template lang="pug">
div.qute
   h1(class = "f4 bg-near-black white mv0 pv2 ph3" )
   div(class = "pa3 bt" )
     p(class = "f6 f5-ns lh-copy measure mv0" )
        slot
</template>
<script>
import 'tachyons/css/tachyons.css'
export default {
  name: 'qute'
}
</script>
<style  scoped>

</style>
