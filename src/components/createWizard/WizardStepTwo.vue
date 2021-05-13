<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100 step-content mt-5">
        <div class="tabs d-flex align-items-center justify-content-start w-100">
            <div class="tab"
                 @click="switchTab('choose')"
                 :class="{active: activeTab === 'choose'}"
                 role="tab"
                 tabindex="0"
            >Alege experiența</div>
            <div class="tab"
                 @click="switchTab('no-experience')"
                 :class="{active: activeTab === 'no-experience'}"
                 role="tab"
                 tabindex="0"
            >Nu am experiență</div>
        </div>
        <div class="add-experience col-12 col-md-9 d-flex flex-column" v-if="activeTab === 'choose'">
            <div class="experience-tab row mt-5" v-for="(experience, index) in workExperience" :key="index">
                <div class="col-12 col-md-6" v-for="(field, index2) in Object.keys(experience)"
                     :class="{'col-md-12':field === 'description'}"
                     :key="index2">
                    <sm-text-input
                        :type="field === 'description' ? 'textarea' : field === 'period'  ? 'date' : 'input'"
                        :label="experience[field].name"
                        :name="'workExperience_'+index + '_' + field"
                        :error="workExperience[index][field].error"
                        v-model="workExperience[index][field].value"
                        @input="checkError(index, field)"
                    />
                </div>

            </div>

            <sm-button type="tertiary" button-text="Adaugă experiență" :icon-before="'fa fa-plus'" class="mr-auto" @handleClick="addExperience"/>

        </div>
        <div class="no-experience col-md-9 d-flex flex-column align-items-start" v-else>

            <p class="medium-text">
                Nu am experiență, însă abia astept să îmi fac!
            </p>
            <p class="small-text">
                Personalizeaza-ti profilul cu caracteristicile tale.
            </p>
            <sm-autofill-text :dropdowns="dropdowns" >

            </sm-autofill-text>
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
//todo add model to sm-autofill
import {mapFields} from 'vuex-map-fields';
import SmTextInput from "@/components/DesignComponents/SmTextInput";
import SmButton from "@/components/DesignComponents/SmButton";
import SmAutofillText from "@/components/DesignComponents/SmAutofillText";

export default {
    name: "WizardStepTwo",
    components: {SmAutofillText, SmButton, SmTextInput},
    props:['wizardSteps'],
    data() {
        return {
            activeTab: 'choose',
            dropdowns: [
                {
                    opened: false,
                    selectedOption: '',
                    options: [
                        'ambitioasă','atentă','creativă'
                    ]
                },
                {
                    opened: false,
                    selectedOption: '',
                    options: [
                        'ambitioasă','atentă','creativă'
                    ]
                },
                {
                    opened: false,
                    selectedOption: '',
                    options: [
                        'ambitioasă','atentă','creativă'
                    ]
                },
                {
                    opened: false,
                    selectedOption: '',
                    options: [
                        'ambitioasă','atentă','creativă'
                    ]
                },

            ]
        }
    },
    methods: {
        switchTab(val) {

            this.activeTab = val;
            this.$store.dispatch('switchWorkExperienceAction', {type:val})
        },
        checkError(index, field) {

            if (this.workExperience[index][field].required && this.workExperience[index][field].value.length) {
                this.workExperience[index][field].error = ''
            }
        },
        addExperience() {
            this.$store.dispatch('addWorkExperienceAction')
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
                    this.$store.dispatch('saveWorkExperienceAction')
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
            'cv.workExperience',
            'activeStep'
        ])
    }
}
</script>

<style scoped lang="scss">
    .tabs {

        border-bottom: 1px solid #ECF1F4;
        .tab {
            padding: 14px 77px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #636F99;
            border-bottom: solid 5px transparent;
            cursor: pointer;

            @media (max-width: 767px) {
                padding: 14px 4px;
                flex-grow: 1;
            }

            &.active {
                color: #053AFA;
                border-bottom: solid 5px #9BB0FD;
            }
        }
    }

    .add-experience {
        .experience-tab {
            border-bottom: 1px solid #ECF1F4;
        }
    }

    .no-experience {
        padding-top :40px;

        .medium-text {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #373F41;
        }

        .small-text {
            padding-top:32px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #636F99;
        }
    }
</style>
