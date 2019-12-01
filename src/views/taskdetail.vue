<template>
  <div class="taskdetail">
    <div class="top">
      <mt-header title="任务详情">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="name">
      <p>bjhg春秋机能工装飞行员夹克男潮牌欧美街2019流行嘻哈立领外套</p>
    </div>
    <div>
      <img src="{{}}" alt="">
    </div>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <p>我是内容我是内容我是内容</p>
    <mt-button @click.native="handleClick" id="footer">
      <span>
        <img src="../assets/fenxiang.png" alt="" id="img">
      </span>
      <span>参与任务，开始分享</span>
    </mt-button>
    <mt-popup v-model="popupVisible" position="bottom" id="actionsheet">
      <div id="bu-top">
        <p id="share">分享</p>
      </div>
      <div class="xian"></div>
      <div class="bu-buttom">
        <img src="../assets/share_wenxin_icon.png" alt="" id="img1">
        <p id="span-left">微信</p>
        <img src="../assets/share_pyq_icon.png" alt="" id="img2">
        <p id="span-right">朋友圈</p>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  name: 'Taskdetail',
  data () {
    return {
      token: '',
      task: '',
      advertiseId: '',
      popupVisible: false
    }
  },
  created () {
    this.$axios({
      method: 'post',
      url: 'api/advertise/detail',
      data: {
        'advertiseId': 1
      }
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    handleClick: function () {
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>
<style>
.taskdetail {
  position: relative;
}
.name {
  padding: 8px 12px;
  color: #333333;
  width:351px;
  height:40px;
  font-size:16px;
  line-height:20px;
  font-weight:500;
  color:rgba(51,51,51,1);
  font-family:PingFangSC-Medium,PingFang SC;
}
img {
  width:375px;
  height:375px;
}
#footer {
  width:375px;
  height:51px;
  background:rgba(61,114,226,1);
  border-radius:6px 6px 0px 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:16px;
}
#img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
.taskdetail>p {
  width:168px;
  height:14px;
  font-size:14px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:14px;
}
#actionsheet {
  width:375px;
  height:179px;
  background:rgba(255,255,255,1);
  border-radius:6px 6px 0px 0px;
}
#actionsheet #bu-top {
  height: 49px;
  width:36px;
  /* height:49px; */
  font-size:18px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(34,34,34,1);
  line-height:49px;
  margin-left: 170px;
}
.xian {
  height:1px;
  background:rgba(244,244,244,1);
}
#actionsheet #bu-buttom {
  position: relative;
}
#img1 {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 75px;
  left: 93px;
  /* border: 1px dashed #000; */
}
#img2 {
  width: 50px;
  height: 50px;
  /* border: 1px dashed #000; */
  position: absolute;
  top: 75px;
  left: 232px;
}
#span-left {
  width:24px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:17px;
  position: absolute;
  top: 133px;
  left: 106px;
}
#span-right {
  width:36px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:17px;
  position: absolute;
  top: 133px;
  right: 100px;
}
</style>
