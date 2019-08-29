<template lang="pug">
  div
    nav.navbar(role="navigation" aria-label="main-navigation")
      .navbar-menu
        .navbar-start
          nuxt-link.navbar-item(
            :to="localePath('index')"
          ) {{ $t('nav.home') }}
          nuxt-link.navbar-item(
            :to="localePath('private')"
          ) {{ $t('nav.private') }}
        .navbar-end
          a.navbar-item(
            v-for="locale in availableLocales"
            :key="locale.code"
            :href="switchLocalePath(locale.code)"
            :class="{ 'is-active': locale.code === currentLocale }"
          )  {{ locale.code  }}

          .navbar-item
            nuxt-link(
              v-if="!isLoggedIn"
              :to="localePath('login')"
            ) {{ $t('nav.login') }}
            a(
              href="#"
              v-else
              @click.prevent="logout"
            ) {{ $t('nav.logout') }}
    .section
      .container
        nuxt(:key="$route.fullPath")
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

  get isLoggedIn() {
    return this.$store.state.auth.loggedIn
  }

  async logout() {
    await this.$auth.logout()
  }
}
</script>
<style lang="scss">
html {
    background-color: 	#fafafa;
}
</style>
