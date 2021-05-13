<template>
    <div class="login-container">
        <input type="text" name="email" v-model="email">
        <input type="password" name="password" v-model="password">

        <button type="submit" @click="doLogin">Login</button>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.email, this.password)
            this.$store.dispatch('doLogin', {username: this.email, password: this.password})
        }
    }
}
</script>

<style scoped>

</style>
