<template>
    <div>
        <div class="row pt-16 pb-8 pl-4 font-bold text-5xl">Legfrisebb cikkeink</div>


        <div class="container flex flex-wrap">
            <div class="h-full p-4 lg:w-1/4">
                <div class="max-w-sm relative">
                    <img class="rounded-xl" src="https://wallpaperaccess.com/full/138728.jpg" alt="" />
                    <div class="absolute text-xs text-white bg-red-500 rounded-xl p-2 top-5 right-5"> <nuxt-icon name="timer"/>3 perc</div>

                    <div class="pt-2 pb-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight">This is the hír, Johny is Here</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.nuxt-icon svg{
  display: inline-flex;
}
</style>