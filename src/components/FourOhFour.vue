<template>
    <div>
        <div class="flex h-screen text-center">
            <div class="w-full text-3xl my-auto">
                <h1>
                    Sorry, that page doesn't exist :(
                </h1>
                <a class="text-blue-400" href="/">Go home.</a>
            </div>
        </div>
    <Footer />
    </div>
</template>

<script>
import Footer from './Footer'

export default {
    name: 'FourOhFour',

    components: {
        Footer,
    }
}
</script>
