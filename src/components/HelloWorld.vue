<template>
  <v-container fluid>
    <h1>{{msg}}</h1>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['msg'],
    data: () => ({

    }),
  }
</script>
