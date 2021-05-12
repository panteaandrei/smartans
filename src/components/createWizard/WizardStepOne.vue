<template>
    <div class="d-flex align-items-start justify-content-center step-content col-md-9">

        <div class="col-6" v-for="(field, index) in Object.keys(personal)"
             :key="index">
            <sm-text-input
                :label="personal[field].name"
                :name="field"
                :error="personal[field].error"
                v-model="personal[field].value"
                @input="checkError(field)"
            />
        </div>


    </div>

</template>

<script>
import SmTextInput from "@/components/DesignComponents/SmTextInput";
import {mapFields} from 'vuex-map-fields';

export default {
    name: "WizardStepOne",
    components: {SmTextInput},
    data() {
        return {}
    },
    methods: {
        checkError(field) {

            if (this.personal[field].required && this.personal[field].value.length) {
                this.personal[field].error = ''
            }
        }
    },
    computed: {
        ...mapFields([
            'cv.personal'
        ]),
    }
}
</script>

<style scoped lang="scss">

</style>
