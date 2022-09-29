<template>
    <div class="home-page">
        <div class="img">
            <HomeIntro />
        </div>
        <FeaturesComponent />
        <FeedbackComponent />
    </div>
</template>

<script setup>
import HomeIntro from '@/components/landing-page/HomeIntro.vue';
import FeaturesComponent from '@/components/landing-page/FeaturesComponent.vue';
import FeedbackComponent from '@/components/landing-page/FeedbackComponent.vue';</script>

<style scoped lang="scss">
.home-page {
    .img {
        height: calc(100vh - 6rem);
        max-height: calc(100vh - 6rem);
        width: 100%;
        background: url("https://res.cloudinary.com/rpashev/image/upload/v1643814818/movie-app/background_ct8pfj.webp") center/cover no-repeat;
        filter: grayscale(50%);
        padding-top: 4rem;
    }
}

@media (max-width: 22em) {
    .home-page {
        .img {
            padding-top: 3rem;
        }
    }
}
</style>