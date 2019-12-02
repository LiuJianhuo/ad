<template>
  <li class="ad-item">
    <div class="row ad-item__title">
      {{ item.title }}
    </div>
    <div class="row">
      <div class="ad-item__billing-type">
        {{ item.billingType }}
      </div>
      <div class="ad-item__status">状态：{{ item.unitPrice }}</div>
    </div>
    <div class="row">
      <div class="ad-item__unit-price">单价：{{ item.unitPrice }}</div>
      <div class="ad-item__expect-price">预计收入：{{ item.expectPrice }}</div>
    </div>
    <div class="row ad-operation-row">
      <div class="ad-item__release-time">发布时间: {{ item.releaseTime }}</div>
      <div class="ad-item__operater">
        <!-- <a class="ad-item__operater-btn look-detail">查看详情</a> -->
        <router-link to="/addetail" class="ad-item__operater-btn look-detail">查看详情</router-link>
      </div>
    </div>
  </li>
</template>

<script>

export default {
  name: 'AdParticipatedTaskItem',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      cundex: 0,
      activedIndex: 0
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
a {
  text-decoration: none;
}

.ad-item {
  display: block;
  padding: 3px 5px;
  box-sizing: border-box;
  width:351px;
  height:140px;
  background:rgba(255,255,255,1);
  border-radius:6px;
  margin-top: 8px;
  padding-bottom: 0px;
  box-shadow:0px -1px 6px 0px rgba(0,0,0,0.05);
  box-sizing: border-box;
  padding: 12px 8px;
}

.ad-item .ad-item__title {
  height:40px;
  font-size:14px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(34,34,34,1);
  line-height:20px;
}

.ad-item__billing-type, .ad-item__status, .ad-item__unit-price, .ad-item__expect-price {
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
  margin-bottom: 8px;
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
}

.ad-item__operater-btn .look-detail {
  margin-right: 0px;
}

.ad-operation-row {
  padding-bottom: 0px;
  padding: 2px 0px;
}

.row.ad-operation-row {
  margin-bottom: 0px;
  padding: 8px 0px;
}

.ad-item__status, .ad-item__expect-price {
  margin-left: 20px;
}
</style>
