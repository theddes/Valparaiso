<template>
    <main role="main" id="index">

        <valpo-splash class="splash" :video="video" :image="require('../assets/images/image-giuliana.jpg')">
            <img v-lazy="require('../assets/images/logo-valparaiso.svg')" class="logo" /><br>
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
            <h3 id="projects" class="projects">
                Current projects
            </h3>
            <p>
                We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for aninternational journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call the New Pirate Economy.
            </p>
            <valpo-list class="project-items flex-center">
                <valpo-list-item v-for="(item, index) in projects" :key="item.icon">
                    <figure>
                        <img v-lazy="item.image" :alt="item.title">
                        <figcaption>{{ item.title }}</figcaption>
                    </figure>
                </valpo-list-item>
            </valpo-list>
        </valpo-content> 
        <valpo-content id="form" class="form flex-rows" v-lazy:background-image="require('../assets/images/image-beach.jpg')">
            <h3>Send us a message</h3>
            <form>
                <label for="name">Name</label>
                <input type="text">
            </form>
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
            ],
            projects: [
                {
                    image: require('../assets/images/image-light.jpg'),
                    title: 'We\'re upgrading our ship!'
                },
                {
                    image: require('../assets/images/image-qr.jpg'),
                    title: 'The pirate app'
                },
                {
                    image: require('../assets/images/image-birds.jpg'),
                    title: 'Into the Woods festival'
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
        padding-bottom: calc(var(--tracking-large) * 5);
        padding-top: calc(var(--tracking-large) * 5);
        .icons {
            margin: 0 auto;
            margin-top: calc(var(--tracking-large) * 2);
            max-width: 740px;
            text-align: center;
            width: 100%;
            li {
                margin: 1.8em 2.5vw;
                margin-top: calc(var(--tracking-large) * 1);
                width: 20vw;
                @media (max-width: 800px) {
                    margin-top: 0;
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
        }
        .projects {
            padding-top: calc(var(--tracking-large) * 5);
        }
        .project-items {
            margin-top: calc(var(--tracking-large) * 2);
            li {
                margin-top: calc(var(--tracking-large) * 1);
                figure {
                    width: 100%;
                    img {
                        border: 2px solid var(--color-light);
                        border-radius: 50%;
                        max-height: 160px;
                    }
                    figcaption {
                        font-family: 'BentonSans Cond';
                        padding-top: 0;
                    }
                }
                @media (max-width: 640px) {
                    margin: 0;
                    margin-bottom: 1em;
                    max-width: 100%;
                    width: 100%;
                    figure {
                        margin: 1.5em auto 0;
                        max-width: 160px;
                        figcaption {
                            color: var(--color-light);
                            margin-top: 0px;
                            padding: 0.4em 1em 0.2em;
                        }
                    }
                }
            }
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
