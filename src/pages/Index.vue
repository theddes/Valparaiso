<template>
    <main role="main" id="index">

        <valpo-splash></valpo-splash>

        <valpo-content id="about" class="about flex-rows" v-lazy:background-image="require('../assets/images/graphic-boat.jpg')">
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

        <valpo-content id="involved" class="involved flex-rows fixed-pseudo" v-lazy:background-image="require('../assets/images/image-hand.jpg')">
            <valpo-list class="icons flex-around">
                <valpo-list-item v-for="(item, index) in involved" :key="item.icon">
                    <figure>
                        <img v-lazy="item.icon" :alt="item.alt">
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
            <valpo-events></valpo-events>
        </valpo-content>
    </main>
</template>

<script>
    import ValpoSplash from '@/components/ValpoSplash'
    import ValpoContent from '@/components/ValpoContent'
    import ValpoButton from '@/components/ValpoButton'
    import ValpoList from '@/components/ValpoList'
    import ValpoListItem from '@/components/ValpoListItem'
    import ValpoEvents from '@/components/ValpoEvents'

    export default {
        name: 'Index',
        components: { ValpoSplash, ValpoContent, ValpoButton, ValpoList, ValpoListItem, ValpoEvents },
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
        background-color: var(--color-light);
        background-repeat: no-repeat;
        background-position: right bottom;
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
        background-color: var(--color-ocean);
        background-repeat: no-repeat;
        background-position: top center;
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
    }
</style>
