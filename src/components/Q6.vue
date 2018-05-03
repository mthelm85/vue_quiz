<template lang="html">
  <div class="card-body">
    Calculate the amount of compensation due in the following scenario (the employee is a bona fide tipped employee):
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Pay Period</th>
          <th>Hours Worked</th>
          <th>Pay Rate</th>
          <th>Tips</th>
          <th>Amount Due</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>04-08-2018 to 04-14-2018</td>
          <td>42.79</td>
          <td>2.56</td>
          <td>311.33</td>
          <td><input type="number" v-model="selection"/><span class="text-success ml-2" v-show="correct"><i class="fas fa-check-circle"></i></span></td>
        </tr>
      </tbody>
    </table>
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
        this.message = 'You have not input an answer!'
      } else {
        if (this.selection > 118.62 && this.selection < 119.02) {
          this.correct = true
          setTimeout(() => {
            this.$emit('correctAnswer', 'Q6')
          }, 1000)
        } else {
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
