<template>
  <div class="fhq-tooltip">
    <slot ref="insert"></slot>
    <div class="fhq-tooltip__main" id="tooltip">
      <div class="fhq-tooltip__wrap right" x-placement="right">
          <!-- <div class="fhq-tooltip__arrow"></div> -->
          <div class="fhq-tooltip__content">{{content}}</div>
      </div>
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
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      touchEle: null,
      currentShow: false
    }
  },
  watch: {
    currentShow (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentShow = val
    }
  },
  computed: {},
  methods: {
    show (e) {
      this.isShow = true
      this.touchEle = e.target
    },
    hide (e) {
      let tooltip = this.$el.querySelector('#tooltip')
      tooltip.classList.remove('show')
    }
  },
  mounted () {
    // for (let vc of this.$children) {
    //   const el = vc.$el
    //   el.addEventListener('click', this.show)
    //   el.addEventListener('mouseenter', this.show)
    //   el.addEventListener('mouseleave', this.hide)
    //   el.addEventListener('touchstart', this.show)
    //   el.addEventListener('touchmove', this.hide)
    // }
    window.addEventListener('touchstart', this.hide)
  },
  beforeDestroy () {
    window.addEventListener('touchstart', this.hide)
  }
}
</script>

<style scoped>

.fhq-tooltip {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.fhq-tooltip__main.show {
  display: inline-block;
}

.fhq-tooltip__main {
  position: absolute;
  display: none;
  right: 0%;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  background-color: #ffffff;
  z-index: 200;
  width: 140px;
  transition:.2s;
}

.fhq-tooltip__main::after {
  position: absolute;
  display: block;
  content: ' ';
  width: 8px;
  height: 8px;
  border-color: transparent;
  border-style: solid;
  left: 0%;
  top: 57%;
  /* box-shadow:0px 0px 6px 0px rgba(0,0,0,0.2); */
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  border-right: none;
  border-top: none;
  /* background-color: black; */
  transform: rotate(45deg) translate(-137%, -50%);
}

.fhq-tooltip__wrap {
  position: relative;
  display: inline-block;
  background-color: #303133;
  padding: 5px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px gray;
  box-shadow:0px 0px 6px 0px rgba(0,0,0,0.2);
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
  width: 8px;
  height: 8px;
  border-color: transparent;
  border-style: solid;
  left: 50%;
  transform: translateX(-50%);
  /* box-shadow:0px 0px 6px 0px rgba(0,0,0,0.2); */
  transform: rotate(45deg);
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  border-right: none;
  border-top: none;
  top: 7px;
}

.fhq-tooltip__wrap[x-placement^=top] .fhq-tooltip__arrow {
  border-top-color: #303133;
  border-bottom-width: 0;
  bottom: -6px;
}

.fhq-tooltip__wrap[x-placement^=bottom] .fhq-tooltip__arrow {
  border-bottom-color: #303133;
  border-top-width: 0;
  top: -6px;
}

.fhq-tooltip__wrap[x-placement^=right] .fhq-tooltip__arrow {
  /* border-right-color: #ffffff;
  border-left-width: 0; */
  left: -5px;
}

.fhq-tooltip__wrap[x-placement^=left] .fhq-tooltip__arrow {
  border-left-color: #303133;
  border-right-width: 0;
  right: -6px;
}

.fhq-tooltip__content {
  font-size:12px;
  font-family:PingFang-SC-Medium,PingFang-SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  /* line-height:18px; */
  width: 140px;
}

.fhq-tooltip__content.light {
  color: #303133;
}

.fhq-zoom-in-center-enter-active, .fhq-zoom-in-center-leave-active {
  -webkit-transition: all .3s cubic-bezier(.55, 0, .1, 1);
  transition: all .3s cubic-bezier(.55, 0, .1, 1);
}

.fhq-zoom-in-center-enter, .fhq-zoom-in-center-leave-active {
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0)
}

</style>
