<style  >
.aui-chat .aui-chat-right .aui-chat-content {
  background-color: #efefef;
}
#search {
  top: auto;
}
.pl {
  background-color: #d6d6d669;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  width: 93vw;
  color: #212121;
}
.card-demo-flex {
  display: flex;
}
.card-demo-flex div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.card-demo-content01 {
  padding: 0px;
  margin: 0px -15px;
}
.aui-list:before {
  background-color: #f5f5f5;
}
</style>
<template>
  <div>
    <van-nav-bar title="危房改造" left-text="返回" right-text="我要上报" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <br/>
    <van-popup v-model="show" position="right" :overlay="false">
      内容
    </van-popup>
    <van-cell-group>
      <van-cell icon="shop" @click="showCell">
        <template slot="title">
          <span class="van-cell-text">曹鹏飞</span>
          <van-tag plain type="danger" class="aui-pull-right" style="    margin-top: 2px;">身份证： 130128199007161811</van-tag>
        </template>

      </van-cell>
      <div v-show="cellshow1">
        <van-cell>
          <div class="card-demo-flex card-demo-content01">
            <div class="vux-1px-r">
              <span>1</span> <br> 人口
            </div>
            <div class="vux-1px-r">
              <span>D4级</span> <br> 危险级别
            </div>
            <div class="vux-1px-r">
              <span>重建</span> <br> 改造方式
            </div>
            <div>
              <span>2016年</span> <br> 改造年度
            </div>
          </div>
        </van-cell>

        <van-cell is-link>
          <template slot="title">
            <span class="van-cell-text">"此房屋始建于1906年，是属于危房"</span>
            <span plain type="danger" class="aui-pull-right">详情</span>
          </template>
        </van-cell>
      </div>
    </van-cell-group>

    <!-- <div class="aui-content">
      <ul class="aui-list aui-list-in ">
        <li class="aui-list-header" style="color:#666; padding-left: 20px;width:90px;">
          2018
        </li>
      </ul>
    </div>  -->
    <van-tag mark style="    margin-bottom: 3px;">2018</van-tag>
    <van-tabs :swipeable='true'>
      <van-tab v-for="(body,index) in hdlBodys" :key="index">
        <div slot="title">
          <template v-if='0'>
            <div class="aui-dot">2018</div>
          </template>

          {{body.createdTime}}
        </div>
        <div class="aui-content">
          <transition name="van-fade">
            <ul class="aui-list aui-media-list">
              <li class="aui-list-item ">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                      <div class="aui-list-item-title">情况描述</div>
                      <div class="aui-list-item-right"></div>
                    </div>
                    <div class="aui-list-item-text aui-ellipsis-2">
                      {{body.body1}}
                    </div>
                  </div>
                </div>
              </li>

              <li class="aui-list-item">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">进度</div>
                    <div class="aui-list-item-text">
                    </div>
                  </div>
                  <div class="aui-progress aui-progress" style="margin:13px 25px 0px -30px">
                    <div class="aui-progress-bar" style="width: 62%;background-color:#f74c31">62%</div>
                  </div>
                </div>
              </li>
              <li class="aui-list-item">
                <div class="aui-list-item-inner">
                  <div class="aui-list-item-title">现场图片</div>
                  <div class="aui-row aui-row-padded">
                    <img v-for="(img,index) in body.imgs" :key="index" :src="img" @click="showImg(index,body.imgs)" style="width:32%; margin: 2px;" />
                  </div>
                </div>
              </li>
              <li class="aui-list-item ">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                      <div class="aui-list-item-title">存在问题</div>
                      <div class="aui-list-item-right"></div>
                    </div>
                    <div class="aui-list-item-text aui-ellipsis-2">
                      {{body.body3}}
                    </div>
                  </div>
                </div>
              </li>
              <li class="aui-list-item ">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                      <div class="aui-list-item-title">整改意见</div>
                      <div class="aui-list-item-right"></div>
                    </div>
                    <div class="aui-list-item-text aui-ellipsis-2 aui-padded-t-5 aui-padded-b-0">

                      <div>

                        <div class="pl">
                          <span style="color:#f74c31!important">章三：</span>{{body.body4}}
                        </div>
                        <div class="pl">
                          <span style="color:#f74c31!important">李四：</span>评论评论
                        </div>
                        <div class="pl ">
                          <span style="color:#f74c31!important">李四：</span>评论评论
                        </div>

                        <!-- <div class="aui-btn aui-btn-info aui-pull-right aui-margin-t-10" @click="showComm">
                        <span class="aui-iconfont aui-icon-edit"></span>填写意见</div> -->
                        <div style="clear:both"></div>

                      </div>

                    </div>

                  </div>

                </div>

              </li>
              <li class="aui-list-item ">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <textarea class="weui-textarea" placeholder="点击填写整改意见" ref="input1" rows="3"></textarea>
                  </div>
                </div>
              </li>
              <li class="aui-list-item ">
                <div class="aui-media-list-item-inner">
                  <div class="aui-list-item-inner">
                    <!-- <button class="aui-btn aui-btn-info aui-btn-block aui-btn-sm" style="border-width:0px;background-color:#f74c31!important">发表意见</button> -->
                    <van-button type="primary" @click="showComm" bottom-action>发表意见</van-button>
                  </div>
                </div>

              </li>

            </ul>
          </transition>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import axios from "axios";
