<template>
    <div>
        <h2 v-t="'login.title-login'" />
        <span class="count">{{ counter }}</span>
        <span class="square">(square: {{ square }})</span>
        <button @click="fetchStatus">Increment</button>
        <div>{{ status }}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, State } from 'nuxt-property-decorator';
import { counterStore } from '@/store';

@Component({})
export default class LoginPage extends Vue {
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