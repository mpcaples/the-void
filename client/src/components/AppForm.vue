<template>
    <Card>
        <template #content>
            <Textarea v-model="textStore.text" autoResize rows="5" cols="30"/>
            <app-button />
        </template>
    </Card>
</template>

<script setup>
import Textarea from 'primevue/textarea';
import Card from 'primevue/card'
import AppButton from '../components/AppButton.vue';
import { useTextStore } from '../stores/text'

const textStore = useTextStore()
</script>

<style>
.p-card-content	{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>