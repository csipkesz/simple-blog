<template>
    <div>
        <h2>BLOG POST FOR {{ postId }}</h2>
    </div>
</template>

<script setup>
    const { id: postId } = useRoute().params;
</script>

<style scoped>

</style>