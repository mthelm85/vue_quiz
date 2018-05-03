<template lang="html">
  <div class="card-body">
    Which section of the Fair Labor Standards Act establishes child labor protections?
    <div class="form-group pt-4">
      <input @change="clearMessage" type="radio" id="Section 203" value="Section 203" v-model="selection">
      <label for="Section 203">Section 203</label>
      <br>
      <input @change="clearMessage" type="radio" id="Section 207" value="Section 207" v-model="selection">
      <label for="Section 207">Section 207</label>
      <br>
      <input @change="clearMessage" type="radio" id="Section 211" value="Section 211" v-model="selection">
      <label for="Section 211">Section 211</label>
      <br>
      <input @change="clearMessage" type="radio" id="none" value="Section 212" v-model="selection">
      <label for="none">Section 212</label><span class="text-success ml-2" v-if="correct"><i class="fas fa-check-circle"></i></span>
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
          case 'Section 203':
            this.message = 'Incorrect. Section 203 contains definitions'
            break
          case 'Section 207':
            this.message = 'Incorrect. Section 207 establishes overtime requirements'
            break
          case 'Section 211':
            this.message = 'Incorrect. Section 211 establishes recordkeeping requirements'
            break
          case 'Section 212':
            this.correct = true
            setTimeout(() => {
              this.$emit('correctAnswer', 'Q5')
            }, 1000)
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
