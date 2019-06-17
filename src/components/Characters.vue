<template>
    <div>
        <Nav v-model="search"/>
        <div class="flex flex-col">
            <h1 class="text-4xl text-center mt-4">🙋‍♂️ Characters 🙋‍</h1>
            <input v-model="search" type="text" placeholder="Search..." class="outline-none focus:shadow-outline focus:bg-blue-100 w-1/4 p-2 mx-auto mx-6 outline-none focus:shadow-outline rounded-sm bg-gray-100 rounded">
        </div>
        <Loading v-if="loading"/>
        <div v-else class="mx-auto">
            <ul class="flex flex-wrap mb-4 mx-2 mt-4">
                <li v-for="character in filteredCharacters" :key="character.id" class="sm:w-1/3 w-full">
                    <CharacterCard :character="character"/>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from './Misc/Nav'
import Footer from './Misc/Footer'
import CharacterCard from './CharacterCard'
import Loading from './Misc/Loading'

export default {
    name: 'Characters',

    components: {
        Nav,
        Footer,
        CharacterCard,
        Loading,
    },

    data() {
        return {
            characters: [],
            search: '',
            loading: true,
        }
    },

    mounted() {
        this.$axios.get('people?limit=250')
            .then((res) => {
                this.characters = res.data
                this.loading = false
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
