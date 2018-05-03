<template lang="html">
  <div class="container h-100">
    <div class="row h-100">
      <div class="col my-auto">
        <b-progress :value="progress" max="5" class="mb-3"></b-progress>
        <div class="card">
          <div class="card-header text-center">
            Question #{{ number }}
            <span class="float-right"><countdown :date="timeZero" @timeUp="timeUp"></countdown></span>
          </div>
          <transition name="fade" mode="out-in">
            <component :is="currentQuestion" @correctAnswer="showNext($event)"></component>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import Moment from 'moment'
import Q1 from '@/components/Q1'
import Q2 from '@/components/Q2'
import Q3 from '@/components/Q3'
import Q4 from '@/components/Q4'
import Q5 from '@/components/Q5'
import Q6 from '@/components/Q6'

export default {
  data () {
    return {
      timeZero: Moment().add(5, 'minutes').format('YYYY-MM-DD H:mm:ss'),
      nextQuestion: false,
      number: 1,
      progress: 0,
      currentQuestion: 'Q1'
    }
  },

  components: {
    Countdown,
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6
  },

  created () {
    console.log(this.timeZero)
  },

  methods: {
    showNext (q) {
      if (this.number < 5) {
        this.number++
      }
      this.progress++
      this.currentQuestion = q
    },
    timeUp () {
      this.$router.push('/end')
    }
  },

  watch: {
    progress () {
      if (this.progress === 5) {
        setTimeout(() => {
          this.$router.push('/end')
        }, 3000)
      }
    }
  }
}
</script>

<style scoped lang="css">

</style>
