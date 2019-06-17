<template>
    <div>
        <Nav v-model="search"/>
        <div class="mx-auto">
            <div class="flex flex-col">
                <h1 class="text-4xl text-center mt-4">🎬 Films 🎬</h1>
                <input v-model="search" type="text" placeholder="Search..." class="outline-none focus:shadow-outline focus:bg-blue-100 w-1/4 p-2 mx-auto mx-6 outline-none focus:shadow-outline rounded-sm bg-gray-100 rounded">
            </div>
            <Loading v-if="loading"/>
            <ul v-else class="flex flex-wrap mb-4 mx-2 mt-4">
                <li v-for="film in filteredFilms" :key="film.id" class="sm:w-1/3 w-full">
                    <FilmCard :film="film"/>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Misc/Footer'
import Nav from './Misc/Nav'
import Loading from './Misc/Loading'
import FilmCard from './Film/FilmCard'

export default {
    name: 'Home',

    components: {
        Footer,
        Nav,
        Loading,
        FilmCard,
    },

    data() {
        return {
            films: [],
            search: '',
            loading: true,
        }
    },

    mounted() {
        this.$axios.get('films')
            .then((res) => {
                this.films = res.data
                this.loading = false
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.log(e)
            })
    },

    computed: {
        filteredFilms() {
            return this.films.filter(film => {
                return film.title.toLowerCase().includes(this.search.toLowerCase())
            }).sort((a, b) => a.title.localeCompare(b.title))
        },
    },

    methods: {
        showFilm(film) {
            console.log(film)
        },
    },
}
</script>

