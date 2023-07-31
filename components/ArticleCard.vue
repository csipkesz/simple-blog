<template>
    <div class="h-full w-full p-4 lg:w-1/4">
        <div class="relative">
            <img class="rounded-xl" :src="article.image" alt="" />
            <div class="absolute text-xs text-white bg-red-500 rounded-xl p-2 top-5 right-5"> <nuxt-icon name="timer"/>{{ article.readTime }} perc</div>

            <div class="pt-2 pb-5">
                <h5 class="mb-2 text-xl font-bold tracking-tight">{{ article.title }}</h5>
            </div>
        </div>
        <!-- https://wallpaperaccess.com/full/138728.jpg -->
    </div>
</template>

<script setup>

const props = defineProps({
    article: {
        image: String,
        title: String,
        readTime: Number,
    }
})

</script>
