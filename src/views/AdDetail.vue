<template>
    <div class="page">
      <mt-header title="任务详情"></mt-header>
        <div class="avatar circle">
          <img :src="logo"/>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'AdDetail',
  data: function () {
    return {
      logo
    }
  }
}
</script>

<style  scoped>
.page {
  width: 100%;
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

</style>
