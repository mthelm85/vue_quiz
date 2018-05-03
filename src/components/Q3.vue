<template lang="html">
  <div class="card-body">
    Which law establishes minimum wage rates for federally-funded construction projects?
    <div class="form-group pt-4">
      <input @change="clearMessage" type="radio" id="Davis-Bacon Act" value="Davis-Bacon Act" v-model="selection">
      <label for="Davis-Bacon Act">Davis-Bacon Act</label><span class="text-success ml-2" v-if="correct"><i class="fas fa-check-circle"></i></span>
      <br>
      <input @change="clearMessage" type="radio" id="Family and Medical Leave Act" value="Family and Medical Leave Act" v-model="selection">
      <label for="Family and Medical Leave Act">Family and Medical Leave Act</label>
      <br>
      <input @change="clearMessage" type="radio" id="Employee Polygraph Protection Act" value="Employee Polygraph Protection Act" v-model="selection">
      <label for="Employee Polygraph Protection Act">Employee Polygraph Protection Act</label>
      <br>
      <input @change="clearMessage" type="radio" id="none" value="None of the above" v-model="selection">
      <label for="none">None of the above</label>
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
          case 'Davis-Bacon Act':
            this.correct = true
            setTimeout(() => {
              this.$emit('correctAnswer', 'Q4')
            }, 1000)
            break
          case 'Family and Medical Leave Act':
            this.message = 'Incorrect. Try again'
            break
          case 'Employee Polygraph Protection Act':
            this.message = 'Incorrect. Try again'
            break
          case 'None of the above':
            this.message = 'Incorrect. One of the above laws is the correct answer'
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
