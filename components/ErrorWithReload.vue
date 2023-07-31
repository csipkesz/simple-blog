<template>
    <div class="text-center pt-16">
        <div class="text-9xl">
            <nuxt-icon name="magnifier"/>
        </div>
        <p class="text-2xl pt-6 pb-2 font-bold">Valami hiba történt!</p>
        <p class="text-lg">Kérjük győzödj meg róla, hogy az internetkapcsolattal minden rendben van-e.</p>
        <button class="text-white text-xl bg-[#E9291B] p-3 border rounded-2xl mt-16 tracking-widest" @click="refreshPage()">
            <nuxt-icon  name="reload"/>
            <span>Újratöltés</span>
        </button>
    </div>
</template>

<script setup>
const refreshPage = () => {
    window.location.reload()
};
</script>