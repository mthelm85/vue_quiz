<template>
  <transition name="fade">
    <router-view name="body" :answers="answers"></router-view>
  </transition>
</template>

<script>
import { eventBus } from '@/main'

export default {
  data () {
    return {
      answers: []
    }
  },

  created () {
    eventBus.$on('answer', (answer) => {
      this.answers.push(answer)
      console.log(this.answers)
    })
  }
}
</script>

<style>
body, html {
  height: 100%;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
