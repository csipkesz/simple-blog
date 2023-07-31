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
                    <li class="md:p-4 py-2 block text-xl hover:font-bold"><NuxtLink to="/post/1">Menüpont</NuxtLink></li>
                    <li class="md:p-4 py-2 block text-xl hover:font-bold"><NuxtLink to="/post/">Blog</NuxtLink></li>
                    <li class="md:p-4 py-2 block text-xl hover:font-bold"><NuxtLink to="/post/1">Menüpont</NuxtLink></li>
                    <li class="md:p-4 py-2 block text-xl hover:font-bold"><NuxtLink to="/post/1">Menüpont</NuxtLink></li>
                    
                </ul>
            </div>
        </nav>
    </header>
    <div class="container px-16 p-4">
        <slot />
    </div>
</template>

<script setup>
onMounted(() => {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    
    
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
})
</script>