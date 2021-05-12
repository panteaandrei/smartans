<template>
    <div class="d-flex flex-column align-items-start justify-content-center w-100 step-content mt-5">
        <div class="tabs d-flex align-items-center justify-content-start w-100">
            <div class="tab" @click="switchTab('choose')" :class="{active: activeTab === 'choose'}">Alege experiența</div>
            <div class="tab" @click="switchTab('no-experience')" :class="{active: activeTab === 'no-experience'}">Nu am experiență</div>
        </div>
        <div class="add-experience col-md-9 d-flex flex-column" v-if="activeTab === 'choose'">
            <div class="experience-tab row mt-5" v-for="(experience, index) in workExperience" :key="index">
                <div class="col-6" v-for="(field, index2) in Object.keys(experience)"
                     :class="{'col-12':field === 'attributions'}"
                     :key="index2">
                    <sm-text-input
                        :type="field === 'attributions' ? 'textarea' : field === 'period'  ? 'date' : 'input'"
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
        <div class="no-experience col-md-9" v-else>

        </div>
    </div>
</template>

<script>

import {mapFields} from 'vuex-map-fields';
import SmTextInput from "@/components/DesignComponents/SmTextInput";
import SmButton from "@/components/DesignComponents/SmButton";

export default {
    name: "WizardStepTwo",
    components: {SmButton, SmTextInput},
    data() {
        return {
            activeTab: 'choose'
        }
    },
    methods: {
        switchTab(val) {
            this.activeTab = val;
        },
        checkError(index, field) {

            if (this.workExperience[index][field].required && this.workExperience[index][field].value.length) {
                this.workExperience[index][field].error = ''
            }
        },
        addExperience() {
            this.$store.dispatch('addWorkExperienceAction')
        }
    },
    computed: {
        ...mapFields([
            'cv.workExperience'
        ]),
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
</style>
