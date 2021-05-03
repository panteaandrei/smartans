<template>
    <div class="d-flex flex-column align-items-start justify-content-center container-fluid">
        <div class="wizard-header w-100 d-flex flex-column">
            <div class="align-self-start">logo</div>
            <div class="wizard-header-bottom d-flex align-items-center justify-content-start">
                <p class="step-title">{{wizardSteps[activeStep].title}}</p>
                <p class="step-number"></p>
                <p class="close ml-auto"><i class="fas fa-times"></i></p>
            </div>
        </div>

        <div class="wizard-content d-inline-flex w-100 position-relative">
            <transition-group
                :name="back ? 'slideback' : 'slide'"
                v-for="(step, index) in wizardSteps"
                :key="index"
                class="w-100 position-absolute"
            >
                <component
                    :is="step.component"
                    @nextStep="nextStep"
                    @previousStep="previousStep"
                    v-if="wizardSteps[index].active"
                    key="index"
                    class="step-component w-100"
                />
            </transition-group>
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
export default {
name: "CreateHome",
    components: {
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
                    component: 'StartWizard'
                },
                {
                    title: 'detalii cont',
                    active: false,
                    component: 'WizardStepOne'
                },
                {
                    title: 'EXPERIENȚA DE MUNCĂ',
                    active: false,
                    component: 'WizardStepTwo'
                },
                {
                    title: 'EDUCAȚIA',
                    active: false,
                    component: 'WizardStepThree'
                },
                {
                    title: 'Limbi străine',
                    active: false,
                    component: 'WizardStepFour'
                },
                {
                    title: 'DEFICIENȚE',
                    active: false,
                    component: 'WizardStepFive'
                },
                {
                    title: 'DOMENIUL DE INTERES',
                    active: false,
                    component: 'WizardStepSix'
                },
                {
                    title: 'SKILL-URI',
                    active: false,
                    component: 'WizardStepSeven'
                },
                {
                    title: 'Hobbi-uri',
                    active: false,
                    component: 'WizardStepEight'
                }
            ],
            activeStep: 0, //todo move to store,
            back :false
        }
    },
    methods: {
        nextStep() {
            if (this.activeStep === this.wizardSteps.length - 1) return;

            this.back = false;
            this.wizardSteps[this.activeStep].active = false;
            this.activeStep++;
            this.wizardSteps[this.activeStep].active = true;
        },
        previousStep() {
            if (!this.activeStep) return;

            this.back = true;
            this.wizardSteps[this.activeStep].active = false;
            this.activeStep--;
            this.wizardSteps[this.activeStep].active = true;
        }
    }
}
</script>

<style scoped lang="scss">
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

    .step-component {
    }
}
</style>

<style>
.navigation-container {
    margin-top:50px;
}
</style>
