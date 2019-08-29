<template lang="pug">
    div.columns
        .column.is-one-third.is-offset-one-third
            h1.title {{ $t('login.log-in-title') }}
            form(@submit="login")
                .field
                    label.label(for="login_username") {{ $t('login.username-label') }}
                    .control
                        input#login_username.input(
                            type="text" 
                            :placeholder="$t('login.username-placeholder')" 
                            v-model="username"
                            required
                        )
                .field
                    label.label(for="login_password") {{ $t('login.password-label') }}
                    .control
                        input#login_password.input(
                            type="password" 
                            :placeholder="$t('login.password-placeholder')" 
                            v-model="password"
                            required
                        )
                .field
                    .control
                        input.button.is-primary(
                            type="submit" 
                            :value="$t('login.log-in-button')"
                        )
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator';
import { counterStore } from '@/store';

@Component({})
export default class LoginPage extends Vue {
    username : string = '';
    password : string = '';
    // bind to a variable on the state
    get counter() {
        return counterStore.counter
    }

    get status() {
        return JSON.stringify(counterStore.status);
    }

    // bind to a getter
    get square() {
        return counterStore.square;
    }
    login() {
        alert("hola");
    }

    // commit an mutation (best practice: to use an action)
    increment() {
        counterStore.increment();
    }

    // dispath an action
    incr() {
        counterStore.incr();
    }

    fetchStatus() {
        counterStore.fetchStatus();
    }

}
</script>