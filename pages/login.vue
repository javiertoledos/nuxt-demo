<template>
    <div>
        <h2 v-t="'login.title-login'" />
        <span class="count">{{ counter }}</span>
        <span class="square">(square: {{ square }})</span>
        <button @click="incr">Increment</button>
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

}
</script>