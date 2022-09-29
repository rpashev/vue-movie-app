<template>
    <section class="feedback">
        <h2>Our Happy Customers</h2>
        <p class="subtitle">
            Check out what our users are saying about the service we offer.
        </p>
        <div class="feedback_items">
            <div class="feedback_item">
                <div class="person">
                    <div class="img">
                        <img src="https://randomuser.me/api/portraits/women/9.jpg" alt="" class="rounded-circle mb-3" />
                    </div>
                    <div>
                        <h3>Jane Doe</h3>
                        <span>03.10.2022</span>
                    </div>
                </div>
                <p>
                    &ldquo;Best app ever! 10/10 would use again. I am so much happier now! Just kidding,
                    this app ruined my life! I will sue the developer and take everything he owns.&rdquo;
                </p>
            </div>

            <div class="feedback_item">
                <div class="person">
                    <div class="img">
                        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" class="rounded-circle mb-3" />
                    </div>
                    <div>
                        <h3>John Doe Doe</h3>
                        <span>08.03.2021</span>
                    </div>
                </div>
                <p>
                    &ldquo;Best app ever! 10/10 would use again. I am so much happier now! Just kidding,
                    this app ruined my life! I will sue the developer and take everything he owns.&rdquo;
                </p>
            </div>

            <div class="feedback_item">
                <div class="person">
                    <div class="img">
                        <img src="https://randomuser.me/api/portraits/women/14.jpg" alt=""
                            class="rounded-circle mb-3" />
                    </div>
                    <div>
                        <h3>Rebecca James</h3>
                        <span>16.01.2022</span>
                    </div>
                </div>
                <p>
                    &ldquo;Best app ever! 10/10 would use again. I am so much happier now! Just kidding,
                    this app ruined my life! I will sue the developer and take everything he owns.&rdquo;
                </p>
            </div>

            <div class="feedback_item">
                <div class="person">
                    <div class="img">
                        <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="" class="rounded-circle mb-3" />
                    </div>
                    <div>
                        <h3>Ted Mosby</h3>
                        <span>26.02.2020</span>
                    </div>
                </div>
                <p>
                    &ldquo;Best app ever! 10/10 would use again. I am so much happier now! Just kidding,
                    this app ruined my life! I will sue the developer and take everything he owns.&rdquo;
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.feedback {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 6rem 0;


}

.subtitle {
    opacity: 0.8;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 1.1rem;
}

.feedback_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;


}

.feedback_item {
    padding: 1.5rem 2rem;
    min-width: 280px;
    max-width: 450px;
    width: 40%;
    border-radius: 10px;
    background: $gray-darkest;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;



    p {
        font-style: italic;
        opacity: 0.8;
    }
}

.person {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    h3 {
        opacity: 0.9;
        font-size: 1.1rem;
    }



    span {
        font-size: 0.8rem;
        opacity: 0.7;
    }
}

.img {
    width: 4rem;
    height: 4rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: block;
    }
}

@media (max-width: 40em) {

    .feedback_item {
        width: 100%;
    }
}
</style>