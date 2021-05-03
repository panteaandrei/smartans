<template>
    <div class="d-flex button-wrapper align-items-center justify-content-between"
         :class="{active: active, secondary:type === 'secondary', tertiary: type === 'tertiary'}"
         @click="handleClick"
         @mousedown="active = true"
         @mouseup="active = false"
         @mouseleave="active = false"
    >
        <i class="icon-before" :class="iconBefore" v-if="iconBefore"></i>
        <p>{{buttonText}}</p>
        <i class="icon-after" :class="iconAfter" v-if="iconAfter"></i>
    </div>
</template>

<script>
export default {
    name: "SmButton",
    props: {
        buttonText: {
            default:'button',
            type: String
        },
        iconBefore: {
            default: null,
            type: String
        },
        iconAfter: {
            default: null,
            type: String
        },
        type: {
            default: 'primary',
            type: String
        },
        isDisabled: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('handleClick')
        }
    }
}
</script>

<style scoped lang="scss">
    .button-wrapper {
        background: #053AFA;
        box-shadow: 0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4);
        border-radius: 8px;
        padding: 12px 24px;
        cursor: pointer;
        user-select: none;

        &.secondary {
            background: #fff;
            border: 1px solid #D8E1FF;
            box-shadow: none;

            p {
                color:#053AFA;
            }

            i, svg {
                color: #053AFA;
            }
        }

        p {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #FFFFFF;
        }

        i, svg {
            color: #fff;
            font-size:14px;

            &.icon-before {
                margin-right: 10px;
            }
            &.icon-after {
                margin-left: 10px;
            }
        }

        &:hover {
            background: rgba(5, 58, 250, 0.8);
            &.secondary {
                background: rgba(5, 58, 250, 0.05)
            }
        }

        &.active {
            background: #053AFA;
            padding: 10px 22px;
            border: 2px solid #98AEFF;

            &.secondary {
                background: rgba(5, 58, 250, 0.13);
                border: 1px solid #D8E1FF;
                padding: 12px 24px;
            }
        }

        &.disabled {
            background: rgba(5, 58, 250, 0.4);

            &.secondary {
                background: #fff;
                p {
                    color: rgba(5, 58, 250, 0.4);
                }
                i, svg {
                    color: rgba(5, 58, 250, 0.4);
                }
            }
        }
    }
</style>
