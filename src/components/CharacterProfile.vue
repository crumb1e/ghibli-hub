<template>
    <div>
        Character Profile
        <h2>{{ character }}</h2>
        <p>char id: {{ id }}</p>
    </div>
</template>

<script>
export default {
    name: 'CharacterProfile',

    props: ["id"]
}
</script>

