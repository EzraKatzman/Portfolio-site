<template>
  <div class="h-full">
    <div class="flex flex-col justify-evenly h-full">
      <div>
        <Profile class="my-auto mx-auto w-2/5"/>
      </div>
    </div>
  </div>    
</template>

<script>
  import Profile from '../components/Profile.vue'
  
  export default {
    name: "Home",
    
    components: {
      Profile,
    }
  }
</script>