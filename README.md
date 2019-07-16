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

## API Config
---
To add a new route to the api (@/api/admin):

1. Create a folder for the module, if doesnt exist. You can guide with the postman definition.
2. Create the file with the name of the method. (eg. serverUp, login, etc...);
3. Create a index.ts if isn't created, and add an export method:
```
import { login } from './login';

export {
    login
};
```
4. In the index.ts that is located in the root of @/api, import and export the module:
```
import * as HelperCheck from './admin/helpercheck';
import * as Auth from './admin/auth';

export {
    HelperCheck,
    Auth
}
```
5. Now it can be accesed via
```
import { Auth } from '@/api';
...
Auth.login(params);
```