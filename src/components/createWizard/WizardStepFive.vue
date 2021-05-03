<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100">
        <p>step five</p>
        <div class="navigation-container d-flex align-items-center justify-content-center">
            <sm-button
                :button-text="'inapoi'"
                :icon-before="'fas fa-arrow-left'"
                :type="'secondary'"
                @handleClick="previousStep"

            />
            <sm-button
                class="ml-1"
                :button-text="'Continuă'"
                :icon-after="'fas fa-arrow-right'"
                @handleClick="nextStep"

            />
        </div>
    </div>
</template>

<script>
import SmButton from "@/components/DesignComponents/SmButton";
export default {
    name: "WizardStepFive",
    components: {SmButton},
    methods: {
        nextStep() {
            this.$emit('nextStep')
        },
        previousStep() {
            this.$emit('previousStep')
        }
    }
}
</script>

<style scoped>

</style>
