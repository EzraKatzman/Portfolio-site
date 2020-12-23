<template>
  <div class="bg-wgray-900 w-screen h-screen">

    <div>
      <TopNav/>
    </div>

    <div class="relative">
      <div class="absolute w-full h-full">
        <BrushStroke/>
      </div>
      <!-- Clever way to turn the above svg into a background image -->
      <div class="relative h-screen my-auto">
        <router-view />
      </div>
    </div>

    <div>
      <BotNav/>
    </div>
    
  </div>
</template>

<script>
  import TopNav from './components/TopNav.vue'
  import BrushStroke from './components/BrushStroke.vue'
  import BotNav from './components/BotNav.vue'

  export default {
    name: 'App',
    components: {
        TopNav,
        BrushStroke,
        BotNav,
      }
  }
</script>
