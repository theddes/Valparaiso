<template>
    <main role="main" id="index">

        <valpo-splash></valpo-splash>

        <valpo-content id="about" class="about flex-rows">
            <h3>the Adventures of the Valparaiso</h3>
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
                <valpo-button class="button cerulean shadow" label="Read more about us ..."></valpo-button>
            </p>
        </valpo-content>

        <valpo-content id="involved" class="involved flex-rows fixed-pseudo">
            <valpo-list class="icons flex-around">
                <valpo-list-item v-for="(item, index) in involved" :key="item.icon">
                    <figure>
                        <img :src="item.icon">
                    </figure>
                </valpo-list-item>
            </valpo-list>
            <h4 class="slogan">
                A ship-based community working on new sustainable solutions
            </h4>
            <p class="cta">
                <valpo-button class="button robroy large shadow" label="Get involved!"></valpo-button>
            </p>
        </valpo-content>

        <valpo-content id="events" class="events flex-rows fixed-pseudo">
            
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
                    icon: require('../assets/images/icon-boat.svg')
                },
                {
                    icon: require('../assets/images/icon-connect.svg')
                },
                {
                    icon: require('../assets/images/icon-globe.svg')
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
            margin-top: calc(var(--tracking-large) * 8);
            text-align: center;
            width: 60%;
            li {
                cursor: pointer;
                display: inline-block;
                height: 120px;
                list-style-type: none;
                margin: 2vw;
                max-width: 130px;
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
        .slogan {
            margin-top: calc(80px - 2vw);
            text-shadow: 0px 0px 2px var(--color-light);
        }
        .cta {
            margin-top: 50px;
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
        &:before {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--color-ocean) 81%, var(--color-ocean) 100%);
            height: 200px;
            top: -180px;
            z-index: 10;
        }
    }
</style>
