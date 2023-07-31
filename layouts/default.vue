<template>
    <TheHeader />
    <div class="container mx-auto px-16 p-4">
        <slot />
    </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue';

</script>