<template>
  <div>
     <van-nav-bar title="危房改造情况上报" left-text="返回"  left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <form>
      <!-- <div class="weui-cells__title">提交个人信息</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">姓名</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input"  ref="userName" pattern="[0-9]*" placeholder="请输入你的姓名" />
          </div>
        </div>
        <div class="weui-cell weui-cell_select weui-cell_select-before">
          <div class="weui-cell__hd">
            <select class="weui-select" name="select2">
              <option value="1">+86</option>
              <option value="2">+80</option>
              <option value="3">+84</option>
              <option value="4">+87</option>
            </select>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="number"  ref="userPass"  pattern="[0-9]*" placeholder="请输入号码">
          </div>
        </div>
        <div class="weui-cell weui-cell_select weui-cell_select-after">
          <div class="weui-cell__hd">
            <label for="" class="weui-label"  >所在地</label>
          </div>
          <div class="weui-cell__bd">
            <select class="weui-select" ref="sex">
              <option value="内蒙古">内蒙古</option>
              <option value="北京">北京</option>
              <option value="上海">上海</option>
            </select>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label for="" class="weui-label">日期</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="date"  ref="birthday" />
          </div>
        </div>

      </div>-->
      <div class="weui-cells__title">情况描述</div>
      <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>

                </div>
            </div>
        </div>
       <div class="weui-cells__title">进度描述</div>
      <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>

                </div>
            </div>
        </div>
       <div class="weui-cells__title">存在问题</div>
      <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>

                </div>
            </div>
        </div>
      <div class="weui-cells__title">图片上传</div>
      <div class="weui-cell">
        <input type="hidden" name="headPic" ref="pic"/>
        <uploader url="http://39.105.27.181:8080/bysj/test/uploadpic.do" @updataImgIng="upload" @onSuccess="onSuccess"></uploader>
      </div>

      <div class="weui-btn-area">
        <button class="weui-btn weui-btn_primary" style="background-color:#03a9f4"  id="showTooltips" @click="submit($event)">提交</button>
      </div>
    </form>
    <br/> <br/> <br/>
    <div class="page preview js_show">
    <div class="page__hd">
        <p class="page__desc"> &nbsp;&nbsp;</p>
    </div>
    <div class="page__bd">
       <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">提交结果预览（读取后台数据库）:</div>
            <div class="weui-panel__bd">

                 <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(item,key) in datas" :key="key">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src="item.headPic" :alt="item.userName">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.userName}} &nbsp;- &nbsp; <small>{{item.userPass}}</small></h4>
                        <p class="weui-media-box__desc">{{item.sex}}-{{item.birthday}}</p>
                    </div>
                </a>

            </div>

        </div>
    </div>
</div>
 <br/>
  </div>

</template>

<script>
import uploader from './uploader'
import { mapGetters } from 'vuex'
import 'weui'
import weui from 'weui.js'
var loading

export default {
  components: { uploader },
  data () {
    return {
      imgs: [],
      datas: []
    }
  },
  computed: {
    ...mapGetters(['imgPaths', 'imgStatus'])
  },
  methods: {
    onClickLeft () {
      this.$router.push('/weifang')
    },
    onClickRight () {
      this.$router.push('/')
    },
    onSuccess (body) {
      this.$refs.pic.value = body
      loading.hide()
      weui.toast('上传成功', 2000)
    },
    upload () {
      loading = weui.loading('正在上传...')
      this.$store.commit('set_img_status', 'uploading')
    },
    submit (event) {
      event.preventDefault()
      loading = weui.loading('正在保存...')
      let formData = new FormData()
      formData.append('userName', this.$refs.userName.value)
      formData.append('userPass', this.$refs.userPass.value)
      formData.append('sex', this.$refs.sex.value)
      formData.append('birthday', this.$refs.birthday.value)
      formData.append('headPic', this.$refs.pic.value)

      // 新建请求
      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://39.105.27.181:8080/bysj/test/submit.do', true)
      xhr.send(formData)
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 304) {
          let responseText = JSON.parse(xhr.responseText)

          if (responseText.message === 'success!!!') {
            loading.hide()
            this.$router.push({path: '/ok'})
          }
        } else {
          weui.alert(`${xhr.status} 网络请求错误!`)
        }
      }
    }
  },
  watch: {
    imgStatus () {
      if (this.imgStatus === 'finished') {
      }
    }
  },
  destoryed () {
    this.imgs = []
  },
  mounted () {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://39.105.27.181:8080/bysj/test/getData.do', true)
    xhr.send(null)
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 304) {
        let responseText = JSON.parse(xhr.responseText)
        console.log('response: ', responseText)
        if (responseText.message === 'success') {
          this.datas = responseText.body
        } else {
          // weui.alert('参数错误')
          loading.hide()
        }
      } else {
        weui.alert(`${xhr.status} 网络请求错误!`)
      }
    }
  }

}
</script>
<style scoped>
.btn {
  width: 100%;
  height: 3em;
  background-color: green;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
