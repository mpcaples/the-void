<template>
    <Card>
        <template #title> Shout Counter </template>
        <template #content>
            <p>
                {{ counterStore.getCount }}
            </p>
        </template>
    </Card>
</template>

<script setup>
import {onMounted} from 'vue'
import Card from 'primevue/card';
import {useCounterStore} from '../stores/counter';

const counterStore = useCounterStore()
onMounted(() => {
    counterStore.fetchCount()
})
</script>
