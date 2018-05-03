<template>
<div class="card text-center bg-success text-white text-small" :class="{ 'bg-danger': danger }" style="min-width: 100px; font-size: 14px;">
    <div class="row">
      <div class="col" style="margin-left: -2px;">
        {{ minutes | two_digits }} : {{ seconds | two_digits }}
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    date: null
  },

  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date
    }
  },

  computed: {
    calculatedDate () {
      this.event = Math.trunc(Date.parse(this.event) / 1000)
      return this.event
    },
    seconds () {
      if (((this.calculatedDate - this.now) % 60) < 0) {
        return 0
      } else {
        return (this.calculatedDate - this.now) % 60
      }
    },
    minutes () {
      if ((Math.trunc((this.calculatedDate - this.now) / 60) % 60) < 0) {
        return 0
      } else {
        return Math.trunc((this.calculatedDate - this.now) / 60) % 60
      }
    },
    hours () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60 / 24)
    },
    danger () {
      if (((Math.trunc((this.calculatedDate - this.now) / 60) % 60)) < 1) {
        return true
      } else {
        return false
      }
    }
  },

  watch: {
    seconds () {
      if (this.minutes === 0 && this.seconds === 0) {
        this.$emit('timeUp', true)
      }
    }
  },

  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },

  filters: {
    two_digits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>

<style scoped>

</style>
