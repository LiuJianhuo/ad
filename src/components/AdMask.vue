<template>
  <div class="mask" :class="{'show' : show}">
  </div>
</template>

<script>
export default {
  name: 'AdMask',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style  scoped>
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0,0,0,1);
  opacity:0.40090000000000003;
  z-index: 100;
  display: none;
}

.mask.show {
  display: block;
}
</style>
