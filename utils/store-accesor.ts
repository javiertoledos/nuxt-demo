import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import counter from '~/store/counter';

/**
 * This configures the modules with the actual store.
 * Is used to reduce the configuration in the component, that would be somenthing like this
 * 
 *  mounted() {
 *    this.module = getModule(counter, this.$store)
 *  }
 * 
 * Now, with this implementation, requires only an import
 * 
 * import { moduleName } from '@/store';
 * 
 * Add the new modules in the initialiseStores, like the example
 * 
 * function initialiseStores(store: Store<any>): void {
 *  counterStore = getModule(counter, store)a
 * }
 * 
 */

let counterStore: counter;

function initialiseStores(store: Store<any>): void {
    counterStore = getModule(counter, store)
}

export {
  initialiseStores,
  counterStore,
}