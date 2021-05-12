<template>
    <div class="autofill-container">
        <div class="full-text-block">
                <p>“ Sunt o persoana
                <span class="sm-select cursor-pointer position-relative" @click.self="toggleDropdown(0)">
                {{dropdownsCopy[0].selectedOption ? dropdownsCopy[0].selectedOption : '________' }}
                    <span class="dropdown position-absolute" v-if="dropdownsCopy[0].opened">
                        <span v-for="(option, index) of dropdownsCopy[0].options"
                              :key="index"
                              @click="chooseOption(0, option)"
                              class="cursor-pointer"
                        >
                            {{option}}
                        </span>
                    </span>
                </span>
                    <span> , </span>
                <span class="sm-select cursor-pointer position-relative" @click.self="toggleDropdown(1)">
                {{dropdownsCopy[1].selectedOption ? dropdownsCopy[1].selectedOption : '________' }}
                <span class="dropdown position-absolute" v-if="dropdownsCopy[1].opened">
                    <span v-for="(option, index) of dropdownsCopy[1].options"
                          :key="index"
                          @click="chooseOption(1, option)"
                    >
                        {{option}}
                    </span>
                </span>
                </span>

                si
                <span class="sm-select cursor-pointer position-relative" @click.self="toggleDropdown(2)">
                {{dropdownsCopy[2].selectedOption ? dropdownsCopy[2].selectedOption : '________' }}
                <span class="dropdown position-absolute" v-if="dropdownsCopy[2].opened">
                    <span v-for="(option, index) of dropdownsCopy[2].options"
                          :key="index"
                          @click="chooseOption(2, option)"
                    >
                        {{option}}
                    </span>
                </span>
            </span>
                 ,
                dornica să lucreze.
                <br/>
                Am o înțelegere de baza a  proceselor financiare   și cunostințe în contabilitate. “</p>
            </div>

    </div>
</template>

<script>
export default {
    name: "SmAutofillText",
    props: {
        textBlock: {
            type: String
        },
        dropdowns: {
            type: Array
        }
    },
    data() {
        return  {
            dropdownsCopy: JSON.parse(JSON.stringify(this.dropdowns))
        }
    },
    methods: {
        toggleDropdown(index) {
            this.dropdownsCopy[index].opened = !this.dropdownsCopy[index].opened;
            this.closeAllDropdowns(index)
        },
        chooseOption(index, option) {
            this.dropdownsCopy[index].selectedOption = option;
            this.closeAllDropdowns()
        },
        closeAllDropdowns(index = false) {
            this.dropdownsCopy.forEach((dropdown, key) => {

                if (index !== key) {
                    dropdown.opened = false
                }

            })
        }
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
.autofill-container {
    background: #ECF1F4;
    border-radius: 8px;
    padding: 40px 30px;
}
    .sm-select {
        width: auto;
        min-width: 50px;
        border-bottom: 3px solid #053AFA;
    }

    .full-text-block {
        text-align: left;
    }

    .dropdown {

        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        top:0;
        left:0;
        z-index: 2;
        padding:4px;
    }

    .cursor-pointer {
        cursor: pointer;
    }
</style>
