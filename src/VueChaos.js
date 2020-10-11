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
        if (process.env.NODE_ENV === 'production') {
            if (!ctx.props.runInProduction) {
                return createElement('div', ctx.data, ctx.children);
            } else {
                console.log('Careful: VueChaos is now in production');
            }
        }

        const shouldEmitChaos = (ctx.props.chance / 10) >= Math.random();
        if (shouldEmitChaos) {
            console.log('Throwing error!');

            // This will throw as the component doesn't have a 'neverGonnaLetYouDown' method nor 'name' prop
            return createElement({
                template: '<div>Never gonna give you up, {{ neverGonnaLetYouDown() }}</div>',
                props: {
                    name: {
                        required: true,
                        type: String
                    }
                }
            });
        }
        return createElement('div', ctx.data, ctx.children);
    }
});

export default vueChaos;
