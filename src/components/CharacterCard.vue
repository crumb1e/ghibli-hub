<template>
    <div @click="viewProfile" class="flex flex-col justify-between h-40 bg-teal-100 border-l-8 border-teal-600 rounded-lg m-2 py-2 px-4 hover:shadow-md cursor-pointer">
        <h2 class="text-xl mb-2">
            {{ char.name }}
        </h2>
        <div>
            <div class="">
                Appears in: <span class="text-green-400">{{ filmTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CharacterCard',

    props: {
        character: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            char: this.character,
            filmTitle: '',
        }
    },

    mounted() {
        this.$axios.get(`${this.char.films[0].substring(32)}`)
            .then((res) => {
                this.filmTitle = res.data.title
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.log(e)
            })
    },

    methods: {
        viewProfile() {
            this.$router.push({name: `character`, params: { name: this.char.name.split(' ').join('-').toLowerCase() }})
        }
    }
}
</script>

