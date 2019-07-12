import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import API from '@/api';

interface baseRequest {
    success: string,
    result: {
        timestamp: number
    }
}

@Module({
    stateFactory: true,
    namespaced: true,
    name: 'counter'
})
export default class Counter extends VuexModule {
    counter: number = 3;
    status: baseRequest = { success: "true", result: { timestamp: 5263 } };

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
        const { data } = await API.login();
        return {
            status: data
        };
    }
}