<template>
<div>12</div>
</template>
<script>
import translate from 'google-translate-api'

translate('请问如何调用谷歌翻译API', {to: 'mn'}).then(res => {
  console.log(res.text)
  // => I speak English
  console.log(res.from.language.iso)
  // => nl
}).catch(err => {
  console.error(err)
})

export default {

}
</script>

<style scoped>

</style>
