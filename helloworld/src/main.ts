import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.directive('font-size', {
    beforeMount: (el) =>{
        el.style.fontSize = `26px`
    }
})

app.directive('custom-font-size', {
    beforeMount: (el, binding) =>{
        el.style.fontSize = `${binding.value}px`
    }
})

app.mount('#app');
