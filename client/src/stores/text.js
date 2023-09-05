import { defineStore } from "pinia";

export const useTextStore = defineStore('text', {
    state: () => ({
      text: null,
    }),
    actions: {
      eraseText() {
        this.text = null
      }
    },
  })