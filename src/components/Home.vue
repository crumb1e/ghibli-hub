<template>
    <div>
        <nav class="sticky w-full z-10 top-0 bg-white">
            <div class="flex border-b mx-auto content-center items-center justify-between mt-0 py-3">
                <h1 class="flex-1 pl-4 text-xl font-semibold">Ghibli Hub</h1>
                <input v-model="search" type="text" placeholder="Search..." class="flex-1 mx-6 outline-none focus:shadow-outline rounded-sm">
            </div>
        </nav>
        <div class="mx-auto">
            <ul class="flex flex-wrap mb-4 mx-2 mt-4">
                <li v-for="film in filteredFilms" :key="film.id" class="sm:w-1/3 w-full">
                    <div @click="showFilm(film.id)" class="flex flex-col justify-between h-40 bg-teal-100 border-l-2 border-teal-600 rounded m-2 py-2 px-4 hover:shadow-md cursor-pointer">
                        <h2 class="text-xl mb-2">
                            {{ film.title }}
                        </h2>
                        <div>
                            <div class="">
                                Released: <span class="text-green-400">{{ film.release_date }}</span>
                            </div>
                            <div class="text-sm">
                                RT Score: <span class="text-green-400">{{ film.rt_score }}%</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer'

export default {
    name: 'Home',

    components: {
        Footer,
    },

    data() {
        return {
            films: [],
            search: '',
        }
    },

    mounted() {
        this.$axios.get('films')
            .then((res) => {
                this.films = res.data
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

