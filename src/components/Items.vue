<template>
  <div class="app-items"  :class="[
    labelPosition ? 'app-items--label-' + labelPosition : '',
    { 'app-items--inline': inline }
  ]">

      <slot></slot>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.app-items--inline .app-items-item,
.app-items--inline .app-items-item__content {
  display: inline-block;
  vertical-align: top;
}
.app-items-item::after,
.app-items-item__content::after {
  clear: both;
}
.app-items--label-left .app-items-item__label {
  text-align: left;
}
.app-items--label-top .app-items-item__label {
  /* float: left; */
  display: inline-block;
  text-align: left;
  padding: 0 0 10px;
}
.app-items--inline .app-items-item {
  margin-right: 10px;
}
.app-items--inline .app-items-item__label {
  /* float: left; */
  display: inline-block;
}
.app-items-item__content .el-input-group,
.app-items-item__label {
  vertical-align: middle;
}
.app-items--inline.app-items--label-top .app-items-item__content {
  display: block;
}
.app-items-item {
  margin-bottom: 22px;
}
.app-items-item::after,
.app-items-item::before {
  display: table;
  content: "";
}
.app-items-item .app-items-item {
  margin-bottom: 0;
}
.app-items-item {
  margin-bottom: 18px;
}

.app-items-item__label {
  line-height: 36px;
}
.app-items-item__label {
  line-height: 32px;
}
.app-items-item__label {
  line-height: 28px;
}

.app-items-item__label {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.app-items-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.app-items-item__content::after,
.app-items-item__content::before {
  display: table;
  content: "";
}

</style>
