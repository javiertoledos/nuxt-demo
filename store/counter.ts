import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import { HelperCheck } from '@/api';
import StatusCheck = Models.StatusCheck;

@Module({
    stateFactory: true,
    namespaced: true,
    name: 'counter'
})
export default class Counter extends VuexModule {
    counter: number = 3;
    status: StatusCheck = { time: '' };

    /**
     * Getters
     */

    get square(): number {
        return this.counter * this.counter;
    }

    /**
     * Mutations
     */

    @Mutation
    increment(): number {
        return this.counter++;
    }

    /**
     * Actions
     */

    @Action({
        commit: 'increment',
        rawError: true
    })
    async incr() { }

    /**
     * MutationAction
     */

    @MutationAction
    async fetchStatus() {
        const status = await HelperCheck.serverUp();
        return {
            status
        };
    }
}