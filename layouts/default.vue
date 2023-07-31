<template>
    <header class="shadow-md bg-white">
        <nav class="container mx-auto p-6 flex justify-between">
            <NuxtLink to="/">HOME</NuxtLink>
            <ul class="flex gap-7">
                <li><NuxtLink to="/post/1">Menüpont</NuxtLink></li>
                <li><NuxtLink to="/post/">Blog</NuxtLink></li>
                <li><NuxtLink to="/post/3">Menüpont</NuxtLink></li>
                <li><NuxtLink to="/post/4">Menüpont</NuxtLink></li>
            </ul>

        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>