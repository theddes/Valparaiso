<template>
    <main role="main" id="index">

        <valpo-splash class="splash" :video="video" :image="require('../assets/images/image-giuliana.jpg')">
            <valpo-logo class="logo" /><br>
            ~ we like acid yay ~
        </valpo-splash>

        <valpo-content id="volunteer" class="volunteer flex-rows align-center">
            <h3>
                Become a volunteer
            </h3>
            <p>
                We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for aninternational journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call the New Pirate Economy.
            </p>
            <valpo-list class="icons flex-center">
                <valpo-list-item v-for="(item, index) in tasks" :key="item.icon">
                    <figure>
                        <img v-lazy="item.icon" :alt="item.alt">
                        <figcaption>{{ item.alt }}</figcaption>
                    </figure>
                </valpo-list-item>
            </valpo-list>
            <h3 class="projects">
                Current projects
            </h3>
            <p>
                We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for aninternational journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call the New Pirate Economy.
            </p>
        </valpo-content> 
        <valpo-content id="form" class="form flex-rows" v-lazy:background-image="require('../assets/images/image-beach.jpg')">

        </valpo-content>
    </main>
</template>

<script>
    import ValpoSplash from '@/components/ValpoSplash'
    import ValpoLogo from '@/components/ValpoLogo'
    import ValpoContent from '@/components/ValpoContent'
    import ValpoList from '@/components/ValpoList'
    import ValpoListItem from '@/components/ValpoListItem'

    export default {
        name: 'Volunteer',
        components: { ValpoSplash, ValpoLogo, ValpoContent, ValpoList, ValpoListItem },
        data: () => ({
            video: {
                src: 'https://fat.gfycat.com/HighlevelZestyAxolotl.webm',
                loop: true
            },
            tasks: [
                {
                    icon: require('../assets/images/icon-building.svg'),
                    alt: 'Building / Repairing'
                },
                {
                    icon: require('../assets/images/icon-design.svg'),
                    alt: 'Design'
                },
                {
                    icon: require('../assets/images/icon-video.svg'),
                    alt: 'Photography / Video'
                },
                {
                    icon: require('../assets/images/icon-marketing.svg'),
                    alt: 'Marketing'
                },
                {
                    icon: require('../assets/images/icon-social.svg'),
                    alt: 'Social Media'
                }
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .splash {
        .logo {
            max-width: 400px;
            width: 90%;
        }
    }
    .volunteer {
        background: linear-gradient(to bottom, var(--color-ocean) 0%,rgba(0,175,187,1) 100%);
        padding-top: calc(var(--tracking-large) * 5);
        .icons {
            margin: 0 auto;
            margin-top: calc(var(--tracking-large) * 2);
            max-width: 740px;
            text-align: center;
            width: 100%;
            li {
                -webkit-tap-highlight-color: transparent;
                cursor: pointer;
                display: inline-block;
                list-style-type: none;
                margin: 1.8em 2.5vw;
                max-width: 160px;
                position: relative;
                transition: all 0.3s ease-out;
                vertical-align: top;
                width: 20vw;
                figure {
                    height: auto;
                    figcaption {
                        margin-top: 0.5em;
                    }
                }
                &:hover {
                    transform: scale(1.08);
                }
                @media (max-width: 550px) {
                    margin: 0;
                    max-width: 100%;
                    width: 100%;
                    figure {
                        margin: 1.5em auto;
                        max-width: 160px;
                    }
                }
            }
            &:hover li:not(:hover) {
                opacity: 0.8;
                filter: grayscale(80%);
            }
        }
        .projects {
            padding-top: calc(var(--tracking-large) * 6);
        }
    }
    .form {
        background-color: rgba(0,175,187,1);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        margin-top: -1px;
        min-height: 80vh;
    }
</style>
