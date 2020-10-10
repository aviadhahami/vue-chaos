import Vue from 'vue';

const vueChaos = Vue.component('VueChaos', {
    functional: true,
    props: {
        chance: {
            default: 5,
            type: Number,
        },
        errorMessage: {
            default: '🔥 Chaos emitted by VueChaos 🔥',
            type: String
        },
        runInProduction: {
            default: false,
            type: Boolean
        }
    },
    render(createElement, ctx) {

        // Verify we're not getting anyone fired
        if (process.env.NODE_ENV === 'production' && !ctx.props.runInProduction) {
            return createElement('div', ctx.data, ctx.children);
        } else {
            console.log('Careful: VueChaos is now in production');
        }

        const shouldEmitChaos = (ctx.props.chance / 10) >= Math.random();
        if (shouldEmitChaos) {
            throw new Error(ctx.props.errorMessage);
        }
        return createElement('div', ctx.data, ctx.children);
    }
});

export {vueChaos as VueChaos};
