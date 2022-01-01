import { createApp } from 'vue'
import App from './App.vue'
import newComponent from './components/newComponent'
import router from './routes'


const app = createApp(App).use(router).mount('#app')
app.Component("new-component", newComponent)
