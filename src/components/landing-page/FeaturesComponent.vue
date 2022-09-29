<template>
    <section class="section">
        <h2>Why choose our service?</h2>
        <ul class="features">
            <li class="feature">
                <ion-icon name="search-outline"></ion-icon>
                <h3>Large movie database</h3>
                <p>Use the OMDB database to find any movie or tv series you can think of.</p>
            </li>
            <li class="feature">
                <ion-icon name="build-outline"></ion-icon>
                <h3>Build a watchlist</h3>
                <p>Build your own watchlist and keep track of movies you have watched.</p>
            </li>
            <li class="feature">
                <ion-icon name="eye-outline"></ion-icon>
                <h3>Movie details</h3>
                <p>Choose a movie and view its details including a short plot summary.</p>
            </li>
            <li class="feature">
                <ion-icon name="people-outline"></ion-icon>
                <h3>See what's trending</h3>
                <p>Check out what our other users are watching in the "Explore" section.</p>
            </li>
            <li class="feature">
                <ion-icon name="person-circle-outline"></ion-icon>
                <h3>Customize your profile</h3>
                <p>Personalize your account with us by uploading your very own avatar.</p>
            </li>
            <li class="feature">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <h3>Full accessibility</h3>
                <p>Use the application from any device: desktop, tablet or mobile.</p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.section {
    margin-top: 6rem;

    h2 {
        margin-bottom: 3rem;
    }
}

.features {
    margin: 2rem auto 3rem auto;
    list-style: none;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;


}

.feature {
    background: rgba($gray-darkest, 0.9);
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    min-width: 280px;
    max-width: 400px;
    border-radius: 6px;
    width: 25%;
    font-size: 1.1rem;
    color: $gray-darker;

    p {
        width: 95%;
    }

    ion-icon {
        font-size: 2rem;
        background-color: $color-primary-darkest;
        border-radius: 50%;
        padding: 0.8rem;
    }
}

@media (max-width: 40em) {

    .feature {
        width: 100%;
        align-items: center;
        text-align: center;
    }
}
</style>