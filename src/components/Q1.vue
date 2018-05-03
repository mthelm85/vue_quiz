<template lang="html">
  <div class="card-body">
    What is the current minimum wage under the Fair Labor Standards Act?
    <div class="form-group pt-4">
      <input @change="clearMessage" type="radio" id="$6.55" value="$6.55" v-model="selection">
      <label for="$6.55">$6.55</label>
      <br>
      <input @change="clearMessage" type="radio" id="$7.25" value="$7.25" v-model="selection">
      <label for="$7.25">$7.25</label><span class="text-success ml-2" v-if="correct"><i class="fas fa-check-circle"></i></span>
      <br>
      <input @change="clearMessage" type="radio" id="$5.85" value="$5.85" v-model="selection">
      <label for="$5.85">$5.85</label>
      <br>
      <input @change="clearMessage" type="radio" id="none" value="$5.15" v-model="selection">
      <label for="none">$5.15</label>
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
          case '$6.55':
            this.message = 'Incorrect. This was the level established in 2008'
            break
          case '$7.25':
            this.correct = true
            setTimeout(() => {
              this.$emit('correctAnswer', 'Q2')
            }, 1000)
            break
          case '$5.85':
            this.message = 'Incorrect. This was the level established in 2007'
            break
          case '$5.15':
            this.message = 'Incorrect. This was the level established in 1997'
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

<style scoped lang="css">

</style>
