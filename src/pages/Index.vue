<template>
    <main role="main" id="index">

        <valpo-splash></valpo-splash>

        <valpo-content id="about" class="about flex-rows">
            <h3>Adventures of the Valparaíso</h3>
            <p>
                Pirates are typically known for looting, raiding and wrecking wherever they went. However, did you know that pirates were also the revolutionaries, the progressives, the explorers? They challenged the existing authority, sailed away from mainstream society and created their own alternative culture and socio-economic structure.
            </p>
            <p>
                As pirates of the Valparaíso, we don’t loot, raid, or wreck. We are here to share, to love, and to connect people. Our organisation is about creating appealing and sustainable solutions for challenging the mainstream consumer culture, while providing a bold alternative of thinking about trade and economics.
            </p>
            <p>
                To us, this is the real essence of piracy: the courage to branch out from established societal norms to explore and create progressive, and exciting pathways.
            </p>
            <p class="cta">
                <valpo-button class="button cerulean" label="Read more about us ..."></valpo-button>
            </p>
        </valpo-content>

        <valpo-content id="involved" class="involved flex-rows fixed-pseudo">
            <valpo-list class="icons flex-around">
                <valpo-list-item v-for="(item, index) in involved" :key="item.icon">
                    <figure>
                        <img :src="item.icon" :alt="item.alt">
                    </figure>
                </valpo-list-item>
            </valpo-list>
            <p class="cta">
                <valpo-button class="button robroy large" label="Get involved!"></valpo-button>
            </p>
        </valpo-content>

        <valpo-content id="events" class="events flex-rows fixed-pseudo">
            <h3 class="slogan">
                Events and festivals
            </h3>
            <p>
                We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for an international journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call <strong>the New Pirate Economy</strong>.
            </p>
            <ul class="events-list">
                <li class="event">
                    <h4 class="event-title">
                        First-aid Empathy
                        <span class="event-date">November 1, 2017</span>
                    </h4>
                    <figure class="event-figure">
                        <span class="event-image-wrapper">
                            <img class="event-image" src="../assets/images/image-event01.jpg" alt="First-aid Empathy, November 1, 2017">
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
                            <img class="event-image" src="../assets/images/image-event02.jpg" alt="Delicious dumpster dinner, November 3, 2017">
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
                            <img class="event-image" src="../assets/images/image-event03.jpg" alt="Captain's Maritime, November 17, 2017">
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
        </valpo-content>
    </main>
</template>

<script>
    import ValpoSplash from '@/components/ValpoSplash'
    import ValpoContent from '@/components/ValpoContent'
    import ValpoButton from '@/components/ValpoButton'
    import ValpoList from '@/components/ValpoList'
    import ValpoListItem from '@/components/ValpoListItem'

    export default {
        name: 'Index',
        components: { ValpoSplash, ValpoContent, ValpoButton, ValpoList, ValpoListItem },
        data: () => ({
            involved: [
                {
                    icon: require('../assets/images/icon-boat.svg'),
                    alt: 'Help us get our boat'
                },
                {
                    icon: require('../assets/images/icon-connect.svg'),
                    alt: 'Connect with us'
                },
                {
                    icon: require('../assets/images/icon-globe.svg'),
                    alt: 'I dunno, something with a globe'
                }
            ]
        })
        // mounted () {
        //     this.pagedata = JSON.parse(localStorage.getItem('valparaiso'))[this.$options.name.toLowerCase()]
        // }
    }
</script>

<style lang="scss" scoped>
    .about {
        background: var(--color-light) url('../assets/images/graphic-boat.jpg') no-repeat right bottom;
        color: var(--color-ocean);
        padding-top: calc(var(--tracking-large) * 5);
        min-height: 65vh;
        p {
            background: rgba(255, 255, 255, 0.8);
            text-align: left;
            &.cta {
                background: none;
                margin-top: calc(var(--tracking-large) * 5);
            }
        }
    }
    .involved {
        background: var(--color-ocean) url('../assets/images/image-hand.jpg') no-repeat top center;
        background-size: cover;
        color: var(--color-ocean);
        min-height: 80vh;
        text-align: center;
        .icons {
            margin: 0 auto;
            margin-top: calc(var(--tracking-large) * 10);
            text-align: center;
            width: 60%;
            li {
                cursor: pointer;
                display: inline-block;
                height: 120px;
                list-style-type: none;
                margin: 2.5vw;
                max-width: 160px;
                position: relative;
                transition: all 0.3s ease-out;
                width: 25vw;
                &:hover {
                    transform: scale(1.08);
                }
            }
            &:hover li:not(:hover) {
                opacity: 0.8;
                filter: grayscale(80%);
            }
        }
        .cta {
            margin-top: 70px;
        }
        &:before {
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--color-ocean) 81%, var(--color-ocean) 100%);
            opacity: 0.5;
            z-index: 0;
        }
    }
    .events {
        background: var(--color-ocean);
        color: var(--color-light);
        min-height: 70vh;
        padding-top: calc(var(--tracking-large) * 5);
        text-align: center;
        &:before {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--color-ocean) 81%, var(--color-ocean) 100%);
            height: 100px;
            top: -100px;
            z-index: 10;
        }
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
    }
</style>
