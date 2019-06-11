import Home from './components/Home.vue'
import Characters from './components/Characters.vue'
import FourOhFour from './components/FourOhFour.vue'
import CharacterProfile from './components/CharacterProfile.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/characters/:name',
        name: 'character',
        component: CharacterProfile,
        props: true,
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