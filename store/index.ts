import { Store } from 'vuex';
import { initializeModules } from '@/utils/store-accesor';

const initializer = (store: Store<any>) => initializeModules(store);

export const plugins = [initializer];
export * from '@/utils/store-accesor';