<template>
    <Button id="shout-button" :class="{ shrunk: disabled }" label="" @click.prevent="onClick">
     <img src="../assets/shout.png" height="60"/>
    </Button>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';
import { useTextStore } from '../stores/text'
import { useCounterStore } from '../stores/counter';

const disabled = ref(false)
const textStore = useTextStore()
const counterStore = useCounterStore()
const setCount = () => {
    counterStore.updateCount()
}
const onClick = () => {
    textStore.eraseText()
    setCount()
    disabled.value = true
    setTimeout(() => {
        disabled.value = false
    }, 1500)
}
</script>

<style>
#shout-button {
    border-radius: 50px;
    align-self: center;
    margin-top: 20px;
}

.shrunk {
    transition-property: -webkit-transform;
    transition-duration: 1s;
    animation-name: shrink;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}

@keyframes shrink {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0);
    }
}
</style>