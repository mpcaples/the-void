<template>
    <div>
      <p>{{ msg }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'TestPing',
    data() {
      return {
        msg: 'Hello!',
      };
    },
    methods: {
        getMessage() {
            const path = 'http://localhost:5001/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {

          console.error(error);
        });
        }
    }, 
    created() {
        this.getMessage()
    }
  };
  </script>