<template>
    <nav class="sticky w-full z-10 top-0 bg-white">
        <div class="flex border-b mx-auto content-center items-center justify-between mt-0 py-3">
            <h1 class="flex-1 pl-4 text-xl font-semibold">Ghibli Hub</h1>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        search: {
            type: String,
        }
    }
}
</script>

