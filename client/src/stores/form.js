import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
    state: () => ({
      isVisible: false
    }),
    actions: {
      toggleForm() {
        this.isVisible = !this.isVisible
        console.log(this.isVisible)
      }
    },
    getters: {
      formVisible(state) {
        return state.isVisible
      }
    }
  })