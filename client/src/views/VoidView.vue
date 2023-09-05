<template>
    <Suspense>
        <div class="container">
            <div class="description-container">
                <app-description />
            </div>
            <div class="counter-container">
                <app-counter />
            </div>
            <div v-if="formStore.isVisible" class="form-container">
                <app-form />
            </div>
        </div>
    </Suspense>
</template>

<script setup>
import AppDescription from '../components/AppDescription.vue';
import AppForm from '../components/AppForm.vue';
import AppCounter from '../components/AppCounter.vue';

import { useFormStore } from '../stores/form'
const formStore = useFormStore()
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description-container {
  padding-bottom: 30px;
}

.counter-container { 
  padding-bottom: 30px;
}

.form-container {
  width: 25em;
}

.p-inputtextarea {
  width: 100%; 
}
</style>