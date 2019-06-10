import Home from './components/Home.vue'
import Characters from './components/Characters.vue'
import FourOhFour from './components/FourOhFour.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/characters',
        name: 'characters',
        component: Characters,
    },
    {
        path: '*',
        component: FourOhFour,
    }
]