<template>
    <div class="container mx-auto px-4">
        <ul class="flex flex-wrap">
            <li v-for="film in films" class="flex-1 text-center w-1/3 px-4 py-2 m-2 border border-teal-200 rounded bg-grey-300">
                <h2 class="">
                    {{ film.title }}
                </h2>
                <div class="text-gray-500">
                    {{ film.release_date }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            films: [],
        }
    },

    mounted() {
        this.$axios.get('films')
            .then((res) => {
                this.films = res.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
</script>

