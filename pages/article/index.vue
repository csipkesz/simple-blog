<template>
    <section v-if="isError">
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
    </section>
    <section v-else>
        <div class="row pt-16 pb-8 pl-4 font-bold text-5xl">Legfrisebb cikkeink</div>

        <div class="container flex flex-wrap">
            <ArticleCard v-if="articles?.length > 0" v-for="article in articles" :article="article"/>  
            <span class="text-center text-5xl pt-8 font-bold mx-auto" v-else>Loading...</span>
        </div>
    </section>
</template>

<script setup>
import ArticleCard from '../../components/ArticleCard.vue';
import { ref } from 'vue';

let isError = ref(false);
let articles = ref([]);
let articlePage = 1;
const pageSize = 10;
let maxPageCount = 0;

const refreshPage = () => {
    window.location.reload()
};

onMounted(() => {
    const fetchArticles = () => {
        $fetch(`https://trial.peakbit.tech/api/articles/list?page=${articlePage}&pageSize=${pageSize}`, {
            method: 'GET',
            retry: 3,
            async onResponse({ request, response, options }) {
                if(response._data?.errorCode === 999) {
                    isError.value = true;
                    return;
                }
                else {
                    articles.value.push(...response._data.list);
                    articlePage++;
                    maxPageCount = response._data.meta.pageCount;
                }
            }
        }).catch((e) => {
            console.log(e);
        });
    }

    fetchArticles();
    
    window.onscroll = async () => {
        let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow && articlePage <= maxPageCount) {
            console.log({articlePage, maxPageCount})
            fetchArticles();
        }
    }
})


</script>

<style>
.nuxt-icon svg{
  display: inline-flex;
}
</style>