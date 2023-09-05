<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                
            </template>
            <template #title>The Void</template>
            <template #subtitle>release your inner thoughts</template>
            <template #content>
                <p>
                    Unburden your mind by typing up your thoughts and shouting them into the void 
                </p>
            </template>
            <template #footer>
                <Button label="I'm ready" @click.prevent="formStore.toggleForm()"/>
                <Button label="Nevermind" severity="secondary" style="margin-left: 0.5em" @click.prevent="formStore.isVisible = false" />
            </template>
        </Card>
    </div>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';

import { useFormStore } from '../stores/form'
const formStore = useFormStore()
</script>