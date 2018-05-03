<template lang="html">
  <div class="container h-100">
    <div class="row h-100">
      <div class="col my-auto">
        <div class="card text-center">
          <div class="card-header">
            Wage &amp; Hour Division Basic Knowledge Quiz
          </div>
          <div class="card-body">
            <p class="lead">You will have 5 minutes to complete the quiz. Please press the start button below when you're ready.</p>
            <button @click="startQuiz" class="btn btn-primary">Start</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    startQuiz () {
      this.$router.push('/questions')
    }
  }
}
</script>

<style lang="css">
</style>
