<template>
    <div class="page">
      <div class="bg">
        <img class="bg-img" :src="adBgImg" alt="">
        <div class="acc-banner">
          <div class="acc-item">
            <span class="acc-label">账号余额(元)</span>
            <span class="acc-amount">{{amount}}</span>
            <button class="acc-castout" >提现</button>
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
        <AdNav :items="['正在发布', '已参与']" @selected="handlerNavChange"></AdNav>
        <ul v-if="activedNavIndex !== 0" class="ad-list scrollbar-hidden">
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
          <AdTaskItem :item="item"></AdTaskItem>
        </ul>
        <ul v-else class="ad-list ad-participated-list scrollbar-hidden">
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
          <AdParticipatedTaskItem :item="item"></AdParticipatedTaskItem>
        </ul>
      </div>
      <AdMask :show="showMask"></AdMask>
      <AdParticipationType :show='showParticipationTypeModal' @close='handlerClose'> </AdParticipationType>
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

export default {
  name: 'AdTask',
  components: {
    AdNav,
    AdTaskItem,
    AdMask,
    AdParticipationType,
    AdParticipatedTaskItem
  },
  data: function () {
    return {
      adBgImg,
      avatar,
      accCastout,
      remark: '青春献给小酒桌ff分解附件二覅姐二ffffffffffffffffffffffffffffefefeffefe',
      amount: 49862.22,
      taskOpers: [],
      item: {
        advertiseId: 1,
        title: '1纷纷 纷纷金额飞机飞机i而非姐夫姐夫二级分解金额iejeifjeif titelfefefefefe',
        unitPrice: '0.00',
        context: '123',
        billingString: '指分享出去的任务中链接被点击的次数来计算佣金',
        billingType: '计费方式：按点击计费',
        releaseTime: '2019-09-23 16:15:31',
        link: ''
      },
      item1: {
        advertiseId: 1,
        title: '机i而非姐夫姐夫二级分解金额iejeifjeif titelfefefefefe',
        unitPrice: '0.00',
        context: '123',
        billingString: '指分享出去的任务中链接被点击的次数来计算佣金',
        billingType: '计费方式：按点击计费',
        releaseTime: '2019-09-23 16:15:31',
        link: ''
      },
      activedNavIndex: 0,
      showMask: false,
      showParticipationTypeModal: false
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    selected: function () {

    },
    handlerNavChange: function (index) {
      console.log(index) // 拉取数据
      this.activedNavIndex = index
    },
    handlerClose: function () {
      this.showParticipationTypeModal = false
      this.showMask = false
    },
    handlerParticipationType: function () {
      this.showMask = true
      this.showParticipationTypeModal = true
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
  vertical-align: middle;
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

</style>
