<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100">
        <p class="big-text col-md-8">Dorim să te ajutam să iți construiești CV-ul perfect pentru a-ți crește șansele de angajare</p>
        <div class="navigation-container d-flex align-items-center justify-content-center">
            <sm-button
                :button-text="'start'"
                @handleClick="nextStep"
            />
        </div>
    </div>
</template>

<script>
import SmButton from "@/components/DesignComponents/SmButton";
export default {
    name: "StartWizard",
    components: {SmButton},
    methods: {
        nextStep() {
            this.$emit('nextStep')
        }
    }
}
</script>

<style scoped>
    .big-text {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: -0.02em;
        color: #373F41;
        text-align: left;
    }
</style>
