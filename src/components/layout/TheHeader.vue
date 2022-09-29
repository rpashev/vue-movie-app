<template>
    <header class="header">
        <div class="logo-container">

        </div>
        <nav class="nav">
            <ul>
                <li v-if="!isLoggedIn">
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link class="link" to="/login">Login</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link class="link" to="/register">Register</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/database">Database</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/explore">Explore</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/watchlist">Watchlist</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/seenlist">Watched</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/profile">Profile</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="link" to="/logout">Logout</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useUserStore } from '@/store';
import { computed } from '@vue/reactivity';

const user = useUserStore();

const isLoggedIn = computed(() => user.isLoggedIn);


</script>

<style scoped lang="scss">
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $gray-darkest;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    z-index: 100;

}

.nav {
    margin-right: 5rem;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    a:active,
    a.router-link-active {
        color: $color-primary;
    }
}

.logo-container {
    margin-left: 3rem;
    height: 100%;
    width: 12rem;
    min-width: 6rem;
    background: url("../../assets/logo.png") center/cover no-repeat;
}

.link {
    font-size: 1rem;
    color: $gray-light;
    text-decoration: none;
    transition: all 0.25s ease-out;
    text-transform: uppercase;
    display: block;
    backface-visibility: hidden;

    &:hover {
        color: $color-primary;
        transform: scale(1.05) rotate(2deg);
    }
}

@media (max-width: 62.5em) {
    .header {
        .logo-container {
            margin: 0 auto;
            width: 9rem;
        }

        .nav__links {
            display: none;
        }
    }
}
</style>