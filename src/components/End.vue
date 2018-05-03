<template lang="html">
  <div class="container h-100">
    <div class="row h-100">
      <div class="col my-auto">
        <div class="card">
          <div class="card-header text-center">
            You scored <strong>{{ (correctAnswers.length / 5) *100  }}%</strong> based on your original answers (below)
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              1. What is the current minimum wage under the Fair Labor Standards Act? <strong>{{ answers[0] }}</strong>
            </li>
            <li class="list-group-item">
              2. At what rate must overtime hours be compensated? <strong>{{ answers[1] }}</strong>
            </li>
            <li class="list-group-item">
              3. Which law establishes minimum wage rates for federally-funded construction projects? <strong>{{ answers[2] }}</strong>
            </li>
            <li class="list-group-item">
              4. Which section of the Fair Labor Standards Act establishes child labor protections? <strong>{{ answers[3] }}</strong>
            </li>
            <li class="list-group-item">
              5. For how long must an employee be employed to be eligible for FMLA leave? <strong>{{ answers[4] }}</strong>
            </li>
          </ul>
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

  props: ['answers'],

  computed: {
    correctAnswers () {
      return this.answers.filter((el) => {
        return (el === '$7.25' ||
                el === '1.5 times the regular rate' ||
                el === 'Davis-Bacon Act' ||
                el === 'Section 212' ||
                el === '12 months')
      })
    }
  },

  methods: {

  }
}
</script>

<style lang="css">
</style>
