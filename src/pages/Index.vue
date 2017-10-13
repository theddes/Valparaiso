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
                <valpo-button class="button cerulean" label="Get involved"></valpo-button>
            </p>
        </valpo-content>
    </main>
</template>

<script>
    import ValpoSplash from '@/components/ValpoSplash'
    import ValpoContent from '@/components/ValpoContent'
    import ValpoButton from '@/components/ValpoButton'

    export default {
        name: 'Index',
        components: { ValpoSplash, ValpoContent, ValpoButton }
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
</style>
