<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100 step-content mt-5">

        <div class="row" v-for="(option, index) of options" :key="index">
            <sm-checkbox
                :label="option.name"
                :selected="option.value"
                v-model="option.value"
            />

            <div class="levels d-flex ">
                <div class="level d-flex align-items-center justify-content-center" @click="selectLevel('LOW', index)">
                    <p>Începător</p>
                </div>
                <div class="level d-flex align-items-center justify-content-center" @click="selectLevel('MEDIUM', index)">
                    <p>Mediu</p>
                </div>
                <div class="level d-flex align-items-center justify-content-center" @click="selectLevel('ADVANCED', index)">
                    <p>Avansat</p>
                </div>
                <div class="level d-flex align-items-center justify-content-center" @click="selectLevel('HIGH', index)">
                    <p>Nativ</p>
                </div>
            </div>


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
import SmButton from "@/components/DesignComponents/SmButton";
import {mapFields} from "vuex-map-fields";
import SmCheckbox from "@/components/DesignComponents/SmCheckbox";
export default {
    name: "WizardStepFour",
    props:['wizardSteps'],
    components: {SmCheckbox, SmButton},
    data() {
        return {
            options: [
                {
                    name: 'Română',
                    value: false,
                    id: 0,
                    level:null
                },
                {
                    name: 'engleză',
                    value: false,
                    id: 0,
                    level:null
                },
                {
                    name: 'Germană',
                    value: false,
                    id: 0,
                    level:null
                },
            ],
            selectedLevel: ''
        }

    },
    methods: {
        selectLevel(level, index) {
            console.log(level)
            this.options[index].level = level
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

                    let data = this.options.filter(item => {
                        return item.value
                    })
                    // ajax call
                    this.$store.dispatch('saveLanguageAction', data)
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

<style scoped lang="scss">
.levels {
    height: 52px;
    .level {
        border: 1px solid #053AFA;
        border-top: 2px solid #053AFA;
        border-bottom: 2px solid #053AFA;
        padding: 0 16px;
        cursor: pointer;

        &:first-child {
            border-left:2px solid #053AFA;
            border-radius: 8px 0 0 8px;
        }
        &:last-child {
            border-right:2px solid #053AFA;
            border-radius: 0 8px 8px 0;
        }

        p {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            text-align: center;
            color: #424B6B;

        }
    }
}

</style>
