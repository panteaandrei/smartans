<template>
    <div class="sm-checkbox-container d-flex align-items-center justify-content-center"
        :class="{selected: selected}"
    >
        <label class="pure-material-checkbox">
            <input type="checkbox" v-model="propModel">
            <span>{{label}}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: "SmCheckbox",
    props: {
        name: {
            type: String
        },
        label: {
            type: String
        },
        icon: {
            type: String
        },
        selected: {
            type: Boolean
        }
    },
    computed: {
        propModel: {
            get () { return this.selected },
            set (value) { this.$emit('input', value) },
        },
    },
}
</script>

<style scoped lang="scss">
.sm-checkbox-container {
    background: #FFFFFF;
    /* /Main Navy Blue */

    border: 2px solid #053AFA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px 20px;
    margin: 0 20px 20px 0;

    &.selected {
        background: rgba(5, 58, 250, 0.05);
    }
}

</style>

<style>

.pure-material-checkbox {
    z-index: 0;
    position: relative;
    display: inline-block;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    font-style: normal;
    font-weight: bold;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    /* Slate - Secondary Text */

    color: #424B6B;
}

/* Input */
.pure-material-checkbox > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.pure-material-checkbox > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
}

/* Box */
.pure-material-checkbox > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 1px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 4px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
}

/* Checkmark */
.pure-material-checkbox > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
}

/* Checked, Indeterminate */
.pure-material-checkbox > input:checked,
.pure-material-checkbox > input:indeterminate {
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::before,
.pure-material-checkbox > input:indeterminate + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::after,
.pure-material-checkbox > input:indeterminate + span::after {
    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
}

.pure-material-checkbox > input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
}

/* Hover, Focus */
.pure-material-checkbox:hover > input {
    opacity: 0.04;
}

.pure-material-checkbox > input:focus {
    opacity: 0.12;
}

.pure-material-checkbox:hover > input:focus {
    opacity: 0.16;
}

/* Active */
.pure-material-checkbox > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
}

.pure-material-checkbox > input:active + span::before {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
}

/* Disabled */
.pure-material-checkbox > input:disabled {
    opacity: 0;
}

.pure-material-checkbox > input:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    cursor: initial;
}

.pure-material-checkbox > input:disabled + span::before {
    border-color: currentColor;
}

.pure-material-checkbox > input:checked:disabled + span::before,
.pure-material-checkbox > input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
}

</style>
