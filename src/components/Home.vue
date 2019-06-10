<template>
    <div>
        <div class="top-0 border-b-2 w-full text-center py-2 sticky bg-white">
            <div class="flex items-center">
                <h1 class="flex-1">Ghibli Hub</h1>
                <input v-model="search" type="text" placeholder="Search..." class="flex-1 mx-6 outline-none focus:shadow-outline rounded-sm">
            </div>
        </div>
        <div class="container mx-auto px-4">
            <ul class="flex flex-wrap">
                <li v-for="film in filteredFilms" :key="film.id" class="max-w-sm w-1/3">
                    <div class="w-full px-6 py-4">
                        <h2 class="text-xl mb-2">
                            {{ film.title }}
                        </h2>
                        <div>
                            <div class="text-gray-500 text-base">
                                {{ film.release_date }}
                            </div>
                            <div class="text-sm">
                                RT Score: <span class="text-green-400">{{ film.rt_score }}%</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

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
            })
        }
    }
}
</script>

