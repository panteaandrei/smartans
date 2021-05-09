<template>
    <div class="d-flex flex-column align-items-start justify-content-center container-fluid wizard-content col-11">
        <div class="wizard-header w-100 d-flex flex-column">
            <div class="align-self-start">logo</div>
            <div class="wizard-header-bottom d-flex align-items-center justify-content-start">
                <p class="step-title">{{wizardSteps[activeStep].title}}</p>
                <p class="step-number" v-if="activeStep">( Pas {{activeStep}} din {{wizardSteps.length -1}})</p>
                <p class="close ml-auto"><i class="fas fa-times"></i></p>
            </div>
        </div>


        <div class="wizard-content d-inline-flex w-100 position-relative flex-column">
            <p class="big-text col-md-10">{{wizardSteps[activeStep].text}}</p>
            <div class="" v-for="(step, index) in wizardSteps" :key="index">
                <component
                    :is="step.component"
                    v-if="wizardSteps[index].active"
                    key="index"
                    class="row"
                />
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
import StartWizard from "@/components/createWizard/StartWizard";
import WizardStepOne from "@/components/createWizard/WizardStepOne";
import WizardStepTwo from "@/components/createWizard/WizardStepTwo";
import WizardStepThree from "@/components/createWizard/WizardStepThree";
import WizardStepFour from "@/components/createWizard/WizardStepFour";
import WizardStepFive from "@/components/createWizard/WizardStepFive";
import WizardStepSix from "@/components/createWizard/WizardStepSix";
import WizardStepSeven from "@/components/createWizard/WizardStepSeven";
import WizardStepEight from "@/components/createWizard/WizardStepEight";
import SmButton from "@/components/DesignComponents/SmButton";
import { mapFields } from 'vuex-map-fields';

export default {
name: "CreateHome",
    components: {
        SmButton,
        WizardStepEight,
        WizardStepSeven,
        WizardStepSix,
        WizardStepFive, WizardStepFour, WizardStepThree, WizardStepTwo, WizardStepOne, StartWizard},
    data() {
        return {
            wizardSteps: [
                {
                    title: null,
                    active: true,
                    component: 'StartWizard',
                    text: 'Dorim să te ajutam să iți construiești CV-ul perfect pentru a-ți crește șansele de angajare'
                },
                {
                    title: 'detalii cont',
                    active: false,
                    component: 'WizardStepOne',
                    text: 'Te rugăm să validezi datele personale și de contact',
                },
                {
                    title: 'EXPERIENȚA DE MUNCĂ',
                    active: false,
                    component: 'WizardStepTwo',
                    text: 'Introdu experiența pe care ai dobândit-o pe piața muncii'
                },
                {
                    title: 'EDUCAȚIA',
                    active: false,
                    component: 'WizardStepThree',
                    text: 'Câteva informații despre educație. Care este nivelul ultimelor studii finalizate?'
                },
                {
                    title: 'Limbi străine',
                    active: false,
                    component: 'WizardStepFour',
                    text: 'Care sunt limbile ce le cunosti?'
                },
                {
                    title: 'DEFICIENȚE',
                    active: false,
                    component: 'WizardStepFive',
                    text: 'Am o deficiență'
                },
                {
                    title: 'DOMENIUL DE INTERES',
                    active: false,
                    component: 'WizardStepSix',
                    text: 'In ce domeniu de munca doresti sa lucrezi?'
                },
                {
                    title: 'SKILL-URI',
                    active: false,
                    component: 'WizardStepSeven',
                    text: 'Care sunt abilitatile/skillurile tale?'
                },
                {
                    title: 'Hobbi-uri',
                    active: false,
                    component: 'WizardStepEight',
                    text: 'Ce îți place să faci în timpul liber?'
                }
            ]
        }
    },
    methods: {
        nextStep() {

            if (this.activeStep === this.wizardSteps.length - 1) return;

            // Check for validation rules
            if (this.activeStep) {
                let error = false;
                let cvSection = this.cv[Object.keys(this.cv)[this.activeStep-1]];
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

                    if (error) {
                        return;
                    }
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

.wizard-content {

}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
    transition: 1s;
}
.slideback-enter {
    transform: translate(-100%, 0);
}
.slideback-leave-to {
    transform: translate(100%, 0);
}

.wizard-content {
    padding-top: 40px;
    padding-bottom: 50px;
}
</style>

<style>
.navigation-container {
    margin-top:50px;
}

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
