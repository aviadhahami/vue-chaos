# vue-chaos
[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6ImF2aWFkaGFoYW1pIiwicmVwbzEiOiJ2dWUtY2hhb3MiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoyMjkxNiwiaWF0IjoxNjAyMTY1ODk5fQ.xVtHiDxKYQDmwWeL0SkD78zUOkOahL3lFBVzFzuWVpY)](https://www.deepcode.ai/app/gh/aviadhahami/vue-chaos/_/dashboard?utm_content=gh%2Faviadhahami%2Fvue-chaos)
[![Known Vulnerabilities](https://snyk.io/test/github/aviadhahami/vue-chaos/badge.svg)](https://snyk.io/test/github/aviadhahami/vue-chaos)

A simple yet chaotic component to introduce chaos in your Vue app

#### Usage
Install
```
npm i vue-chaos
```
Import & use
```vue
<template>
        <VueChaos
         :chance="5"
         error-message="My custom error message"
         :run-in-production="false">
          <MyOtherComponent />
        </VueChaos>
</template>
<script>
    import VueChaos from 'vue-chaos';
    ...
    export default {
      ...
      components:{
        VueChaos
      }
    }
</script>
```

### Props
* `chance` - `{type: Number, default: 5}` - decides the probability of the wrapper to throw an error;
* `error-message` - `{type: String, default: 'Chaos emitted by VueChaos!'}` - custom error message to throw (i.e. to assert snapshots against)
* `run-in-production` - `{type: Boolean, default: false}` - a flag to flip if we'd like to cause chaos in production (use at own risk!) 


### Chaos Engineering?
`// TODO`

### More awesome chaotic tools
`// TODO`
