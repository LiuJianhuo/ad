<template>
    <div class="page">
      <div class="bg">
        <img class="bg-img" :src="adBgImg" alt="">
        <div class="acc-banner">
          <div class="acc-item">
            <span class="acc-label">账号余额(元)</span>
            <span class="acc-amount">{{amount}}</span>
            <button class="acc-castout" @click="withDraw">提现</button>
          </div>
        </div>
      </div>
      <div class="front" style="position:absolute">
        <mt-header title="广告任务">
          <mt-button icon="back" @click.native="goBack" slot="left"></mt-button>
        </mt-header>
        <div class="row-wrap">
            <div class="avatar circle">
              <img class="" :src="avatar"/>
            </div>
            <span class="remark">{{remark}}</span>
            <span class="participation-mode"><span class="text" @click="handlerParticipationType">参与方式</span></span>
        </div>
      </div>
      <div class="pg-body">
        <AdNav :items="['正在发布', '已参与']" @selected="handlerTabChange"></AdNav>
        <mt-loadmore :top-method="loadTop" ref="loadmore" :distanceIndex="1" :topDistance="30">
          <mt-tab-container v-model="activedTabContainer">
            <ul class="ad-list scrollbar-hidden" id="deliveringAd">
              <AdTaskItem v-for="item in adList" :key="item.advertiseId" :item='item' @participateInAdTask='handlerParcipateInTask'></AdTaskItem>
            </ul>
            <mt-tab-container-item id="participatedAd">
              <ul class="ad-list ad-participated-list scrollbar-hidden" id="participatedAd">
                <AdParticipatedTaskItem v-for="item in joinedAdList" :key="item.advertiseId" :item='item'></AdParticipatedTaskItem>
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>
          <div slot="top" class="mint-loadmore-top">
            <mt-spinner type="fading-circle"></mt-spinner>
          </div>
        </mt-loadmore>
      </div>
      <AdMask :show="showMask"></AdMask>
      <AdParticipationType :show='showParticipationTypeModal' @close='handlerClose'> </AdParticipationType>
      <AdSharePopup v-model="showSharePopup"> </AdSharePopup>
    </div>
</template>

<script>
import avatar from '@/assets/logo.png'
import adBgImg from '@/assets/wd_bg.png'
import accCastout from '@/assets/acc_castout.png'
import AdNav from '@/components/AdNav.vue'
import AdTaskItem from '@/components/AdTaskItem.vue'
import AdMask from '@/components/AdMask.vue'
import AdParticipationType from '@/components/AdParticipationType.vue'
import AdParticipatedTaskItem from '@/components/AdParticipatedTaskItem.vue'
import AdSharePopup from '@/components/AdSharePopup.vue'

