<template>
    <div @click="showFilm(film.id)" class="flex flex-col justify-between h-40 bg-teal-100 border-l-8 border-teal-600 rounded-lg m-2 py-2 px-4 hover:shadow-md cursor-pointer">
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
</template>

<script>
export default {
    name: 'FilmCard',

    props: {
        film: {
            type: Object,
            required: true,
        }
    },
}
</script>
