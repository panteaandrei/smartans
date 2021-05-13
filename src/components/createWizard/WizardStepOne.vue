<template>
    <div class="d-flex align-items-start justify-content-start step-content col-md-9">

        <div class="col-12 col-md-6" v-for="(field, index) in Object.keys(personal)"
             :key="index">
            <sm-text-input
                :label="personal[field].name"
                :name="field"
                :error="personal[field].error"
                v-model="personal[field].value"
                @input="checkError(field)"
            />
        </div>

        <div class="wizard-footer">
            <div class="navigation-container d-flex align-items-center justify-content-center">
                <sm-button
                    :button-text="'inapoi'"
                    :icon-before="'fas fa-arrow-left'"
                    :type="'secondary'"
                    @handleClick="previousStep"
                    v-if="activeStep"
                />
                <sm-button
                    class="ml-1"
                    :button-text="!activeStep ? 'Start' :'Continuă'"
                    :icon-after="'fas fa-arrow-right'"
                    @handleClick="nextStep"
                />
            </div>
        </div>

    </div>

</template>

<script>
import SmTextInput from "@/components/DesignComponents/SmTextInput";
import {mapFields} from 'vuex-map-fields';
import SmButton from "@/components/DesignComponents/SmButton";

export default {
    name: "WizardStepOne",
    props: ['wizardSteps'],
    components: {SmButton, SmTextInput},
    data() {
        return {}
    },
    methods: {
        checkError(field) {

            if (this.personal[field].required && this.personal[field].value.length) {
                this.personal[field].error = ''
            }
        },
        nextStep() {

            if (this.activeStep === this.wizardSteps.length - 1) return;

            // Check for validation rules
            if (this.activeStep) {
                let error = false;
                let cvSection = this.cv[Object.keys(this.cv)[this.activeStep-1]];

                if (Array.isArray(cvSection)) {
                    cvSection.forEach(section => {
                        let requiredFields = Object.keys(section).filter(field => {
                            return section[field].required;
                        });

                        if (requiredFields.length) {
                            requiredFields.forEach(field => {
                                section[field].error = '';
                                if (!section[field].value.length) {
                                    section[field].error = 'This field is required';
                                    error = true;
                                }
                            })

                        }
                    })
                } else {
                    let requiredFields = Object.keys(cvSection).filter(field => {
                        return cvSection[field].required;
                    });

                    if (requiredFields.length) {
                        requiredFields.forEach(field => {
                            cvSection[field].error = '';
                            if (!cvSection[field].value.length) {
                                cvSection[field].error = 'This field is required';
                                error = true;
                            }
                        })

                    }
                }

                if (error) {
                    return;
                }else {

                    // ajax call
                    this.$store.dispatch('savePersonalInfoAction')
                }
            }

            this.wizardSteps[this.activeStep].active = false;
            this.activeStep++;
            this.wizardSteps[this.activeStep].active = true;
        },
        previousStep() {
            if (!this.activeStep) return;

            this.wizardSteps[this.activeStep].active = false;
            this.activeStep--;
            this.wizardSteps[this.activeStep].active = true;
        }
    },
    computed: {
        ...mapFields([
            'cv',
            'cv.personal',
            'activeStep'
        ])
    }
}
</script>

<style scoped lang="scss">

</style>
