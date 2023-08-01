<template>

    <div v-if="isError"><ErrorWithReload /></div>
    <div v-else-if="isLoading" id="loading" class="w-1/2 mx-auto pt-8" />
    <div class="container" v-else>
        <div class="h-96 rounded-b-3xl bg-cover bg-center relative" :style="{ backgroundImage: `url(${imageUrl})`}">
            <div class="absolute text-xs text-white bg-red-500 rounded-xl p-2 bottom-5 right-7"> <nuxt-icon name="timer"/>Olvasási idő: {{ readingTime }} perc</div>
        </div>
        <div class="w-1/2 mx-auto pt-8">
            <h1 class="article-title lg:text-5xl text-2xl font-bold tracking-wide">{{ title }}</h1>
            <div class="article-description pt-10 lg:text-lg text-sm" v-html="sanitizeHtml(description)">
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import ErrorWithReload from '~/components/ErrorWithReload.vue';
    import sanitizeHtml from 'sanitize-html';
    import { ref } from 'vue';
    import loading from '~/assets/animations/loading.json'
    const nuxtApp = useNuxtApp();

    const { id: postId } = useRoute().params;

    let isLoading = ref(true)
    let isError = ref(false);
    let title = ref(null);
    let description = ref(null);
    let readingTime = ref(null);
    let imageUrl = ref(null)

    onMounted(async () => {
        nuxtApp.$lottie.loadAnimation({
            container:  document.getElementById('loading'), // the dom element that will contain the animation
            loop: true,
            autoplay: true,
            animationData: loading
        })

        const getNewToken = async () => {
            const tokenResult = await $fetch('https://trial.peakbit.tech/api/token/generate/WEB', {
                method: 'POST',
            });
            window.articleToken = tokenResult.token;
            return tokenResult.token;
        };

        const refreshToken = async () => {
            const token = window.articleToken;
            const refreshResult = await $fetch(`https://trial.peakbit.tech/api/token/renew`, {
                method: 'PUT',
                headers: {
                    'X-TOKEN': token,
                    accept: 'application/json'
                }
            });
        };

        let articleToken = window.articleToken;
        if(!articleToken) {
            articleToken = await getNewToken();
        }

        const fetchArticle = () => {
            isLoading.value = true;
            $fetch(`https://trial.peakbit.tech/api/articles/get/${postId}`, {
                method: 'GET',
                headers: {
                    'X-TOKEN': articleToken,
                    accept: 'application/json'
                },
                async onResponse({ request, response, options }) {
                    if(response._data?.errorCode === 401) {
                        await refreshToken();
                        fetchArticle();
                        return;
                    }
                    else if(response._data?.errorCode === 999) {
                        isError.value = true;
                        return;
                    }
                    else if(response._data.id) {
                        title.value = response._data.title;
                        description.value = response._data.description;
                        readingTime.value = response._data.readingTime;
                        imageUrl.value = response._data.imageUrl;
                        isLoading.value = false;
                    }
                }
            }).catch((e) => {
                console.log(e);
            });
        };

        fetchArticle();

    })
</script>

<style scoped>

</style>