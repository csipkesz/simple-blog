<template>
    <div>
        <div class="row pt-16 pb-8 pl-4 font-bold text-5xl">Legfrisebb cikkeink</div>


        <div class="container flex flex-wrap">
            <ArticleCard v-for="article in articles" :article="article"/>
        </div>
    </div>
</template>

<script setup>
import ArticleCard from '../../components/ArticleCard.vue';

const articles = [
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 5, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 6, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 7, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 8, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 9, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 10, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 11, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 12, title: 'This is the hír, Johny Gold is here'},
{image: 'https://wallpaperaccess.com/full/138728.jpg', readTime: 13, title: 'This is the hír, Johny Gold is here'},
]
</script>

<style>
.nuxt-icon svg{
  display: inline-flex;
}
</style>