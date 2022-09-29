<template>
    <div class="register-page">
        <h1 class="title">Register</h1>
        <form class="register-form">
            <div class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" class="input" />
                <!-- error -->
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" class="input" />
                <!-- error -->
            </div>


            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" class="input" />
                <!-- error -->
            </div>
            <div class="form-control">
                <label for="repeatPassword">Confirm password</label>
                <input type="password" id="repeatPassword" class="input" />
                <!-- error -->
            </div>
            <div class="form-control button-div">
                <base-button type="submit">register</base-button>
            </div>
            <!-- error -->
        </form>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.register-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
}

.register-form {
    display: flex;
    flex-direction: column;
    width: 20rem;
    max-width: 90%;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
}

.form-control {
    width: 100%;
    border: none;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.input {
    width: 100%;
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 2px;
    font-size: 1.15rem;

    &:focus {
        background-color: $gray-darker;
        outline: none;
    }
}

.input-error,
.input-error:focus {
    border: 3px solid $danger;
}

.button-div {
    margin-top: 0.5rem;
}

.http-error {
    color: red;
    width: 100%;
}

.error {
    margin: 0;
    width: auto;
    text-align: left;
    background-color: $danger;
    padding: 4px;
    border-radius: 3px;
    font-size: 0.8rem;
}

@media (max-width: 40em) {
    .button-div {
        margin-top: 1rem;
    }
}
</style>
