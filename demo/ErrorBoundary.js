export default {
    name: 'ErrorBoundary',
    data() {
        return {
            error: null
        }
    },
    errorCaptured(err, vm, info) {
        this.error = err;
        console.log('I got called', {info});
        console.log(err, vm, info);
        return false;
    },
    render(createElement) {
        return this.error ?
            createElement('p', 'There was an issue with this component')
            : this.$slots.default[0];
    }
}

