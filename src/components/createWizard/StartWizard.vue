<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100">
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
import SmButton from "@/components/DesignComponents/SmButton";
import {mapFields} from "vuex-map-fields";
export default {
    name: "StartWizard",
    props:['wizardSteps'],
    components: {SmButton},
    methods: {
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
            'activeStep'
        ])
    }
}
</script>

<style scoped>

</style>
