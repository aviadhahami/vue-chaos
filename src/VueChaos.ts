import Vue from 'vue';

export default Vue.component('VueChaos', {
    functional: true,
    props: {
        chance: {
            default: 5,
            type: Number
        },
        errorMessage: {
            default: 'Chaos emitted!',
            type: String
        },
        runInProduction: {
            default: false,
            type: Boolean
        }
    },
    render(createElement, ctx) {
        const shouldEmitChaos = (ctx.props.chance / 10) >= Math.random();
        if (shouldEmitChaos) {
            console.log('emitting!');
           throw new Error(ctx.props.errorMessage);
        }
        return createElement('div', ctx.data, ctx.children);
    }
});
