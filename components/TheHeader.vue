<template>
    <header class="shadow-md bg-white">
        <nav class="flex flex-wrap items-center justify-between py-4 md:py-0 px-16 text-lg text-gray-700 bg-white">
            <div>
                <NuxtLink to="/"><img class="max-w-sm content-center p-3" src="~/assets/images/p_logo.png"></NuxtLink> 
            </div>
        
            <button id="menu-button" class="text-3xl cursor-pointer md:hidden block">
                <nuxt-icon name="menu"/>
            </button>
        
            <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul
                    class="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0"
                >
                    <li v-for="menuPoint in menuPoints" class="md:p-4 py-2 block text-xl hover:font-bold">
                        <NuxtLink :to="menuPoint.to">{{ menuPoint.name }}</NuxtLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
onMounted(() => {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    
    
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
})

const menuPoints = [
    { name: 'Menüpont', to: '/' },
    { name: 'Blog', to: '/article' },
    { name: 'Menüpont', to: '/a' },
    { name: 'Menüpont', to: '/b' },
];
</script>