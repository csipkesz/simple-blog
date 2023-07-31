<template>
    <header>
        <nav>
            <NuxtLink to="/">HOME</NuxtLink>
            <ul>
                <li><NuxtLink to="/post/1">Post</NuxtLink></li>
            </ul>

        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>