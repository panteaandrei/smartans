<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100 step-content mt-5">
        <div class="options-selected d-flex align-items-start flex-column col-12 col-md-9"
             v-for="option of selectedOptions" :key="option.id"
        >
            <sm-checkbox
                :label="option.name"
                :selected="option.value"
                v-model="option.value"
            />

            <div class="edu-details w-100 d-flex flex-wrap py-5">
                <div class="col-12 col-sm-6">
                    <sm-text-input
                        :type="'input'"
                        :label="option.details.name.name"
                        :name="option.details.name.name"
                        :error="option.details.name.error"
                        v-model="option.details.name.value"
                    />
                </div>

                <div class="col-12 col-sm-6">
                <sm-text-input
                    :type="'input'"
                    :label="option.details.city.name"
                    :name="option.details.city.name"
                    :error="option.details.city.error"
                    v-model="option.details.city.value"
                />
                </div>
                    <div class="col-12 col-sm-6">
                <sm-text-input
                    :type="'date'"
                    :label="option.details.period.name"
                    :name="option.details.period.name"
                    :error="option.details.period.error"
                    v-model="option.details.period.value"
                />
                    </div>
            </div>
        </div>
        <div class="options d-flex align-items-start flex-wrap col-12 col-md-9">
            <sm-checkbox
                v-for="option of unselectedOptions" :key="option.id"
                :label="option.name"
                :selected="option.value"
                v-model="option.value"
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
import SmCheckbox from "@/components/DesignComponents/SmCheckbox";
import SmButton from "@/components/DesignComponents/SmButton";
import {mapFields} from "vuex-map-fields";
import SmTextInput from "@/components/DesignComponents/SmTextInput";
export default {
    name: "WizardStepThree",
    props: ['wizardSteps'],
    components: {SmTextInput, SmButton, SmCheckbox},
    data() {
        return {
            options: [
                {
                    name: 'Gimnaziu',
                    type: 'MIDDLE_SCHOOL',
                    value: false,
                    id:0,
                    details: {
                        name: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Școală'
                        },
                        city: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Oraș'
                        },
                        period: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Perioada Educatiei'
                        }
                    }
                },
                {
                    name: 'Liceu',
                    type: 'HIGH_SCHOOL',
                    value: false,
                    id:1,
                    details: {
                        name: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Școală'
                        },
                        city: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Oraș'
                        },
                        period: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Perioada Educatiei'
                        }
                    }
                },
                {
                    name: 'Universitate',
                    type: 'UNIVERSITY',
                    value: false,
                    id:2,
                    details: {
                        name: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Școală'
                        },
                        city: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Oraș'
                        },
                        period: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Perioada Educatiei'
                        }
                    }
                },
                {
                    name: 'Masterat',
                    type: 'MASTER',
                    value: false,
                    id:3,
                    details: {
                        name: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Școală'
                        },
                        city: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Oraș'
                        },
                        period: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Perioada Educatiei'
                        }
                    }
                },
                {
                    name: 'Doctorat',
                    type: 'PHD',
                    value: false,
                    id:4,
                    details: {
                        name: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Școală'
                        },
                        city: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Oraș'
                        },
                        period: {
                            value: '',
                            required: true,
                            error:'',
                            name: 'Perioada Educatiei'
                        }
                    }
                },
            ]
        }
    },
    methods: {

        checkError(index, field) {

            if (this.workExperience[index][field].required && this.workExperience[index][field].value.length) {
                this.workExperience[index][field].error = ''
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
                    this.$store.dispatch('saveEducationAction', this.formattedData())
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
        },
        formattedData() {

            return this.selectedOptions.map(option => {
                return {
                    "edu_type": option.type,
                    "name": option.details.name.value,
                    "city": option.details.city.value,
                    "start_date": this.$moment(option.details.period[0]).format('YYYY-MM-DD'),
                    "end_date": this.$moment(option.details.period[1]).format('YYYY-MM-DD'),
                }
            });
        },
    },
    computed: {

        unselectedOptions() {
            return this.options.filter(item => {return !item.value})
        },
        selectedOptions() {
            return this.options.filter(item => {return item.value})
        },
        ...mapFields([
            'cv',
            'activeStep'
        ])
    }
}
</script>

<style scoped lang="scss">
    .edu-details {
        border-top: 1px solid #ECF1F4;
        border-bottom: 1px solid #ECF1F4;
    }
</style>
