<template>
    <ul class="events-list">
        <li class="event">
            <h4 class="event-title">
                First-aid Empathy
                <span class="event-date">November 1, 2017</span>
            </h4>
            <figure class="event-figure">
                <span class="event-image-wrapper">
                    <img class="event-image" v-lazy="require('../assets/images/image-event01.jpg')" alt="First-aid Empathy, November 1, 2017">
                </span>
                <figcaption class="event-text">
                    A lot of people struggle giving support when a friend is in pain, most would try to comfort their friend by giving advice or telling something about an experience they themselves once had. Advice, sympathy, pity and many more ways we choose to comfort our loved ones are not always the best way to bring comfort to our friends and help them mourn.<br><br>
                    <p class="align-right">
                        <valpo-button class="button robroy small" url="https://www.facebook.com/events/1424126381016071" label="Join this event"></valpo-button>
                    </p>
                </figcaption>
            </figure>
        </li>
        <li class="event">
            <h4 class="event-title">
                Delicious dumpster dinner
                <span class="event-date">November 3, 2017</span>
            </h4>
            <figure class="event-figure">
                <span class="event-image-wrapper">
                    <img class="event-image" v-lazy="require('../assets/images/image-event02.jpg')" alt="Delicious dumpster dinner, November 3, 2017">
                </span>
                <figcaption class="event-text">
                    Let's have a lovely dinner at our lovely boat. Just an evening where we come together and celebrate our community.<br><br>
                    <p class="align-right">
                        <valpo-button class="button robroy small" url="https://www.facebook.com/events/1315747708551348" label="Join this event"></valpo-button>
                    </p>
                </figcaption>
            </figure>
        </li>
        <li class="event">
            <h4 class="event-title">
                Captain's Maritime
                <span class="event-date">November 17, 2017</span>
            </h4>
            <figure class="event-figure">
                <span class="event-image-wrapper">
                    <img class="event-image" v-lazy="require('../assets/images/image-event03.jpg')" alt="Captain's Maritime, November 17, 2017">
                </span>
                <figcaption class="event-text">
                    The Captain invites you to come on board in Amsterdam Noord for chiling out, food, talks & inspiration. You'll get to know our project and share ideas to keep creating a collaborative, sustainable and happy community.<br><br>
                    <p class="align-right">
                        <valpo-button class="button robroy small" url="https://www.facebook.com/events/1085736448229563" label="Join this event"></valpo-button>
                    </p>
                </figcaption>
            </figure>
        </li>
    </ul>  
</template>

<script>
    import ValpoButton from '@/components/ValpoButton'

    export default {
        name: 'Events',
        components: { ValpoButton },
    }
</script>

<style lang="scss" scoped>
    .events-list {
        margin-top: calc(var(--tracking-large) * 5);
        .event {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            list-style-type: none;
            margin-bottom: calc(var(--tracking-large) * 2);
            max-width: 800px;
            position: relative;
            text-align: left;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            .event-date {
                background: var(--color-robroy);
                border-top-right-radius: 3px;
                color: var(--color-light);
                font-family: 'BentonSans';
                font-size: 0.9rem;
                letter-spacing: initial;
                padding: 0.53em 0.7em;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 1;
            }
            .event-title {
                background: rgba(255, 255, 255, 0.9);
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                color: var(--color-ocean);
                font-size: 1.3rem;
                font-weight: 400;
                left: 0;
                letter-spacing: 1px;
                overflow: hidden;
                padding: 0.15em 1em 0.1em 1em;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 1;
            }
            .event-figure {
                .event-image-wrapper {
                    display: block;
                    overflow: hidden;
                    width: 100%;
                    height: 200px;
                    position: relative;
                }
                .event-image {
                    width: 100%;
                    margin-top: 2em;
                }
            }
            .event-text {
                padding: 1em;
                margin-top: 0.4em;
            }
        }
    }
</style>
