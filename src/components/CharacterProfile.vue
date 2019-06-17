<template>
    <div>
        <h1>Character Profile</h1>
        <h2>{{ character.name }}</h2>
        <ul>
            <li>
                <p>Eye Colour: {{ character.eye_color }}</p>
            </li>
            <li>
                <p>Age: {{ character.age }}</p>
            </li>
            <li>
                <p>Gender: {{ character.gender }}</p>
            </li>
            <li>
                <p>Hair Colour: {{ character.hair_color }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CharacterProfile',

    data() {
        return  {
            character: [],
            allCharacters: [],
        }
    },

    mounted() {
        this.$axios.get('people?limit=250')
            .then((res) => {
                this.allCharacters = res.data
                this.getCharacter()
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.log(e)
            })
    },

    methods: {
        getCharacter() {
            this.character = this.allCharacters.filter((char) => {
                return char.name.split(' ').join('-').toLowerCase() === this.$route.params.name
            })
            this.character = this.character[0]
        },
    }
}
</script>

