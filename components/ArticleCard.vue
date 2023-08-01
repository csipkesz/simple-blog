<template>
    <div class="h-full w-full p-4 lg:w-1/4">
        <NuxtLink :to="`/article/${article.id}`">
            <div class="relative">
                <img class="rounded-xl" :src="article.imageUrl" :alt="article.title" />
                <div class="absolute text-xs text-white bg-red-500 rounded-xl p-2 top-5 right-5"> <nuxt-icon name="timer"/>{{ article.readingTime }} perc</div>
    
                <div class="pt-2 pb-5">
                    <h5 class="mb-2 text-xl font-bold tracking-tight">{{ article.title }}</h5>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps({
    article: {
        imageUrl: String,
        title: String,
        readingTime: Number,
    }
})

onMounted(() => {
    
})

</script>

