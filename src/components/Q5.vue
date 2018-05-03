<template lang="html">
  <div class="card-body">
    For how long must an employee be employed to be eligible for FMLA leave?
    <div class="form-group pt-4">
      <input @change="clearMessage" type="radio" id="6 months" value="6 months" v-model="selection">
      <label for="6 months">6 months</label>
      <br>
      <input @change="clearMessage" type="radio" id="2 years" value="2 years" v-model="selection">
      <label for="2 years">2 years</label>
      <br>
      <input @change="clearMessage" type="radio" id="12 months" value="12 months" v-model="selection">
      <label for="12 months">12 months</label><span class="text-success ml-2" v-if="correct"><i class="fas fa-check-circle"></i></span>
      <br>
      <input @change="clearMessage" type="radio" id="none" value="12 weeks" v-model="selection">
      <label for="none">12 weeks</label>
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
          case '6 months':
            this.message = 'Incorrect. Try again'
            break
          case '2 years':
            this.message = 'Incorrect. Try again'
            break
          case '12 months':
            this.correct = true
            setTimeout(() => {
              this.$emit('correctAnswer', 'Q5')
            }, 1000)
            break
          case '12 weeks':
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
