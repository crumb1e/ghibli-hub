<template>
    <nav class="sticky w-full z-10 top-0 bg-white">
        <div class="flex border-b mx-auto content-center items-center justify-between mt-0 py-3">
            <h1 class="flex-1 pl-4 text-xl font-semibold cursor-pointer">Ghibli Hub</h1>
            <ul>
                <li>
                    <router-link to="characters">Characters</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        search: {
            type: String,
        }
    },
}
</script>

