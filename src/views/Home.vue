<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/smartans-logo.png">
    <HelloWorld msg="Welcome, Smartans!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
    .home {

        .logo {
            width: 300px;
            border-radius: 8px;
        }
    }
</style>
