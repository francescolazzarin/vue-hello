const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Vue!',
        center:'text-center'
      }
    }
  }).mount('#app')