<template>
    <div>
        <h2 v-t="'login.title-login'" />
        <!-- <span class="count">{{ sum }}</span> -->
        <span class="count">{{ counter }}</span>
        <!-- <span class="square">(square: {{ square }})</span>
        <button @click="increment">Increment</button> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component, State, namespace } from 'nuxt-property-decorator';
// import * as counter from '@/store/counter';
// import { counterStore } from '@/store';
const counterModule = namespace('@/store');

@Component({})
export default class LoginPage extends Vue {
    // @State counter;
    // @State sum;
    @counterModule.State counter;

    // private count: number = counterStore.counter;
    
    // private square: number = counterStore.square;

    // private increment = counterStore.incr;

    // mounted() {
    //     // console.log(counterStore.square);
    // }

    // get square() {
    //     return counterStore.square
    // }

    // increment() {
    //     return counterStore.incr;
    // }
}
</script>