export default {
  name: 'AdTask',
  components: {
    AdNav,
    AdTaskItem,
    AdMask,
    AdParticipationType,
    AdParticipatedTaskItem,
    AdSharePopup
  },
  data: function () {
    return {
      adBgImg,
      avatar,
      accCastout,
      remark: '青春献给小酒桌ff分解附件二覅姐二ffffffffffffffffffffffffffffefefeffefe',
      amount: 49862.22,
      taskOpers: [],
      adList: [],
      joinedAdList: [],
      activedNavIndex: 0,
      showMask: false,
      showParticipationTypeModal: false,
      showSharePopup: false,
      s: true,
      activedTabContainer: 'deliveringAd'
    }
  },
  created () {
    this.getAdList()
    this.getJoinedAdList()
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    selected: function () {
      // fefef
    },
    handlerTabChange: function (index) {
      console.log(index) // 拉取数据
      this.activedTabContainer = index === 0 ? 'deliveringAd' : 'participatedAd'
    },
    handlerClose: function () {
      this.showParticipationTypeModal = false
      this.showMask = false
    },
    handlerParticipationType: function () { // 参与方式
      this.showMask = true
      this.showParticipationTypeModal = true
    },
    handlerParcipateInTask: function () {
      this.showSharePopup = true
    },
    getAdList: function () {
      this.$axios({
        method: 'post',
        url: 'api/advertise/list',
        data: {
        }
      }).then(res => {
        const data = res.data
        if (data.code === 200 && data.success === true) {
          const content = data.content
          if (content) {
            this.adList = content.list
          }
        }
      }).catch(error => {
        console.log(error)
      })
    },
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
      if (this.activedTabContainer === 'deliveringAd') {
        this.getAdList()
        this.$el.querySelector('#deliveringAd').scrollTop = 0
      } else {
        this.getJoinedAdList()
        this.$el.querySelector('#participatedAd').scrollTop = 0
      }
    },
    withDraw () {
      window.location.href = 'https:apps.apple.com/cn/app/%E8%9C%9C%E8%9C%82%E5%97%A1%E5%97%A1/id1477434055'
    },
    getJoinedAdList: function () {
      // api/advertise/join
      this.$axios({
        method: 'post',
        url: 'api/advertise/join',
        data: {
        }
      }).then(res => {
        const data = res.data
        if (data.code === 200 && data.success === true) {
          const content = data.content
          if (content) {
            this.joinedAdList = content.list
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style  scoped>
.page {
  position: relative;
  width: 100%;
  background-color: #3D72E2;
  height: 100vh;
  background:rgba(245,245,245,1);
  box-sizing: border-box;
  overflow: hidden;
}

.front {
  position: absolute;
  width: 100%;
  top: 0px;
}

.mint-header {
  background:rgba(61,114,226,1);
  height: 42px;
  font-size:18px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:25px;
}

.circle {
  border-radius: 50%;
}

.bg {
  position: relative;
  width: 100%;
  height: 163px;
}

.bg-img {
  width: 100%;
  height: 163px;
}

.row-wrap {
  display: flex;
  padding: 9px;
  align-items: center;
  background:rgba(61,114,226,0);
}

.avatar {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  background: #C0C4CC;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.avatar img {
  display: block;
  /* vertical-align: middle; */
  height: 100%;
}

.remark {
  display: inline-block;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:16px;
  font-size: 16px;
  margin-left: 8px;
  max-width: 45%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.participation-mode {
  position: absolute;
  right: 0px;
  display: flex;
  width:76px;
  height:26px;
  background:rgba(255,255,255, .4499);
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  align-items: center;
}

.participation-mode .text {
  height: 20px;
  font-size: 14px;
  padding-left: 14px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:20px;
}

.pg-body {
  position: absolute;
  top: 195px;
  width: 100%;
  box-sizing: border-box;
  padding:0px 12px;
  align-items: center;
  height: cacl(100vh - 195px);
  height: calc(100vh - 195px);
}

.pg-body .ad-list {
  height: calc(100vh - 195px - 60px);
  box-sizing: border-box;
  overflow: auto;
}

.acc-banner {
  position: absolute;
  width:100%;
  height:58px;
  background:rgba(255,255,255,1);
  border-radius:6px;
  display: flex;
  z-index: 1px;
  align-items: center;
  /* box-shadow:0px -1px 6px 0px rgba(0,0,0,0.05); */
  box-shadow: 0px 0.6px 2.16px rgba(0,0,0,0.08);
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 351px;
}

.acc-banner .acc-item {
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: 100%;
}

.acc-item .acc-label {
  display: inline-block;
  width:80px;
  height:16px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,34,34,1);
  line-height:16px;
}

.acc-item .acc-amount {
  width:107px;
  height:20px;
  font-size:24px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,27,27,1);
  line-height:20px;
}

.acc-item .acc-castout {
  display: inline-block;
  font-size:14px;
  padding: 10px 36px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:12px;
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background: linear-gradient(top, #82a9fb, #4276e4);
  border-radius: 16px;
}

ul {
  display: block;
  list-style: none;
}

ul li {
  list-style-type: none;
}

.pg-body .ad-list {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling:touch;
}

.scrollbar-hidden::-webkit-scrollbar{
  background-color: rgba(red, green, blue, 0);
  display: none;
}

.mint-loadmore-top {
  display: flex;
  justify-content: center;
}
</style>
