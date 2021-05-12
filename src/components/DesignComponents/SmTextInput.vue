<template>
    <div class="sm-text-input d-flex align-items-start justify-content-center flex-column"
         :class="{'has-error': error, 'disabled': disabled, 'success': success}"
    >
        <label :for="'sm-text-input_' + name">{{label}}</label>
        <input
            v-if="type === 'input'"
            type="text"
            class="text-input w-100"
            :name="name"
            :id="'sm-text-input_' + name"
            :placeholder="label"
            v-model="propModel"
        />
        <textarea
            v-else-if="type === 'textarea'"
            class="text-input w-100"
            :name="name"
            :id="'sm-text-input_' + name"
            :placeholder="label"
            v-model="propModel"
        ></textarea>
        <date-picker
            v-model="propModel"
            :name="name"
            :range="true"
            :clearable="false"
            :range-separator="'    ~    '"
            :placeholder="label"
            v-else-if="type === 'date'"
        ></date-picker>

        <svg v-if="error" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="info-icon position-absolute">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.75 6V14H11.25V6H12.75ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#D6072C"/>
        </svg>
        <svg v-if="success" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="info-icon position-absolute">
            <path d="M1 7.5L4.58579 11.0858C5.36684 11.8668 6.63316 11.8668 7.41421 11.0858L17.5 1" stroke="#01B132" stroke-width="1.5"/>
        </svg>
        <svg v-if="disabled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="info-icon position-absolute">
            <path d="M12.9497 12.8492C10.2161 15.5829 5.78392 15.5829 3.05025 12.8492C0.316582 10.1156 0.316582 5.68342 3.05025 2.94975M12.9497 12.8492C15.6834 10.1156 15.6834 5.68342 12.9497 2.94975C10.2161 0.216077 5.78392 0.216077 3.05025 2.94975M12.9497 12.8492L3.05025 2.94975" stroke="#8C8CA2" stroke-width="1.5"/>
        </svg>


        <p class="error position-absolute" v-if="error">{{error}}</p>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    name: "SmTextInput",
    components:{DatePicker},
    props: {
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        value: {
            type: [ String, Array ],
            required: true,
        },
        error: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        success: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'input'
        }
    },
    data() {
        return {
            formatDate: {
                stringify: (date) => {
                    return date
                }
            }
        }
    },
    methods: {

    },
    computed: {
        propModel: {
            get () { return this.value },
            set (value) { this.$emit('input', value) },
        },
    },
}
</script>

<style scoped lang="scss">
    .sm-text-input {

        margin-bottom: 30px;

        &.has-error {
            .text-input, & /deep/ .mx-input {
                background: #fff;
                box-shadow: 0 0 0 2px #FBE6EA;
                border: 1px solid #D6072C;
            }
        }

        &.success{
            .text-input, & /deep/ .mx-input {
                background: #fff;
                box-shadow: 0 0 0 2px rgba(1, 177, 50, 0.16);
                border: 1px solid #01B132;
            }
        }

        &.disabled {
            .text-input, & /deep/ .mx-input {
                background: #FAFCFE;
                pointer-events: none;
            }
        }

        .text-input, & /deep/ .mx-input {
            background: #ECF1F4;
            border-radius: 8px;
            padding: 10px 13px 12px;
            box-shadow: 0 0 0 2px transparent;
            border: 1px solid transparent;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 140%;
            color: #0E0E2C;
            height:48px;

            &::placeholder {
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 140%;
                color: #636F99;
            }

            &:hover, &:focus {
                box-shadow: 0 0 0 2px rgba(5, 58, 250, 0.12);
                border: 1px solid #053AFA;
                box-sizing: border-box;
                background: #fff;
                outline: none;
            }
        }

        textarea {
            min-height:150px;
        }

        label {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 140%;
            color: #424B6B;
            margin-left: 16px;
            margin-bottom: 8px;
        }

        .error {
            bottom:10px;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 140%;
            color: #D6072C;
            margin: 0 0 0 16px;
        }

        .info-icon {
            right: 18px;
            top: 40px;
        }

        & /deep/ .mx-icon-calendar {
            display: none;
        }

        & /deep/ .mx-datepicker-range {
            width:100%;
        }

    }
</style>
