<template>
  <div class="hello">

    <app-fieldset>
      <span style="font-size:14px" slot="legend">
        基本资料
      </span>
      <!-- :style="{'width':'800px'}"  //可控制元素宽度 -->
      <app-items :label-position="labelPosition" label-width="80px" :inline="false">
        <app-items-item label="你好">
          <el-input v-model="msg" placeholder="请输入内容"></el-input>
        </app-items-item>

        <app-items-item label="你好">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </app-items-item>

        <app-items-item label="你好">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </app-items-item>

        <app-items-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </app-items-item>
        <app-items-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </app-items-item>

      </app-items>
    </app-fieldset>

    <el-form ref="form" :model="form" label-width="80px" labelPosition="left">
      <app-fieldset theme="">
        <span style="font-size:14px" slot="legend">
          扩展资料
        </span>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </app-fieldset>
    </el-form>

  </div>
</template>

<script>
import Vue from 'vue'
import items from './Items.vue'
import item from './Item.vue'
import fieldset from './Fieldset.vue'
import 'element-ui/lib/theme-chalk/index.css'

import Element from 'element-ui'
Vue.use(Element, { size: 'small' })

export default {
  name: 'HelloWorld',
  data () {
    return {
      labelPosition: 'left', // top ,left
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  components: {
    'app-items': items,
    'app-items-item': item,
    'app-fieldset': fieldset
  }
}
</script>
