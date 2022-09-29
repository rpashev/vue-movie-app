<template>
    <section class="prompt">
        <h1>
            Welcome to <span>MyMovies</span>
        </h1>
        <h3>Your personal movie management tool</h3>
        <p>Start building your custom lists today!</p>
        <base-button mode="primary" link to="/register">
            Sign Up
        </base-button>
        <p>Already have an account?</p>
        <base-button mode="primary" link to="login">
            Login
        </base-button>
    </section>
</template>

<style scoped lang="scss">
.prompt {
    padding: 1rem 2rem 1.5rem 2rem;
    width: 35rem;
    margin: 0 auto;
    background: rgba($gray-darkest, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgb(0, 0, 0);

    h1,
    h3 {
        margin-bottom: 1rem;
        text-align: center;
        text-transform: none;

        span {
            color: $color-primary;
            font-weight: 700;
        }
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    h3 {
        opacity: 0.85;
    }

    p {
        margin: 1rem 0 0.5rem 0;
        text-align: center;
    }

    a:not(:last-of-type) {
        margin-bottom: 0.4rem;
    }
}

@media (max-width: 40em) {
    .prompt {
        width: 95%;
        border-radius: 8px;
        opacity: 0.9;
        height: auto;
        padding: 1rem 1rem 1.5rem 1rem;

        a {
            width: 60%;
        }
    }
}
</style>