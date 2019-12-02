<template>
  <li class="ad-item">
    <div class="row ad-item__title">
      {{ item.title }}
    </div>
    <div class="row" style="height: 20px">
      <div class="ad-item__billing-type">
        计费方式：{{ billingTypeName }}
      </div>
      <Tooltip :content="item.billingString" v-model="show" class="" >
        <div class="ad-item__billing-tip tip-btn" @click="hanlderTip">
          <img :src="questionIcon" id="btn" class="ad-item__billing-tip ad-item__tip-icon" alt=""/>
        </div>
      </Tooltip>
      <div class="ad-item__unit-price">单价：￥{{ item.unitPrice }}</div>
    </div>
    <div class="row ad-operation-row">
      <div class="ad-item__release-time">发布时间: {{ item.releaseTime }}</div>
      <div class="ad-item__operater">
        <button class="ad-item__operater-btn look-detail" @click="handleLookDetail">查看详情</button>
        <!-- <router-link :to="item.link" class="ad-item__operater-btn look-detail">查看详情</router-link> -->
        <a class="ad-item__operater-btn attend-task" @click="handleAttendTask(item)">参与任务</a>
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
      questionIcon,
      showTip: false,
      show: false
    }
  },
  computed: {
    billingTypeName () {
      return this.billingType === 0 ? 'CPM按展示计费' : 'CPC按点击计费'
    }
  },
  methods: {
    handleAttendTask: function (item) {
      this.$emit('participateInAdTask', item) // 参与任务
    },
    hanlderTip: function (e) {
      console.log(e)
      let b = this.$el.querySelector('#tooltip')
      console.log(b.classList.add('show'))
    },
    handleLookDetail () {
      window.location.href = this.item.link
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
  margin-bottom: 8px;
}

.ad-item__billing-tip {
  padding: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-item__billing-tip .tip-btn, .ad-item__tip-icon {
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
  text-decoration: none;
  outline: none;
}

.ad-item__operater-btn.attend-task {
  margin-right: 0px;
}

.row.ad-operation-row {
  margin-bottom: 0px;
  padding: 8px 0px;
}
</style>
