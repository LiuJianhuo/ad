<template>
  <mt-popup class="popup" v-model="currentValue" position="bottom">
    <div class="popup-hd">
      <span class="popup-title">分享</span>
    </div>
    <div class="popup-bd">
      <div class="share-operate-wrap">
        <div class="icon-wrap">
          <img class="share-operate-icon" :src="wxPng" alt="">
        </div>
        <span class="share-operate-name">微信</span>
      </div>
      <div class="share-operate-wrap">
        <div class="icon-wrap">
          <img class="share-operate-icon" :src="pyqPng" alt="">
        </div>
        <span class="share-operate-name">朋友圈</span>
      </div>
    </div>
  </mt-popup>
</template>

<script>
import wxPng from '@/assets/share_wenxin_icon.png'
import pyqPng from '@/assets/share_pyq_icon.png'

export default {
  name: 'AdSharePopup',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      wxPng,
      pyqPng,
      currentValue: false
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  }
}
</script>

<style  scoped>

.popup {
  width: 100%;
  border-radius:6px 6px 0px 0px;
}

.popup-hd {
  position: relative;
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-title {
  height:18px;
  font-size:18px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,34,34,1);
  line-height:18px;
}

.popup-hd::after {
  content: '';
  display: table;
  height: 1px;
  transform: scaleY(.5);
  background:rgba(244,244,244,1);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
}

.popup-bd {
  height: 129px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.share-operate-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.share-operate-icon {
  display: inline-block;
  width:50px;
  height:50px;
  background:rgba(255,255,255,1);
}

.icon-wrap {
  /* border: 2px dashed #bbb9b9; */
  width:50px;
  height:50px;
}

.share-operate-name {
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:17px;
  margin-top: 7px;
}
</style>
