# bitfoliex-admin-web-app

> Bitfoliex managers spa

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## Store Config
---
To add a new module to the Store:

1. Create a store file, an example can be found with _@/store/counter.ts_
2. Add the module to the store-accesor, in _@/utils/store-accesor.ts_
3. The module can be accesed by any component
```
import { moduleName } from '@/store';
```