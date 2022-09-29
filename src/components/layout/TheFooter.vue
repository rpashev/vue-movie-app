<template>
    <footer class="footer">
        <p> &#169; Copyright MyMovies Inc. 2021</p>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: absolute;
    bottom: 0;
    height: 4rem;
    width: 100%;
    background: $gray-darkest;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: none;

    p {
        font-size: 0.85rem;
    }
}
</style>