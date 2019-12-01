<template>
  <div class="fhq-tooltip">
    <slot ref="insert"></slot>
      <div class="fhq-tooltip__main">
        <transition name="fhq-zoom-in-center">
          <div class="fhq-tooltip__wrap right" x-placement="right"
            v-show="isShow">
              <div class="fhq-tooltip__arrow"></div>
              <div class="fhq-tooltip__content">{{content}}</div>
          </div>
       </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FhqTooltip',
  props: {
    placement: {
      type: String,
      default: 'top-center',
      validate (value) {
        return ['top-center'].indexOf(value) > -1
      }
    },
    content: {},
    effect: {
      type: String,
      default: 'dark',
      validate (value) {
        return ['dark', 'light'].indexOf(value) > -1
      }
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  },
  mounted () {
    for (let vc of this.$children) {
      const el = vc.$el
      el.addEventListener('click', this.show)
      el.addEventListener('mouseenter', this.show)
      el.addEventListener('mouseleave', this.hide)
    }
  },
  beforeDestroy () {
    for (let vc of this.$children) {
      const el = vc.$el
      el.removeEventListener('click', this.show)
      el.removeEventListener('mouseenter', this.show)
      el.removeEventListener('mouseleave', this.hide)
    }
  }
}
</script>

<style scoped>
.fhq-tooltip {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.fhq-tooltip__main {
  position: absolute;
  display: inline-block;
  padding-top: 8px;
  right: -8px;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
}

.fhq-tooltip__wrap {
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow:0px 0px 6px 0px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
}

.fhq-tooltip__wrap.light {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  z-index: 2000;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
  background-color: #fff;
}

.fhq-tooltip__arrow {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 6px;
  right: 50%;
  transform: translateX(-50%);
}

.fhq-tooltip__wrap[x-placement^=top] .fhq-tooltip__arrow {
  border-top-color: #fff;
  border-bottom-width: 0;
  bottom: -6px;
}

.fhq-tooltip__wrap[x-placement^=bottom] .fhq-tooltip__arrow {
  border-bottom-color: #fff;
  border-top-width: 0;
  top: -6px;
}

.fhq-tooltip__wrap[x-placement^=right] .fhq-tooltip__arrow {
  border-right-color: #fff;
  border-left-width: 0;
  left: -2px;
  box-shadow:0px 0px 6px 0px rgba(0,0,0,0.2)
}

.fhq-tooltip__wrap[x-placement^=left] .fhq-tooltip__arrow {
  border-left-color: #fff;
  border-right-width: 0;
  right: -6px;
}

.fhq-tooltip__content {
  color: #fff;
  font-size:12px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  line-height:18px;
}

.fhq-tooltip__content.light {
  color: #fff;
}

.fhq-zoom-in-center-enter-active, .fhq-zoom-in-center-leave-active {
  -webkit-transition: all .3s cubic-bezier(.55, 0, .1, 1);
  transition: all .3s cubic-bezier(.55, 0, .1, 1);
}

.fhq-zoom-in-center-enter, .fhq-zoom-in-center-leave-active {
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0)；
}

</style>
