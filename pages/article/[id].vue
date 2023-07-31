<template>
    <div>
        <h2>BLOG POST FOR {{ postId }}</h2>
    </div>
</template>

<script setup>
    const { id: postId } = useRoute().params;

    onMounted(async () => {
        const articleToken = window.articleToken;
        const tokenResult = await $fetch('https://trial.peakbit.tech/api/token/generate/WEB', {
            method: 'POST',
        });

        console.log({tokenResult})

        if(!tokenResult) {
            console.error('Article token get is failed.', tokenResult);
        }
    })
</script>

<style scoped>

</style>