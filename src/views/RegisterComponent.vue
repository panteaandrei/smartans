<template>
    <div class="login-container">
        <input type="text" name="email" v-model="email">
        <input type="password" name="password" v-model="password">

        <button type="submit" @click="doLogin">Register</button>
    </div>
</template>

<script>
export default {
    name: "RegisterComponent",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            this.$store.dispatch('doRegister', {email: this.email, password: this.password})
        }
    }
}
</script>

<style scoped>

</style>
