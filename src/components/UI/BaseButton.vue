<template>
    <button v-if="!link" :class="mode" class="button">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode" class="button">
        <slot></slot>
    </router-link>
</template>

<script setup>
import { defineProps } from "vue";


defineProps({
    mode: {
        type: String,
        required: false,
        default: null,
    },
    link: {
        type: Boolean,
        required: false,
        default: false,
    },
    to: {
        required: false,
        default: "/",
    },
})
</script>

<style scoped lang="scss">
.button {
    border: none;
    font: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: $gray-darkest;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.5rem 2.5rem;
    border-radius: 4px;
    background: $gray-light;
    min-width: 6rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
    letter-spacing: 0.5px;

    &:hover,
    &:active,
    &:focus {
        outline: none;
        background: yellow;
    }
}

.danger {
    background: $danger;
    border-color: #830000;
    color: $gray-darkest;

    &:hover,
    &:active {
        background: #f34343;
        border-color: #f34343;
        color: $gray-darkest;
    }
}

.yellow {
    background: yellow;
    border-color: none;

    &:hover,
    &:active {
        background: $gray-light;
        color: $gray-darkest;
    }
}

.primary {
    background: $color-primary;
    border-color: none;

    &:hover,
    &:active {
        background: lighten($color-primary, 25%);
        color: $gray-darkest;
    }
}

.dark {
    background: $gray-darkest;
    color: $gray-light;
    border-color: none;

    &:hover,
    &:active {
        background: $gray-light;
        color: $gray-darkest;
    }
}

.button:disabled,
.button:hover:disabled,
.button:active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
}

@media (max-width: 40rem) {
    .button {
        width: 100%;
    }
}
</style>