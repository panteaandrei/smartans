<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100">
        <sm-checkbox :label="'liceu'"></sm-checkbox>
    </div>
</template>

<script>
import SmCheckbox from "@/components/DesignComponents/SmCheckbox";
export default {
    name: "WizardStepThree",
    components: {SmCheckbox},
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
