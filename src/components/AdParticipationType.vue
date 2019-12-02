<template>
  <div class="ad-participation-type" :class="{ 'show': show}">
    <div class="title">
      参与任务方式
    </div>
    <div class="close" @click="$emit('close')">
      <span class="line line-y"></span>
      <span class="line line-x"></span>
    </div>
    <ul class="step-list">
      <li class="step" v-for="(step, index) in steps" :key="index">
        <div class="step-content" v-if="index % 2 === 0">
          <div class="placeholder circle" ><img :src="step.icon"/></div>
          <div class="step-inf">{{step.title}}</div>
        </div>
        <div v-else class="step-arrow"><img :src="arrowPng"/></div>
      </li>
    </ul>
  </div>
</template>

<script>
import renWuPng from '@/assets/renwu@3x.png'
import wxPng from '@/assets/WeChat@3x.png'
import jinbiPng from '@/assets/jinbi@3x.png'
import arrowPng from '@/assets/jiantou.png'

export default {
  name: 'AdParticipationType',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      steps: [
        { icon: renWuPng, title: '点击参与任务' },
        {},
        { icon: wxPng, title: '分享至微信' },
        {},
        { icon: jinbiPng, title: '根据计费规则赚钱佣金' }
      ],
      arrowPng
    }
  }
}
</script>

<style  scoped>
ul li {
  list-style-type: none;
}

.ad-participation-type {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 200;
  width:309px;
  height:160px;
  background:rgba(255,255,255,1);
  border-radius:6px;
  transform: translate(-50%, -53%);
  display: none;
}

.ad-participation-type.show {
  display: block;
}

.ad-participation-type .title {
  font-size:14px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:16px;
  text-align: center;
  padding: 17px 0px;
}

.ad-participation-type .step-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 14px;
  box-sizing: border-box;
}

.step-list .step {
  padding: 12px 0px;
}

.placeholder {
  position: relative;
  height: 30px;
  width: 30px;
  background-color: aqua;
}

.circle {
  border-radius: 50%;
}

.step-content {
  position: relative;
}

.step-inf {
  position: absolute;
  display: inline-block;
  line-height:17px;
  left: 50%;
  bottom: -16px;
  transform: translate(-50%, 100%);
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,34,34,1);
  line-height:17px;
  text-align: center;
  width: 76px;
}

.step-arrow {
  font-size: 14px;
  box-sizing: border-box;
}

.close {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 11px;
  height: 11px;
}

.close .line {
  display: inline-block;
  width: 11px;
  height: 1px;
  background-color: #C0C0C0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.close .line-x {
  transform: rotate(45deg);
}

.close .line-y {
  transform: rotate(-45deg);
}

</style>
