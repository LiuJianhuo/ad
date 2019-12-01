<template>
  <div class="ad-nav">
    <a
      v-for="(item, index) in items" :key="index"
      class="nav-item" :class="{'active' : activedIndex === index}"
      @click="changeItem(index)">
      <div class="nav-item-txt">{{item}}</div>
      <div class="nav-item-line"></div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'AdNav',
  props: {
    items: {
      type: Array,
      default: function () { return [] }
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
.ad-nav {
  display: flex;
  width: 100%;
}

.nav-item {
  padding: 4px 2px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item-txt {
  height:16px;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(51,51,51,1);
  line-height:16px;
  padding: 10px 0px;
}

.nav-item .nav-item-line {
  width:26px;
  height:3px;
  background:rgba(61,114,226,1);
  border-radius:2px;
  visibility: hidden;
}

.nav-item.active .nav-item-line {
  visibility: visible;
}

.nav-item.active .nav-item-txt {
  color: rgba(61, 114, 226, 1);
}
</style>
