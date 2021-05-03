<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/smartans-logo.png">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/create">Creeaza CV</router-link>
          </div>
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
