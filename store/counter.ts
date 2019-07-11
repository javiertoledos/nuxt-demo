import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
    stateFactory: true,
    // namespace: true,
    name: 'counter'
})
export default class Counter extends VuexModule {
    counter: number = 3;
    sum: number = 7;

    get square(): number {
        return this.counter * this.counter;
    }

    @Mutation
    increment(state): number {
        return this.counter++;
    }

    @Action({ commit: 'increment' })
    incr() { }
}