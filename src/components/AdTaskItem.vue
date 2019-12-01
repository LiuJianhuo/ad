<template>
  <li class="ad-item">
    <div class="row ad-item__title">
      {{ item.title }}
    </div>
    <div class="row">
      <div class="ad-item__billing-type">
        {{ item.billingType }}
      </div>
      <Tooltip content="item.fefefef" :isShow="false">
        <div class="ad-item__billing-tip">
          <img :src="questionIcon" class="ad-item__tip-icon" alt=""><!-- <div class="ad-item__tip-icon circle"></div> -->
        </div>
      </Tooltip>
      <div class="ad-item__unit-price">单价：{{ item.unitPrice }}</div>
    </div>
    <div class="row ad-operation-row">
      <div class="ad-item__release-time">发布时间: {{ item.releaseTime }}</div>
      <div class="ad-item__operater">
        <a class="ad-item__operater-btn look-detail">查看详情</a>
        <a class="ad-item__operater-btn attend-task">参与任务</a>
      </div>
    </div>
  </li>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue'
import questionIcon from '@/assets/question_icon.png'

export default {
  name: 'AdTaskItem',
  components: {
    Tooltip
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      cundex: 0,
      activedIndex: 0,
      questionIcon
    }
  },
  methods: {
    changeItem: function (index) {
      if (this.activedIndex === index) return
      this.activedIndex = index
      this.$emit('selected', index)
    }
  }
}
</script>

<style  scoped>
.ad-item {
  display: block;
  padding: 12px 8px;
  box-sizing: border-box;
  width:351px;
  height:123px;
  background:rgba(255,255,255,1);
  border-radius:6px;
  margin-top: 8px;
  padding-bottom: 0px;
  box-shadow:0px -1px 6px 0px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.ad-item .ad-item__title {
  height:40px;
  font-size:14px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:20px;
}

.ad-item__billing-type, .ad-item__unit-price {
  display: inline-block;
  height:12px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:12px;
}

.ad-item .row {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}

.ad-item__billing-tip {
  padding: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-item__tip-icon {
  display: inline-block;
  width:12px;
  height:12px;
  /* background:rgba(61,114,226,1); */
}

.ad-item__release-time {
  height:12px;
  font-size:10px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,34,34,1);
  line-height:12px;
}

.ad-item__operater {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.ad-item__operater-btn {
  position: relative;
  width:70px;
  height:24px;
  background:rgba(255,255,255,1);
  border-radius:12px;
  border:1px solid rgba(61,114,226,1);
  font-size:12px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(61,114,226,1);
  line-height:12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.ad-item__operater-btn .look-detail {
  margin-right: 0px;
}

.ad-operation-row {
  height: 25px;
  padding: 8px 0px;
}
</style>
