import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import counter from '~/store/counter';

let counterStore: counter;

function initialiseStores(store: Store<any>): void {
    counterStore = getModule(counter, store)
}

export {
  initialiseStores,
  counterStore,
}