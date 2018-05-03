<template lang="html">
  <div class="card-body">
    At what rate must overtime hours be compensated?
    <div class="form-group pt-4">
      <input @change="clearMessage" type="radio" id="1.25" value="1.25 times the regular rate" v-model="selection">
      <label for="1.25">1.25 times the regular rate</label>
      <br>
      <input @change="clearMessage" type="radio" id="1.5" value="1.5 times the regular rate" v-model="selection">
      <label for="1.50">1.5 times the regular rate</label><span class="text-success ml-2" v-if="correct"><i class="fas fa-check-circle"></i></span>
      <br>
      <input @change="clearMessage" type="radio" id="2.5" value="2.5 times the minimum wage" v-model="selection">
      <label for="2.5">2.5 times the minimum wage</label>
      <br>
      <input @change="clearMessage" type="radio" id="2" value="2 times the minimum wage" v-model="selection">
      <label for="none">1.5 times the minimum wage</label>
    </div>
    <br v-if="!showMessage">
    <br v-if="!showMessage">
    <div class="text-danger text-center pb-4" v-if="showMessage"><strong>{{ message }}</strong></div>
    <div class="text-center">
      <button @click="check" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'

export default {
  data () {
    return {
      selection: '',
      message: '',
      correct: false,
      attempted: false
    }
  },

  methods: {
    check () {
      if (this.attempted === false) {
        this.attempted = true
        eventBus.$emit('answer', this.selection)
      }
      if (this.selection === '') {
        this.message = 'You have not chosen an answer!'
      } else {
        switch (this.selection) {
          case '1.25 times the regular rate':
            this.message = 'Incorrect. Try again'
            break
          case '1.5 times the regular rate':
            this.correct = true
            setTimeout(() => {
              this.$emit('correctAnswer', 'Q3')
            }, 1000)
            break
          case '2.5 times the minimum wage':
            this.message = 'Incorrect. Try again'
            break
          case '2 times the minimum wage':
            this.message = 'Incorrect. Try again'
        }
      }
    },
    clearMessage () {
      this.message = ''
      this.correct = false
    }
  },

  computed: {
    showMessage () {
      if (this.message === '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="css">
</style>
