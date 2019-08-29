<template lang="pug">
  div
    .h1.title {{ $t('home.hello-world-title')}}
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue'

@Component({
  middleware: ["auth"],
  components: {
    Logo
  }  
})
export default class Index extends Vue {

}
</script>

<style lang="scss">

</style>
