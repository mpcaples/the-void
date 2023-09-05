import { defineStore } from 'pinia'
import { db } from '../includes/firebase.js'
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 2
  }),
  getters: {
    getCount() {
        return this.count
    }
  },
  actions: {
    async fetchCount() {
        let countCollection = await getDocs(collection(db, 'count'))
        countCollection.forEach((count)=>{
            this.count = count.data().count
        })
    }, 
    async updateCount() {
        this.count = this.count + 1
        await updateDoc(doc(db, 'count', 'u0KQqwvYk5ulYc7idM7l'), {count: this.count})
    }
  }
})
