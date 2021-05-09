<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100 step-content">

        <p>form here</p>
        <p>form here</p>
        <p>form here</p>
        <p>form here</p>
        <p>form here</p>
    </div>
</template>

<script>

import {mapFields} from 'vuex-map-fields';
export default {
    name: "WizardStepTwo",
    methods: {

    },
    computed: {
        ...mapFields([
            'cv.workExperience'
        ]),
    }
}
</script>

<style scoped>

</style>
