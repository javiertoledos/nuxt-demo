<template lang="pug">
  div
    nav.navbar(role="navigation" aria-label="main-navigation")
      .navbar-menu
        .navbar-end
            nuxt-link.navbar-item(
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              :class="{ 'is-active': locale.code === currentLocale }"
            )  {{ locale.code  }}
    .section
      .container
        nuxt
</template>
<script type="ts">
import { Vue, Component, State } from 'nuxt-property-decorator';

@Component
export default class LoginPage extends Vue {
  get availableLocales () {
    return this.$i18n.locales
  }
  get currentLocale() {
    return this.$i18n.locale
  }
}
</script>
<style lang="scss">
html {
    background-color: 	#fafafa;
}
</style>
