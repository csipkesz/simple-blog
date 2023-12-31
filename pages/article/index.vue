<template>
    <section v-if="isError">
        <ErrorWithReload />
    </section>
    <section class="p4 scroll-smooth" v-else >
        <div class="row pt-16 pb-8 pl-4 font-bold text-5xl">Legfrisebb cikkeink</div>

        <div class="container flex flex-wrap">
            <TransitionGroup  name="article-list">
                <ArticleCard v-for="article in articles" :article="article" :key="article.id"/>  
            </TransitionGroup >
            <div v-if="articles?.length < 1" id="loading" class="w-1/2 mx-auto pt-8" />
        </div>
    </section>
</template>

<script setup>
import ArticleCard from '~/components/ArticleCard.vue';
import ErrorWithReload from '~/components/ErrorWithReload.vue';
import loading from '~/assets/animations/loading.json'
import { ref } from 'vue';

let isError = ref(false);
let articles = ref([]);
let articlePage = 1;
const pageSize = 10;
let maxPageCount = 0;

onMounted(() => {
    const nuxtApp = useNuxtApp();
    nuxtApp.$lottie.loadAnimation({
        container:  document.getElementById('loading'), // the dom element that will contain the animation
        loop: true,
        autoplay: true,
        animationData: loading
    });

    const windowHasScrollbar = () => {
        return document.body.scrollHeight > window.innerHeight;
    }

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

                    if(!windowHasScrollbar()) { //if the page is too big and there is no scrollbar we will load more (2k)
                        onScroll();
                    }
                }
            }
        }).catch((e) => {
            console.log(e);
        });
    }

    fetchArticles();
    
    const onScroll = () => {
        let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if ((bottomOfWindow || !windowHasScrollbar()) && articlePage <= maxPageCount) {
            fetchArticles();
        }
    }
    window.onscroll = () => { onScroll(); }
})


</script>

<style>
.nuxt-icon svg{
  display: inline-flex;
}

.article-list-enter-active,
.article-list-leave-active {
  transition: all 1s ease;
}
.article-list-enter-from,
.article-list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>