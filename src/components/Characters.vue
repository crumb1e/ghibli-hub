<template>
    <div>
        <Nav v-model="search"/>
        <div class="mx-auto">
            <ul class="flex flex-wrap mb-4 mx-2 mt-4">
                <li v-for="character in filteredCharacters" :key="character.id" class="sm:w-1/3 w-full">
                    <Character :character="character"/>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from './Nav'
import Footer from './Footer'
import Character from './Character'

export default {
    name: 'Characters',

    components: {
        Nav,
        Footer,
        Character,
    },

    data() {
        return {
            characters: [],
            search: '',
        }
    },

    mounted() {
        this.$axios.get('people?limit=250')
            .then((res) => {
                this.characters = res.data
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.log(e)
            })
    },

    computed: {
        filteredCharacters() {
            return this.characters.filter(character => {
                return character.name.toLowerCase().includes(this.search.toLowerCase())
            }).sort((a, b) => a.name.localeCompare(b.name))
        }
    },
}
</script>
