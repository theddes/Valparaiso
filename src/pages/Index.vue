<template>
    <main role="main" id="index">
        <valpo-splash></valpo-splash>
        <valpo-content class="intro flex-rows">
            <h3 id="about">the Adventures of the Valparaiso</h3>
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
    }
</script>

<style lang="scss" scoped>
    .intro {
        background: var(--color-light) url('../assets/images/graphic-boat.jpg') no-repeat right bottom;
        color: var(--color-ocean);
        min-height: 60vh;
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
            margin-top: 70px;
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
            }
        }
        .slogan {
            margin-top: calc(80px - 2vw);
            text-shadow: 1px 1px 1px var(--color-light);
        }
        .cta {
            margin-top: 80px;
        }
        &:before {
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(217,230,233,0) 15%,rgba(1,85,107,1) 100%);
            opacity: 0.5;
            z-index: 0;
        }
    }
</style>
