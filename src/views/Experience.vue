<template>
  <div class="h-full">
    <div class="flex h-full justify-center">
      <Exp v-for="(experience, index) in experience" :key="index" :experience="experience"  class="h-64 my-auto mx-4 border-b-4 border-orange-400"/>
    </div>
  </div>    
</template>

<script>
  import Exp from '../components/Exp.vue'
  import experience from '../content/experience.js'

  export default {
    data() {
      return {
        experience: experience
      }
    },

    name: "Experience",
    components: {
      Exp,
    }
  }
</script>
