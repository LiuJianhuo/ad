<template>
  <div class="load-more" ref="loadMore">
    <div class="load-more__content" :class="{'dropped' : dropped}" :style="{ 'transform': transform }">
      <slot name="top"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      canOperate: true,
      distance: 70,
      startY: 0,
      currentY: 0,
      translate: null,
      dropped: false,
      end: true
    }
  },
  computed: {
    transform () {
      return this.translate === 0 ? null : 'translate3d(0, ' + this.translate + 'px, 0)'
    }
  },
  watch: {
    canDropped (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.canDropping = val
    }
  },
  methods: {
    handlerTouchStart (e) {
      this.startY = e.touches[0].clientY
      console.log(this.startY)
    },
    handlerTouchMove (e) {
      let distance = this.currentY - this.startY
      if (distance > 0) {
        e.preventDefault()
      }
      if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
        return
      }
      if (this.end === false) {
        return
      }
      this.currentY = e.touches[0].clientY
      if (this.startY > this.currentY || !this.value) {
        return
      }
      if (distance < this.distance) {
        this.translate = (this.currentY - this.startY) / 1.5
      }
      this.dropped = true
    },
    handlerTouchEnd (e) {
      this.startY = 0
      if (this.translate > 0) {
        this.$emit('loading', '')
      }
      this.dropped = false
    },
    endLoading () {
      this.translate = 0
      this.end = true
    }
  },
  mounted () {
    const $el = this.$el
    $el.addEventListener('touchstart', this.handlerTouchStart)
    $el.addEventListener('touchmove', this.handlerTouchMove)
    $el.addEventListener('touchend', this.handlerTouchEnd)
  },
  beforeDestroy () {
    const $el = this.$el
    $el.removeEventListener('touchstart', this.handlerTouchStart)
    $el.removeEventListener('touchmove', this.handlerTouchMove)
    $el.removeEventListener('touchend', this.handlerTouchEnd)
  }
}
</script>

<style  scoped>
.load-more {
  /* position: relative; */
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.load-more__content {
  position: relative;
}

.load-more__content.dropped {
  transition: .2s;
}

.load-more__content {
  transition: .0s;
}

.is-dropped {
  position: relative;
}
</style>
