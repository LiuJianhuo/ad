<template>
    <div class="header">
        <div class="avatar circle">
          <img :src="logo"/>
        </div>
        <div>
          
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

.header {
  position: relative;
  height: 44px;
  width: 100%;
}



</style>