import { ImagePreview } from "vant";
var baseApi = "http://39.105.27.181:8080/bysj";
export default {
  data: function() {
    return {
      show: false,
      isshowComm: "aui-hide",
      cellshow1: true,
      activeNames: "1",
      hdlBodys: [
        {
          body1: `
                2017年，我县农村危房改造工作已全面展开，顺利进行。3月23日组织召开全县精准扶贫建档立卡困家庭住房情况调查工作会议，全面开展了对全县3446户建档立卡贫困户住房安全摸底工作。省厅下达我县第一批农村危房改造任务为429户。
            `,
          body2: `
                    我县及时组织各镇实施，截止目前，全县已动工39户，动工率达到11%，已竣工12户。共完成投资117万元。
                `,
          body3: `
                    1、上半年长期阴雨连绵，以致项目建设施工受阻，进展缓慢。 
                    2、危房户自身积累较少，个别危改户自筹的资金大都是靠借贷来建设，给他们带来新的负担。
                `,
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          body4: ` （一）在精准识别方面。全面整改贫困人口识别中存在的漏评、错评现象，坚决纠正穷人被遗漏、富人戴穷帽问题，以识真贫确保扶真贫。
（二）在精准帮扶方面。全面整改到村到户政策落实不到位、“最后一公里”不通畅问题，以真扶贫确保真脱贫，以帮得实确保退得真，以真帮实扶确保群众满意。坚持目标导向和问题导向,聚焦重点领域和薄弱环节,坚持不懈地在精准施策上出实招。
（三）在精准退出方面。全面整改脱贫退出中虚假脱贫、暂时脱贫和“被脱贫”问题，切实做到脱贫工作务实、脱贫过程扎实、脱贫结果真实，确保贫困退出真实可信、社会认可、群众认账，经得起历史和实践的检验。
   （四）在精准管理方面。全面整改动态管理不及时、不精准、数据不真实等问题，下大功夫摸清贫困人口底数，做到应进则进、应退则退、有进有出、科学管理。
   （五）在资金管理方面。全面整改扶贫资金管理部门多、资金规模大与统筹协调难的矛盾。采取有效措施，防止“钱等项目”“项目等钱”现象发生，进一步提高扶贫资金使用的精准性和实效性。`,
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "12-10"
        },
        {
          body1:
            "按照《淮南市关于报送脱贫攻坚工作存在的突出问题整改方案和整改情况报告的通知》的通知要求，结合我镇前阶段脱贫攻坚工作开展情况，对照我镇脱贫攻坚工作开展实际，深入查摆全镇脱贫攻坚工作中存在的突出问题，现将整改落实情况报告如下：",
          body2: "进度描述撒打算的",
          body3: "存在的问题撒打算",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          body4: ` （一）在精准识别方面。全面整改贫困人口识别中存在的漏评、错评现象，坚决纠正穷人被遗漏、富人戴穷帽问题，以识真贫确保扶真贫。
（二）在精准帮扶方面。全面整改到村到户政策落实不到位、“最后一公里”不通畅问题，以真扶贫确保真脱贫，以帮得实确保退得真，以真帮实扶确保群众满意。坚持目标导向和问题导向,聚焦重点领域和薄弱环节,坚持不懈地在精准施策上出实招。
（三）在精准退出方面。全面整改脱贫退出中虚假脱贫、暂时脱贫和“被脱贫”问题，切实做到脱贫工作务实、脱贫过程扎实、脱贫结果真实，确保贫困退出真实可信、社会认可、群众认账，经得起历史和实践的检验。
   （四）在精准管理方面。全面整改动态管理不及时、不精准、数据不真实等问题，下大功夫摸清贫困人口底数，做到应进则进、应退则退、有进有出、科学管理。
   （五）在资金管理方面。全面整改扶贫资金管理部门多、资金规模大与统筹协调难的矛盾。采取有效措施，防止“钱等项目”“项目等钱”现象发生，进一步提高扶贫资金使用的精准性和实效性。`,
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "01-16"
        },
        {
          body1:
            "在资金管理方面。全面整改扶贫资金管理部门多、资金规模大与统筹协调难的矛盾。采取有效措施，防止“钱等项目”“项目等钱”现象发生，进一步提高扶贫资金使用的精准性和实效性",
          body2: "进度描述",
          body3: "存在的问题",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "12-10"
        },
        {
          body1:
            "3月23日组织召开全县精准扶贫建档立卡困家庭住房情况调查工作会议，全面开展了对全县3446户建档立卡贫困户住房安全摸底工作",
          body2: "进度描述",
          body3: "存在的问题",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "12-10"
        },
        {
          body1:
            "对于默认不继承（inherited 为 no）的属性，你可以查文档，看要覆盖掉的属性初始值（initial value）是什么，然后设置为这个值。比如你这个例子中，left 属性初始值为 auto，你就可以设置 left: auto; right: 0。CSS 中还有一个属性值关键字 initial，可以把任意属性设置为初始值（left: initial，这样不需要去一个个查初始值是什么了）。需要注意的是，IE 不支持这个属性",
          body2: "进度描述",
          body3: "存在的问题",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "12-1"
        },
        {
          body1:
            " APP端需向网页端传递 当前所查贫困户唯一标识，以供双方数据同步。 我方建议同步字段为：贫困户身份证号码",
          body2: "进度描述",
          body3: "存在的问题",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "2-10"
        },
        {
          body1:
            "模型分类代表网页端子模块类别。分别有：收入计算、帮扶措施、医疗支出、家庭产品、危房改造、产品扶贫、基础数据更新、结对帮扶记录、家庭需要。 网页端向APP服务器提交信息时会携带分类id，告知对方该表单内容属于哪种分类",
          body2: "进度描述",
          body3: "存在的问题",
          imgs: [
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440065603,1495663192&fm=27&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4178892193,2478835397&fm=200&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1387262254,615574358&fm=27&gp=0.jpg"
          ],
          user: "曹鹏飞",
          unit: "科右前旗旗委",
          position: "副书记",
          createdTime: "2-10"
        }
      ],
      isactiation: true,
      dilapiatedDatas: [],
      transformLogs: [],
      transformComments: []
    };
  },
  methods: {
    showComm() {
      this.$refs["input1"].focus();
    },
    onClickLeft() {
      this.$router.push("/fenlei");
    },
    onClickRight() {
      this.$router.push("/");
    },
    showCell() {
      this.cellshow1 = !this.cellshow1;
    },
    showImg(index, imgsSrc) {
      ImagePreview(imgsSrc, index);
    },
    getDilapiatedData() {
      let th = this;
      axios
        .post(baseApi + "/dilapiated/getDilapiatedData.do", {
          identity: "111"
        })
        .then(function(response) {
          debugger;
          console.log(response);
          th.dilapiatedDatas = response;
        });
    },
    queryTransformLog() {
      axios
        .post(baseApi + "/dilapiated/queryTransformLog.do", {
          dataId: "1",
          typeCode: "1"
        })
        .then(function(response) {
          this.transformLogs = response;
        });
    },
    queryTransformComment(transformLogId) {
      axios
        .post(baseApi + "/dilapiated/queryTransformComment.do", {
          transformLogId: transformLogId.toString()
        })
        .then(function(response) {
          this.transformComments = response;
        });
    },
    deleteTransformLog(id) {
      axios
        .post(baseApi + "/dilapiated/deleteTransformLog.do", {
          id: id.toString()
        })
        .then(function(response) {
          this.transformComments = response;
        });
    },
    insertTransformComment(dilapitatedId, userId, content) {
      axios
        .post(baseApi + "/dilapiated/deleteTransformLog.do", {
          dilapitatedId: dilapitatedId,
          userId: userId,
          content: content.toString()
        })
        .then(function(response) {
          this.transformComments = response;
        });
    },
    insertTransformLog() {
      let formData = new FormData();
      formData.append("dataId", "1");
      formData.append("type", "1");
      formData.append("poorUser", "1");
      formData.append("title", "asdasd");
      formData.append("body", "121312312");
      formData.append("picPath", "12131231");
      formData.append("existingProblems", "existingProblems");
      formData.append("createdUserId", "1");
      var objData = {};
      formData.forEach((value, key) => {
        objData[key] = value;
      });
      var json = JSON.stringify(objData);
      console.log(json);
      console.log(objData);
      axios
        .post(baseApi + "/dilapiated/insertTransformLog.do", {
          dataId: "1",
          type: "1",
          poorUser: "1",
          title: "asdasd",
          body: "121312312",
          picPath: ["12131231"],
          existingProblems: "existingProblems",
          createdUserId: "1"
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>
